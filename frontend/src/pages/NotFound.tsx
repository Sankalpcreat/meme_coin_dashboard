import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/dashboard" className="text-blue-500 underline mt-4 inline-block">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
