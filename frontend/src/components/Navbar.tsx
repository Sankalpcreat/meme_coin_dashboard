import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/dashboard" 
            className="text-2xl font-bold text-white hover:text-blue-100 transition duration-300"
          >
            
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/dashboard" 
              className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Dashboard||
            </Link>
            <Link 
              to="/news" 
              className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              News||
            </Link>
            <Link 
              to="/about" 
              className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;