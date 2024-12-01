import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi'; // For Edit Icons
import { AiOutlineCamera } from 'react-icons/ai'; // For Camera Icon
import { useNavigate } from 'react-router-dom';

const AdminProfileManagement = ({ profileData = {} }) => {
  const navigate = useNavigate();
  // Default profile data
  const {
    name = 'Dr. John Doe',
    email = 'johndoe@example.com',
    avatar = 'https://via.placeholder.com/150',
    role = 'College Admin',
    collage_name = 'Institute of Engineering & Technology',
    department_name = 'Computer Science Engineering',
  } = profileData;

  const [profile, setProfile] = useState({
    name,
    email,
    avatar,
    role,
    collage_name,
    department_name,
  });

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Handle Avatar Change
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Profile Edit Save
  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    setEditModalOpen(false);
  };

  // Handle logout profile
  const handleLogout = () => {
    // Remove tokens from localStorage
    console.log('Logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Optional: Remove tokens from cookies if they are set there too
    document.cookie =
      'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    document.cookie =
      'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

    // Redirect to login page after logout
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-green-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 text-center">
          <div className="relative inline-block mx-auto">
            <img
              src={profile.avatar}
              alt="Admin Avatar"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-all cursor-pointer"
            >
              <AiOutlineCamera size={20} />
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
          <p className="text-lg">{profile.role}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Profile Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileDetail label="Name" value={profile.name} />
            <ProfileDetail label="Email" value={profile.email} />
            <ProfileDetail label="Role" value={profile.role} />
            <ProfileDetail label="Collage Name" value={profile.collage_name} />
            <ProfileDetail
              label="Department Name"
              value={profile.department_name}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <button
            onClick={() => setEditModalOpen(true)}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-all"
            aria-label="Edit Profile"
          >
            <FiEdit2 className="inline mr-2" />
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition-all mt-4 sm:mt-0"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSaveProfile}>
              <div className="grid grid-cols-1 gap-4">
                <InputField
                  label="Name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
                <InputField
                  label="Email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                <InputField
                  label="Role"
                  value={profile.role}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      role: e.target.value,
                    }))
                  }
                />
                <InputField
                  label="Collage Name"
                  value={profile.collage_name}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      collage_name: e.target.value,
                    }))
                  }
                />
                <InputField
                  label="Department Name"
                  value={profile.department_name}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      department_name: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg shadow mr-2 hover:bg-gray-400 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-all"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Component for Profile Details
const ProfileDetail = ({ label, value }) => (
  <div className="bg-gray-50 p-4 rounded shadow-sm">
    <h3 className="text-sm font-semibold text-gray-600">{label}:</h3>
    <p className="text-gray-800">{value}</p>
  </div>
);

// Reusable Input Field Component
const InputField = ({ label, value, onChange }) => (
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default AdminProfileManagement;
