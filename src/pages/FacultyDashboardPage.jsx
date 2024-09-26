import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Faculty/Navbar';
import Sidebar from '../components/Faculty/Sidebar';
import FacultyDashboard from '../components/Faculty/FacultyDashboard';
import ProfileManagement from '../components/Faculty/ProfileManagement';
import AppraisalForm from '../components/Faculty/AppraisalForm';
import PerformanceChart from '../components/Faculty/PerformanceChart';
import PastAppraisalHistory from '../components/Faculty/PastAppraisalHistory';
import DetailedAnalysis from '../components/Faculty/DetailedAnalysis';
import FacultyLeaderboard from '../components/Faculty/FacultyLeaderboard';

const FacultyDashboardPage = () => {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<FacultyDashboard />} />
            <Route path="/profile" element={<ProfileManagement />} />
            <Route path="/appraisal-form" element={<AppraisalForm />} />
            <Route path="/performance" element={<PerformanceChart />} />
            <Route path="/past-appraisals" element={<PastAppraisalHistory />} />
            <Route path="/detailed-analysis" element={<DetailedAnalysis />} />
            <Route path="/leaderboard" element={<FacultyLeaderboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboardPage;