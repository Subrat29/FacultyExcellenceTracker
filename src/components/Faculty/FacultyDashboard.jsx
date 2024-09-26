import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-2/3 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Faculty Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Summary of performance */}
          <div className="p-4 bg-green-100 rounded shadow" onClick={() => navigate('/faculty-dashboard/performance')}>
            <h3 className="text-xl font-semibold">Performance Overview</h3>
            <p>Track your research, teaching, and service performance.</p>
          </div>
          {/* Appraisal Form */}
          <div className="p-4 bg-blue-100 rounded shadow" onClick={() => navigate('/faculty-dashboard/appraisal-form')}>
            <h3 className="text-xl font-semibold">Appraisal Form</h3>
            <p>Submit your latest appraisal form for review.</p>
          </div>
          {/* Incentives */}
          <div className="p-4 bg-yellow-100 rounded shadow" onClick={() => navigate('/faculty-dashboard/incentives')}>
            <h3 className="text-xl font-semibold">Incentive-Based Engagement</h3>
            <p>Earn points and badges for active engagement.</p>
          </div>
          {/* Career Path */}
          <div className="p-4 bg-purple-100 rounded shadow" onClick={() => navigate('/faculty-dashboard/career-path')}>
            <h3 className="text-xl font-semibold">Career Path Prediction</h3>
            <p>Discover your personalized career development plan.</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 p-6 bg-white shadow rounded md:ml-4 mt-4 md:mt-0">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        {/* Notification section */}
        <div className="space-y-2">
          <div className="p-3 bg-gray-100 rounded shadow">
            <p>New feedback received from your peer review request.</p>
          </div>
          <div className="p-3 bg-gray-100 rounded shadow">
            <p>Reminder: Appraisal form submission is due in 3 days.</p>
          </div>
          <div className="p-3 bg-gray-100 rounded shadow">
            <p>Update: Your career path prediction has been updated.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
