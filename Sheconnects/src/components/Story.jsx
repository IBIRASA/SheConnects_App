// src/components/CommunityHeader.js
import React from 'react';
import about from '../assets/aboutus.png'
const Story = () => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-gray-600"># Business Community</h1>
      <div className="w-full border-t border-gray-300 my-4"></div>
      <div className="flex items-center justify-center mt-12 mb-12">
      <div  className="relative bg-gray-300 h-24 w-24 rounded-full border-2 border-pink-700 -ml-2 shadow-md mr-8">
      <div className="absolute bottom-0 right-0 bg-pink-900 h-8 w-8 rounded-full border-2 border-pink-900 flex items-center justify-center -mb-1 -mr-1">
        <span className="text-rose-200 text-lg">+</span>
      </div>
      </div>
        <img src={about} alt="Profile 1" className="h-24 w-24 rounded-full border-2 border-rose-600 -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 2" className="h-24 w-24 rounded-full border-2 border-rose-600 -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 3" className="h-24 w-24 rounded-full border-2 border-rose-600  -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 4" className="h-24 w-24 rounded-full border-2 border-rose-600 -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 3" className="h-24 w-24 rounded-full border-2 border-rose-600  -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 4" className="h-24 w-24 rounded-full border-2 border-rose-600 -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 3" className="h-24 w-24 rounded-full border-2 border-rose-600  -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 4" className="h-24 w-24 rounded-full border-2 border-rose-600 -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 3" className="h-24 w-24 rounded-full border-2 border-rose-600  -ml-2 shadow-md mr-8" />
        <img src={about} alt="Profile 4" className="h-24 w-24 rounded-full border-2 border-rose-600 -ml-2 shadow-md mr-8" />
      </div>
    </div>
  );
};

export default Story;
