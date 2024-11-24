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
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Banner */}
      <div className="p-6 bg-blue-500 text-white rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Welcome, Admin!</h1>
        <p className="text-lg mt-2">Here’s a quick overview of your faculty’s performance</p>
        <div className="flex mt-4 space-x-6">
          <div className="bg-white text-blue-500 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Faculty</h3>
            <p className="text-2xl font-bold">150</p>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Top Performer</h3>
            <p className="text-2xl font-bold">Dr. Smith</p>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Pending Promotions</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Recent Faculty Activity</h3>
        <ul>
          <li className="mb-2">📄 Dr. Johnson published a paper on AI in Education.</li>
          <li className="mb-2">🏅 Dr. Smith was promoted to Senior Professor.</li>
          <li className="mb-2">📊 Department of Science achieved 90% conference participation.</li>
          <li className="mb-2">👥 Dr. Brown mentored 5 new PhD students.</li>
        </ul>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={openModal} className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
          Add New Faculty
        </button>
        <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          Generate Reports
        </button>
        <button className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600">
          Schedule Meeting
        </button>
      </div>

      {modalOpen && (
        <div className='flex items-center justify-center fixed inset-0 bg-gray-800 bg-opacity-75'>
          <div className='bg-white w-1/4 shadow p-6 rounded-lg'>
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
