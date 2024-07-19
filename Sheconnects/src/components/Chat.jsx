
import React from 'react';
import about from '../assets/aboutus.png'
const Chat = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex-1 h-3/4">
      <div className=" mt-8 ml-8 mb-8">
        <span className="bg-pink-900 text-white py-1 px-3 rounded-full">Dec 20, 2022</span>
      </div>
      <div className="flex flex-col space-y-4 mt-4 ml-8">
        <div className="flex">
          <img src={about} alt="Kellen" className="h-12 w-12 rounded-full shadow-md " />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold">Kellen</span>
              <span className="ml-4 text-xs text-gray-500">2:00 pm</span>
            </div>
            <p className='text-gray-600'>Hello everyone! Please check this opportunity:</p>
            <img src={about} alt="Opportunity" className="mt-2 rounded-lg  w-32 h-32" />
          </div>
        </div>
        <div className="flex">
          <img src={about} alt="Lindah" className="h-12 w-12 rounded-full shadow-md " />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold">Lindah</span>
              <span className="ml-4 text-xs text-gray-500">2:03 pm</span>
            </div>
            <p className='text-gray-600'>Thank you so much, Kellen!</p>
          </div>
        </div>
        <div className="flex">
          <img src={about} alt="Lindah" className="h-12 w-12 rounded-full shadow-md " />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold">Keza</span>
              <span className="ml-4 text-xs text-gray-500">2:03 pm</span>
            </div>
            <p className='text-gray-600'>Thanks, Kellen!</p>
          </div>
        </div>
        <div className="flex">
          <img src={about} alt="Lindah" className="h-12 w-12 rounded-full shadow-md " />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold">Lita</span>
              <span className="ml-4 text-xs text-gray-500">2:03 pm</span>
            </div>
            <p className='text-gray-600'>Awesome,Girls let apply</p>
          </div>
        </div>
      </div>
      <div className="flex mt-20 justify-end items-end ml-8">
        <input
          type="text"
          placeholder="Send a message"
          className="w-full py-2 px-4 rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Chat;
