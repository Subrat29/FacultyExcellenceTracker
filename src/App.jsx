/* eslint-disable react/prop-types */
import React, { useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// Lazy load pages for better performance
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const Landing = React.lazy(() => import('./pages/LandingPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const FacultyDashboardPage = React.lazy(() =>
  import('./pages/FacultyDashboardPage')
);
const AdminDashboardPage = React.lazy(() =>
  import('./pages/AdminDashboardPage')
);
const StudentDashboardPage = React.lazy(() =>
  import('./components/Student/StudentDashboardPage')
);
const ErrorPage = React.lazy(() => import('./utils/ErrorPage'));

import { loginSuccess } from './store/features/authSlice';
import ProtectedRoute from './components/Admin/protectedRoute';
import useAuthenticate from './hooks/useAuth';
import ChangePasswordPage from './pages/ChangePassword';
import { getRoleFromToken } from './utils/getRoleFromToken';

function App() {
  const dispatch = useDispatch();
  const role = getRoleFromToken();

  // Get data from Redux store
  const { accessToken, refreshToken, user, roleType, status } = useSelector(
    (state) => state.auth
  );

  // Initialize user data in the Redux store from localStorage on app load
  useEffect(() => {
    if (!accessToken && !refreshToken && !user) {
      const storedAccessToken = localStorage.getItem('accessToken');
      const storedRefreshToken = localStorage.getItem('refreshToken');
      const storedUser = localStorage.getItem('user');
      const storedRoleType = localStorage.getItem('roleType');

      try {
        if (
          storedAccessToken &&
          storedRefreshToken &&
          storedUser &&
          storedRoleType
        ) {
          dispatch(
            loginSuccess({
              accessToken: storedAccessToken,
              refreshToken: storedRefreshToken,
              user: JSON.parse(storedUser),
              roleType: storedRoleType,
            })
          );
        }
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        // Clear localStorage if there's a parsing error
        localStorage.clear();
      }
    }
  }, [dispatch, accessToken, refreshToken, user]);

  return (
    <Router>
      <Toaster />
      <AuthenticateWrapper>
        <Suspense fallback={<LoadingScreen />}>
          <AppRoutes
            status={status}
            user={user}
            roleType={roleType}
            role={role}
          />
        </Suspense>
      </AuthenticateWrapper>
    </Router>
  );
}

// Separate component for routes to use useLocation inside Router
const AppRoutes = ({ status, user, role }) => {
  const location = useLocation();

  return (
    <Routes>
      {/* Root Route - Redirect based on authentication status */}
      <Route
        path="/"
        element={
          status === 'authenticated' ? (
            <Navigate
              to={
                role === 'faculty'
                  ? '/faculty-dashboard'
                  : role === 'admin'
                  ? '/admin-dashboard'
                  : role === 'student'
                  ? '/student-dashboard'
                  : '/login' // fallback if the role is undefined or not recognized
              }
              replace
            />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      {/* Public Routes */}
      <Route
        path="/login"
        element={
          status === 'authenticated' ? (
            <Navigate
              to={
                role === 'faculty'
                  ? '/faculty-dashboard'
                  : role === 'admin'
                  ? '/admin-dashboard'
                  : role === 'student'
                  ? '/student-dashboard'
                  : '/' // fallback route if role is missing
              }
              replace
            />
          ) : (
            <LoginPage />
          )
        }
      />
      {/* Register Route */}
      <Route path="/register/*" element={<RegisterPage />} />
      {/* Protected Routes */}
      <Route element={<ProtectedRoute redirectPath="/login" />}>
        <Route
          path="/faculty-dashboard/*"
          element={
            role === 'faculty' ? (
              <FacultyDashboardPage />
            ) : (
              <Navigate to="/error" />
            )
          }
        />
        <Route
          path="/admin-dashboard/*"
          element={
            role === 'admin' ? <AdminDashboardPage /> : <Navigate to="/error" />
          }
        />
        <Route
          path="/student-dashboard/*"
          element={
            role === 'student' ? (
              <StudentDashboardPage />
            ) : (
              <Navigate to="/error" />
            )
          }
        />
        <Route path="/change-password" element={<ChangePasswordPage />} />
      </Route>
      {/* Error Route */}
      <Route path="/error" element={<ErrorPage />} />
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
};

// Loading Screen Component
const LoadingScreen = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Authentication Wrapper
const AuthenticateWrapper = ({ children }) => {
  const { status: authStatus, loading: authLoading } = useAuthenticate();
  const location = useLocation();

  // Check if the current route is register and has a token
  const isRegisterRouteWithToken =
    location.pathname.startsWith('/register') &&
    new URLSearchParams(location.search).has('token');

  if (authLoading) {
    return <LoadingScreen />;
  }

  // Only redirect to login if it's not the register route with a token
  if (authStatus === 'unauthenticated' && !isRegisterRouteWithToken) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <LoginPage />
      </Suspense>
    );
  }

  return children;
};

export default App;
