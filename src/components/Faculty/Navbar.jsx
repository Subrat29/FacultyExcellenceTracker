import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Faculty Excellence Tracker</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded p-2"
          />
          <button className="absolute right-1 top-1 bg-blue-500 text-white px-2 py-1 rounded">Go</button>
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Notifications</button>
        <div className="flex space-x-4">
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
  )
}
