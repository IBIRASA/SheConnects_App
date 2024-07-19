// src/components/Navbar.js
import React from 'react';
import Logo from '../assets/sheconnectss.png';
import about from '../assets/aboutus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Community_top = () => {
  return (
    <nav className="bg-pink-800 flex justify-between items-center p-8  shadow-md">
      <div className="flex items-center">
      <img
        className="absolute w-28 h-28 object-cover"
        src={Logo}
        alt="Landing Background"
      />
      
      </div>
      <div className="flex items-center">
        <button className="mr-4">
        <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faBell} className="text-gray-200 w-5 h-5 mr-8 mt-4" />
          </div>
        </button>
       <Link to="/Profiledit"><FontAwesomeIcon icon={faAngleDown} className="text-gray-200 w-5 h-5 mr-4 mt-4" /></Link>
        <img src={about} alt="Profile" className="h-12 w-12 rounded-full shadow-md bg-white" />
      </div>
    </nav>
  );
};

export default Community_top;
