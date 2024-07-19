import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaBriefcase, FaComments, FaSignOutAlt } from 'react-icons/fa';
import Logo from '../assets/sheconnectss.png';
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [selected, setSelected] = useState('Community Joined');

  const handleClick = (item) => {
    setSelected(item);
  };

  const menuItems = [
    { name: 'Community Joined', icon: <FaHome size={24} /> },
    { name: 'Business', icon: <FaUserFriends size={24} /> },
    { name: 'IT', icon: <FaBriefcase size={24} /> },
    { name: 'Channels', icon: <FaComments size={24} /> },
    { name: 'Direct Message', icon: <FaComments size={24} /> },
  ];

  return (
    <div className="bg-pink-900 text-white w-72 p-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-center mb-12 mt-12">
          <img
            className="w-40 h-40 object-cover"
            src={Logo}
            alt="Logo"
          />
        </div>
        <nav>
          <ul className='mt-20'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`mb-12 flex items-center p-2 rounded ${
                  selected === item.name ? 'bg-white text-pink-900' : 'text-white'
                }`}
                onClick={() => handleClick(item.name)}
              >
                {item.icon}
                <a href="#" className="ml-3 text-lg">{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <ul>
          <li className="flex items-center p-2 rounded text-white">
            <FaSignOutAlt className="mr-3" size={24} />
            <Link to ="/" className="text-lg">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
