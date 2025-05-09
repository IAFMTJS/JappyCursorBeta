import React from 'react';
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <div className="py-8">
      <div className="flex items-center mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mr-4">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Section 3</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">
          This is the content for Section 3. You can add your specific content here.
        </p>
      </div>
    </div>
  );
};

export default Section3; 