import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sections = [
    { id: 1, title: 'Section 1', description: 'Description for section 1', path: '/section1' },
    { id: 2, title: 'Section 2', description: 'Description for section 2', path: '/section2' },
    { id: 3, title: 'Section 3', description: 'Description for section 3', path: '/section3' },
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to JapVoc</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.path}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home; 