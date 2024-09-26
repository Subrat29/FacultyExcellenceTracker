import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, DocumentSearchIcon, UserIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white p-4 h-screen">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Faculty Dashboard
      </div>
      <ul className='flex-1 px-4 py-6 space-y-4'>
        <li className="mb-4">
          <Link to="/faculty-dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <HomeIcon className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/profile" className="hover:text-yellow-300">Profile Management</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/appraisal-form" className="hover:text-yellow-300">Appraisal Form</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/performance" className="hover:text-yellow-300">Performance Chart</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/incentives" className="hover:text-yellow-300">Incentives</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/integration" className="hover:text-yellow-300">Integration Tools</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/collaboration" className="hover:text-yellow-300">Collaboration Hub</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/career-path" className="hover:text-yellow-300">Career Path</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/past-appraisals" className="hover:text-yellow-300">Past Appraisal History</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/detailed-analysis" className="hover:text-yellow-300">Detailed Analysis</Link>
        </li>
        <li className="mb-4">
          <Link to="/faculty-dashboard/leaderboard" className="hover:text-yellow-300">Leaderboard</Link>
        </li>
      </ul>
    </div>
  )
}
