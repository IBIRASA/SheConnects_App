
import React from 'react';

const Business = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Business Opportunities</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Business Role 1</h2>
        <p className="text-gray-600 mb-4">Description of the business role or opportunity.</p>
        <button className="bg-pink-900 text-white py-2 px-4 rounded">Apply Now</button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Business Role 2</h2>
        <p className="text-gray-600 mb-4">Description of the business role or opportunity.</p>
        <button className="bg-pink-900 text-white py-2 px-4 rounded">Apply Now</button>
      </div>
   
    </div>
  );
};

export default Business;
