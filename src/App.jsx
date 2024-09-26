import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FacultyDashboardPage from './pages/FacultyDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faculty-dashboard/*" element={<FacultyDashboardPage />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
