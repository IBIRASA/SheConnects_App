// src/components/MainPage.js
import React from 'react';
import Community_top from '../components/Community_top';
import Explorecommunitiy from '../components/Explorecommunity';
import Opportunities from '../components/Opportunities';
import Logo from '../assets/sheconnectss.png';
const MainCommunity = () => {
  return (
    <div >
    <Community_top/>
    <Explorecommunitiy/>
      <Opportunities />
    </div>
  );
};

export default MainCommunity;
