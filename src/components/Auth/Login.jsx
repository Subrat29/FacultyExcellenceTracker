import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you have some authentication logic here
    if (role === 'admin') {
      navigate('/admin-dashboard'); // Redirect to admin path
    } else if (role === 'faculty') {
      navigate('/faculty-dashboard'); // Redirect to faculty path
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          >
            <option value="">Select Role</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>

          <div className="flex items-center justify-between mb-4">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/register" className="text-blue-500 hover:underline">
              Register?
            </a>
          </div>
          <button 
            type="button" // Prevents form submission on button click
            onClick={handleSubmit} // Calls handleSubmit when clicked
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;