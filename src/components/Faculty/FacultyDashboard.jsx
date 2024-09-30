import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-2/3 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Faculty Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Management Card */}
          <div className="bg-blue-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Profile Management</h3>
            <p className="text-gray-600">Manage your personal and professional details.</p>
          </div>

          {/* Appraisal Form Card */}
          <div className="bg-green-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Appraisal Form</h3>
            <p className="text-gray-600">Fill out your appraisal form for review.</p>
          </div>

          {/* Performance Chart Card */}
          <div className="bg-yellow-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Performance Chart</h3>
            <p className="text-gray-600">Visualize your performance metrics.</p>
          </div>

          {/* Incentives Card */}
          <div className="bg-red-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Incentives</h3>
            <p className="text-gray-600">Explore your available incentives.</p>
          </div>

          {/* Integration Tools Card */}
          <div className="bg-purple-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Integration Tools</h3>
            <p className="text-gray-600">Connect with various tools for enhanced productivity.</p>
          </div>

          {/* Collaboration Hub Card */}
          <div className="bg-teal-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Collaboration Hub</h3>
            <p className="text-gray-600">Work together with peers on projects.</p>
          </div>

          {/* Career Path Card */}
          <div className="bg-indigo-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Career Path</h3>
            <p className="text-gray-600">Explore your potential career advancements.</p>
          </div>

          {/* Past Appraisal History Card */}
          <div className="bg-orange-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Past Appraisal History</h3>
            <p className="text-gray-600">Review your previous appraisals.</p>
          </div>

          {/* Detailed Analysis Card */}
          <div className="bg-pink-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Detailed Analysis</h3>
            <p className="text-gray-600">In-depth analysis of your performance.</p>
          </div>

          {/* Leaderboard Card */}
          <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">Leaderboard</h3>
            <p className="text-gray-600">See how you rank among your peers.</p>
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
