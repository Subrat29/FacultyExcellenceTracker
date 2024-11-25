import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FacultyDashboardPage from "./pages/FacultyDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import StudentDashboardPage from "./components/Student/StudentDashboardPage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faculty-dashboard/*" element={<FacultyDashboardPage />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboardPage />} />
        <Route path="/student-dashboard/*" element={<StudentDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
