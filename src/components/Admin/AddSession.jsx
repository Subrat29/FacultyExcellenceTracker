import React, { useState } from 'react';

const AddSession = () => {
    const [session, setSession] = useState()
    return (
        <div className="max-w-lg mx-auto bg-sky-50 shadow-lg rounded-lg p-8 mb-20 mt-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add Session</h1>
        <form action="" className="space-y-6">
            {/* Session Dropdown */}
            <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">Select Session</label>
            <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit
            </button>
            </div>
        </form>
        </div>
    );
};

export default AddSession;
