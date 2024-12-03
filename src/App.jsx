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

function App() {
  const dispatch = useDispatch();

  // Get data from Redux store
  const { accessToken, refreshToken, user, roleType, status } = useSelector(
    (state) => state.auth
  );

  // Initialize user data in the Redux store from localStorage on app load
  useEffect(() => {
    // Only load the data if it is not already present in the Redux store
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
      <AuthenticateWrapper>
        <Toaster />
        <Suspense fallback={<LoadingScreen />}>
          <AppRoutes status={status} user={user} roleType={roleType} />
        </Suspense>
      </AuthenticateWrapper>
    </Router>
  );
}

// Separate component for routes to use useLocation inside Router
const AppRoutes = ({ status, user }) => {
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
                user?.role === 'faculty'
                  ? '/faculty-dashboard'
                  : user?.role === 'admin'
                  ? '/admin-dashboard'
                  : user?.role === 'student'
                  ? '/student-dashboard'
                  : '/login' // fallback if the role is undefined or not recognized
              }
              replace
            />
          ) : (
            <Navigate to="/login" replace />
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
                user?.role === 'faculty'
                  ? '/faculty-dashboard'
                  : user?.role === 'admin'
                  ? '/admin-dashboard'
                  : user?.role === 'student'
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

      <Route
        path="/register/*"
        element={
          // Use useLocation to check the URL for the token query parameter
          (() => {
            const hasToken = new URLSearchParams(location.search).has('token');

            if (hasToken) {
              // Allow access if token is present
              return <RegisterPage />;
            } else {
              // Redirect to error page if token is missing
              return <Navigate to="/error" replace />;
            }
          })()
        }
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute redirectPath="/login" />}>
        <Route path="/faculty-dashboard/*" element={<FacultyDashboardPage />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboardPage />} />
        <Route path="/student-dashboard/*" element={<StudentDashboardPage />} />
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

  // If still loading, show the loading screen
  if (authLoading) {
    return <LoadingScreen />;
  }

  // If unauthenticated, render the Login page
  if (authStatus === 'unauthenticated') {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <LoginPage />
      </Suspense>
    );
  }

  return children;
};

export default App;
