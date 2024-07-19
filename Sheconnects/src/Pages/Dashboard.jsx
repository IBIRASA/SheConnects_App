// src/components/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Alldashboardcontent from '../components/Alldashboardcontent';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Alldashboardcontent />
    </div>
  );
};

export default Dashboard;
