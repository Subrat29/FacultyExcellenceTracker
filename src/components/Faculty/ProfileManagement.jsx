import React from 'react';

const ProfileManagement = () => {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Profile Management</h2>
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 rounded-full border border-gray-300 mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Dr. John Doe</h3>
          <p className="text-gray-600">Professor, Computer Science Department</p>
        </div>
      </div>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Designation"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Department"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <textarea
          placeholder="Bio / Description"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />

        {/* Integration Syncs */}
        <div className="mb-4">
          <label className="block text-gray-700">Integration with University Systems:</label>
          <div className="mt-2 space-y-2">
            <div>
              <input
                type="checkbox"
                name="lmsSync"
                // checked={profile.lmsSync}
                // onChange={handleChange}
              />
              <span className="ml-2">Sync with LMS</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="hrSync"
                // checked={profile.hrSync}
                // onChange={handleChange}
              />
              <span className="ml-2">Sync with HR</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="researchSync"
                // checked={profile.researchSync}
                // onChange={handleChange}
              />
              <span className="ml-2">Sync with Research Database</span>
            </div>
          </div>
          </div>

        <button className="bg-green-500 text-white p-3 rounded hover:bg-green-600">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileManagement;
