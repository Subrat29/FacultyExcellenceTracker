import React, { useState } from "react";

const AdminHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="bg-white shadow-md p-4 flex flex-col sm:flex-row sm:items-center justify-between">
      <h1 className="text-2xl font-bold text-center sm:text-left mb-4 sm:mb-0">
        Faculty Excellence Tracker
      </h1>
      <div className="flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-center w-full sm:w-auto">
        {/* Language Selector */}
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
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
    </div>
  );
};

export default AdminHeader;
