import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, DocumentSearchIcon, UserIcon } from '@heroicons/react/outline';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { TfiPencilAlt } from 'react-icons/tfi';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <div className="relative h-screen">
      {/* Sidebar Toggle Button (Visible only for small screens) */}
      <button
        className="fixed top-3 z-50 px-4 py-2 rounded sm:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <RxCross2 className='text-red-500 text-2xl ml-64 -mt-1'/> :<FaBars className='text-black -mt-1 text-2xl'/>}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-60 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 sm:relative sm:translate-x-0 sm:flex sm:flex-col`}
      >
        <div className="text-xl font-bold p-4 sm:p-6 border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link
            to="/admin-dashboard"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={handleLinkClick}
          >
            <HomeIcon className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/admin-dashboard/profile"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={handleLinkClick}
          >
            <UserIcon className="w-5 h-5 mr-3" />
            Profile Management
          </Link>
          <Link
            to="/admin-dashboard/appraisals"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
            onClick={handleLinkClick}
          >
            <TfiPencilAlt className="w-5 h-5 mr-3" />
            Appraisals
          </Link>
          <Link
            to="/admin-dashboard/faculty-stats"
            className="flex mb-6 items-center p-2 hover:bg-gray-700 rounded"
            onClick={handleLinkClick}
          >
            <DocumentSearchIcon className="w-5 h-5 mr-3" />
            Faculty Stats
          </Link>
          <div className='ml-3'>
          <select
            // value={selectedLanguage}
            // onChange={handleLanguageChange}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            <option value="English">English</option>
            <option value="Spanish">Hindi</option>
            <option value="French">Tamil</option>
          </select>
        </div>
        </nav>
        <button
          className="px-4 py-1 mt-20 w-52 mx-4 bg-red-500 hover:bg-red-400 rounded-md"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar on logout
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

