import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Student Registration</h2>
        <form>
          <select 
            defaultValue="student" 
            disabled 
            className="w-full p-2 border border-gray-300 rounded mb-4 "
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          
          </select>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
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
          <div className="flex items-center justify-between mb-4">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link to="/" className="text-blue-500 hover:underline">
              Already has an account?
            </Link>
          </div>
          <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
