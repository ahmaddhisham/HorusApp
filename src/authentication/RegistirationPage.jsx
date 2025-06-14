import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (validate()) {
    setIsLoading(true);

    try {
      // 1. Register user with Firebase Auth
      await createUserWithEmailAndPassword(
        auth, // Imported from firebase-config.js
        formData.email,
        formData.password
      );

      // 2. Redirect on success (no Firestore needed)
      navigate('/Login'); 
    } catch (error) {
      // Handle errors (e.g., email already in use, weak password)
      setErrors({ submit: error.message });
    } finally {
      setIsLoading(false);
    }
  }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-yellow-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black bg-opacity-70 rounded-lg shadow-lg p-8 border border-yellow-700">
        <h2 className="text-2xl font-bold text-center mb-6 font-serif">
          𓀡 Join the Horus Cult 𓀡
        </h2>
        
        {errors.submit && (
          <div className="mb-4 p-2 bg-red-900 text-yellow-100 rounded text-sm">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-gray-800 border ${errors.username ? 'border-red-500' : 'border-yellow-700'} rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500`}
            />
            {errors.username && <p className="mt-1 text-sm text-red-400">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-yellow-700'} rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-gray-800 border ${errors.password ? 'border-red-500' : 'border-yellow-700'} rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-gray-800 border ${errors.confirmPassword ? 'border-red-500' : 'border-yellow-700'} rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500`}
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-700 rounded bg-gray-800"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-yellow-300">
              I agree to all terms and conditions
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-yellow-700 hover:bg-yellow-600 text-black font-bold rounded-md transition-colors duration-300 flex justify-center items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Initiating...
              </>
            ) : 'Complete Initiation'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-yellow-400">
          Already Registerd?{' '}
          <Link to="/login" className="text-yellow-300 hover:text-yellow-200 font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;