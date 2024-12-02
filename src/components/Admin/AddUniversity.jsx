import React from "react";

const AddUniversity = () => {
  return (
    <div className="max-w-2xl mx-auto  bg-sky-50 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Add University
      </h1>
      <form action="" className="space-y-4">
        {/* University Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            University Name
          </label>
          <input
            type="text"
            placeholder="Enter university name"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            placeholder="Enter address"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
          ></textarea>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            type="text"
            placeholder="Enter contact number"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="text"
            placeholder="Enter website URL"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Established Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Established Year
          </label>
          <input
            type="text"
            placeholder="e.g., 2024-2025"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Session ID */}
        <div>
        <label className="text-sm block font-medium text-gray-700">Select Session</label>
            <select
                className="px-4 py-2 border w-full mt-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                defaultValue="Select Year"
            >
                <option value="">Select Year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add University
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUniversity;
