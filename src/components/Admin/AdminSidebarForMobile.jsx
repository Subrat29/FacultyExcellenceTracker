import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, DocumentSearchIcon, UserIcon } from '@heroicons/react/outline'; // Importing icons from Heroicons

const AdminSidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white w-60 sm:flex flex-col">
      <div className="text-xl font-bold p-6 border-b border-gray-700">
        Admin Dashboard
      </div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        <Link to="/admin-dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <HomeIcon className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <Link
          to="/admin-dashboard/profile"
          className="flex items-center p-2 hover:bg-gray-700 rounded"
        >
          <UserIcon className="w-5 h-5 mr-3" />
          Profile Management
        </Link>
        <Link to="/admin-dashboard/appraisals" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <UserIcon className="w-5 h-5 mr-3" />
          Appraisals
        </Link>
        <Link to="/admin-dashboard/faculty-stats" className="flex mb-6 items-center p-2 hover:bg-gray-700 rounded">
          <DocumentSearchIcon className="w-5 h-5 mr-3" />
          Faculty Stats
        </Link>

        <div className='ml-3'>
          <select
            // value={selectedLanguage}
            // onChange={handleLanguageChange}
            className="bg-blue-500 text-white py-1 px-2 rounded-md"
          >
            <option value="English">English</option>
            <option value="Spanish">Hindi</option>
            <option value="French">Tamil</option>
          </select>
        </div>
        
        <button className='px-4 py-1 w-full bg-red-500 hover:bg-red-400 rounded-md'>
            Logout
        </button>

        {/* Add more navigation links as required */}
      </nav>
    </div>
  );
};

export default AdminSidebar;
