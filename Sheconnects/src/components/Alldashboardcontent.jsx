// src/components/MainContent.js
import React from 'react';
import Story from './Story';
import Chat from './Chat';

const Alldashboardcontent = () => {
  return (
    <div className="bg-white flex-1 p-6">
      <Story />
      <Chat />
    </div>
  );
};

export default  Alldashboardcontent ;
