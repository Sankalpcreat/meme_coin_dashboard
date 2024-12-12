import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold">
          Meme Coin Dashboard
        </Link>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
