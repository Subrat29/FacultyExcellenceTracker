import React from 'react';

const AdminHeader = () => {
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Faculty Excellence Tracker</h1>
      <div className="flex space-x-4">
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>
      </div>
    </div>
  );
};

export default AdminHeader;
