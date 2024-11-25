
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AdminSidebarForMobile from './AdminSidebarForMobile';
import logo from '../../assets/Logo.PNG'


const AdminHeader = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="bg-white shadow-md p-3 sm:p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 sm:static">
      <img className='h-9 w-10 sm:hidden' src={logo} alt="" />
      <h1 className="text-2xl font-bold hidden sm:text-2xl sm:flex">Faculty Excellence Tracker</h1>
      <div className=" hidden sm:flex space-x-1">
        <div>
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
      <FaBars onClick={toggleSidebar} className='text-2xl sm:hidden' />

      {openSidebar && (
        <div 
         className='fixed inset-0 bg-gray-800 bg-opacity-50 z-40 sm:hidden'
         onClick={toggleSidebar}>
        </div>
      )}

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