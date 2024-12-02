import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FacultyDashboardPage from './pages/FacultyDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import StudentDashboardPage from './components/Student/StudentDashboardPage';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './utils/ErrorPage';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './store/features/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Get data from localStorage
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const user = JSON.parse(localStorage.getItem('user')); // Ensure to store user as a stringified JSON object
    const roleType = localStorage.getItem('roleType');

    // If data exists in localStorage, dispatch loginSuccess to populate Redux store
    if (accessToken && refreshToken && user && roleType) {
      dispatch(loginSuccess({ accessToken, refreshToken, user, roleType }));
    }
  }, [dispatch]);

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register/*" element={<RegisterPage />} />
        <Route path="/faculty-dashboard/*" element={<FacultyDashboardPage />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboardPage />} />
        <Route path="/student-dashboard/*" element={<StudentDashboardPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
