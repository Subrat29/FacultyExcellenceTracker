import React, { useState } from 'react';
import AdminSidebarForMobile from './AdminSidebarForMobile';
import logo from '../../assets/Logo.png'

const AdminHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
    const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-white shadow-md p-3 sm:p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 sm:static">
      <img className='h-8 ml-1 w-10 sm:hidden' src={logo} alt="" />
      <h1 className="text-2xl font-bold hidden sm:text-2xl sm:flex">Faculty Excellence Tracker</h1>
      <div className=" hidden sm:flex space-x-1">
        <div>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>

        {/* Logout Button */}
        <button className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 w-full sm:w-auto">
          Logout
        </button>
      </div>
 
      <div
        className={`fixed top-0 left-0  bg-blue-500 text-white shadow-lg z-50 transform ${
          openSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 sm:hidden`}
      >
        <AdminSidebarForMobile />
      </div>
    </div>
  );
};

export default AdminHeader; 