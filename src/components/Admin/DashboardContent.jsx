// DashboardPage.js
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')

  const openModal = ()=>{
    setModalOpen(true)
  }

  const closeModal = ()=>{
    setModalOpen(false)
    setEmail('')
  }

  const addNewFacultyHandler = ()=>{
    if (!email.trim()) {
      toast.error('Email is required.');
      return;
    }
    toast.success(`Faculty ${email} added successfully!`);
    setEmail('')
    closeModal();
  }
  
  return (
    <div className="p-2 sm:p-6 mt-14 sm:mt-0 bg-gray-100 sm:min-h-screen">
      {/* Welcome Banner */}
      <div className="p-6 bg-blue-500 text-white rounded-lg mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Welcome, Admin!</h1>
        <p className="text-lg mt-2">Here’s a quick overview of your faculty’s performance</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4">
          <div className="bg-white text-blue-500 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Faculty</h3>
            <p className="text-xl sm:text-2xl font-bold">150</p>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Top Performer</h3>
            <p className="text-xl sm:text-2xl font-bold">Dr. Smith</p>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Pending Promotions</h3>
            <p className="text-xl sm:text-2xl font-bold">5</p>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Recent Faculty Activity</h3>
        <ul className='text-xm space-y-2'>
          <li className="mb-2">📄 Dr. Johnson published a paper on AI in Education.</li>
          <li className="mb-2">🏅 Dr. Smith was promoted to Senior Professor.</li>
          <li className="mb-2">📊 Department of Science achieved 90% conference participation.</li>
          <li className="mb-2">👥 Dr. Brown mentored 5 new PhD students.</li>
        </ul>
      </div>
      
      {/* Call-to-Action Buttons */}
      <div className="flex-wrap flex justify-between gap-4 mt-6">
        <button onClick={openModal} className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 flex-1 md:flex-none md:w-auto">
          Add New Faculty
        </button>
        <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 flex-1 md:flex-none md:w-auto">
          Generate Reports
        </button>
        <button className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 flex-1 md:flex-none md:w-auto">
          Schedule Meeting
        </button>
      </div>

      {modalOpen && (
        <div className='flex items-center justify-center fixed inset-0 bg-gray-800 bg-opacity-75 flex-1 md:flex-none md:w-auto'>
          <div className='bg-white w-10/12 sm:w-3/4 md:w-1/2 lg:w-1/3 shadow p-6 rounded-lg'>
            <h3 className='text-xl font-bold mb-4'>Add New Faculty</h3>
            <input
              type='text'
              placeholder='Enter the email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='border rounded w-full p-1 mb-4'
            ></input>
            <div className='space-x-2'>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={closeModal}>
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addNewFacultyHandler}>
              Add Faculty
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
