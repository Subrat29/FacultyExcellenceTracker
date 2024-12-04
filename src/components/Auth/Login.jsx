import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/features/authSlice';
import axiosInstance from '../../services/admin';
import { Eye, EyeOff } from 'lucide-react'; // Import the Lucide eye icons

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setError('Please fill all the fields.');
      return;
    }

    try {
      const response = await axiosInstance.post('/v1/user/login', {
        email,
        password,
        role,
      });
      console.log('Login response: ', response.data);

      const { accessToken, refreshToken, user, roleType } = response.data.data;
      console.log('User: ', user);

      dispatch(loginSuccess({ accessToken, refreshToken, user, roleType }));

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('roleType', roleType);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(user));

      document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly`;
      document.cookie = `user=${JSON.stringify(
        user
      )}; path=/; secure; HttpOnly`;

      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'faculty') {
        navigate('/faculty-dashboard');
      } else if (role === 'student') {
        navigate('/student-dashboard');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          >
            <option value="">Select Role</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>

          <div className="flex items-center justify-between mb-4">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link to="/register" className="text-blue-500 hover:underline">
              Register?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
