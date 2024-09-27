import React from 'react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminHeader from '../components/Admin/AdminHeader';
import { Route, Routes } from 'react-router-dom';
import DashboardContent from '../components/Admin/DashboardContent';
import AppraisalList from '../components/Admin/AppraisalList';
import ReviewSubmissions from '../components/Admin/ReviewSubmissions';
import Stats from '../components/Admin/Stats';

const AdminDashboardPage = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="appraisals" element={<AppraisalList />} />
            <Route path="review" element={<ReviewSubmissions />} />
            <Route path="faculty-stats" element={<Stats />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
