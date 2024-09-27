import React from 'react';
import Login from '../components/Auth/Login';

const LoginPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src="/facultyImage.jpeg"
            alt="student"
            className="object-cover w-full h-screen"
          />
        </div>
        <div className=''>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
