import React from 'react';
import {FaHome, FaChartLine, FaCog } from 'react-icons/fa';

const Sidemenu = () => {
  return (
    <div className='border-r-2 p-6 flex flex-col w-1/4'>
      <h2 className='my-2 text-2xl pl-4'>Menu</h2>
      <ul className='flex flex-col justify-evenly p-4'>
        <li className='my-2 flex items-center'>
          <FaHome className='mr-2' />
          Dashboard
        </li>
        <li className='my-2 flex items-center'>
          <FaChartLine className='mr-2' />
          Statistics
        </li>
        <li className='my-2 flex items-center'>
          <FaCog className='mr-2' />
          Setting
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
