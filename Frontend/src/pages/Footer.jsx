import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-gray-800 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-semibold text-blue-400 mb-3 transform hover:scale-105 transition duration-300 ease-in-out">
         Workout Planer
          </h1>
          <p className="text-gray-300 text-center md:text-left max-w-md text-lg leading-relaxed">
            Track your workouts effortlessly and stay fit with personalized workout plans, exercises, and progress tracking.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/workout-plans" className="text-gray-300 hover:text-white transition transform hover:scale-105">
            Workout Plans
          </Link>
          <Link to="/exercises" className="text-gray-300 hover:text-white transition transform hover:scale-105">
            Exercises
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition transform hover:scale-105">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition transform hover:scale-105">
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        <p>&copy; 2024 Workout Planner. All Rights Reserved. | Created by Abhishek Gurjar❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
