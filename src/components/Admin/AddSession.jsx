import React, { useState } from 'react';

const AddSession = () => {
    const [session, setSession] = useState()
    return (
        <div className="max-w-lg mx-auto bg-sky-50 shadow-lg rounded-lg p-8 mb-20 mt-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add Session</h1>
        <form action="" className="space-y-6">
            {/* Session Dropdown */}
            <div>
                <label className='block text-sm font-medium text-gray-700'>Session name</label>
                <input 
                    type="text" 
                    placeholder='Enter session name'
                    className='px-4 border  border-gray-300 py-2 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'>Starting Year</label>
                <input 
                    type="text" 
                    placeholder='Enter starting year'
                    className='px-4 border  border-gray-300 py-2 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'>Ending year</label>
                <input 
                    type="text" 
                    placeholder='Enter ending year'
                    className='px-4 border  border-gray-300 py-2 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>

            {/* Submit Button */}
            <div className="text-center">
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Add Session
            </button>
            </div>
        </form>
        </div>
    );
};

export default AddSession;
