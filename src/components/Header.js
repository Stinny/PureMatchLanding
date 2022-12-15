import React from 'react';
import logo from '../Images/logo.png';
import { FaCoins } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';

const Header = () => {
  return (
    <navbar className='w-full mx-auto fixed top-0 bg-white z-55'>
      <div className='max-w-7xl flex items-center justify-between mx-auto h-20 bg-white z-55'>
        <img src={logo} />
        <div className='flex justify-between items-center w-5/12 font-medium'>
          <p style={{ color: '#93959D' }}>Home</p>
          <p style={{ color: '#93959D' }}>About</p>
          <p style={{ color: '#93959D' }}>Blog</p>
          <p style={{ color: '#93959D' }}>Contact</p>
          <div
            className='flex justify-between items-center'
            style={{ color: '#FF004A' }}
          >
            <FaCoins />
            <p className='ml-2'>Donate</p>
          </div>
          <button
            className='rounded-md h-10 w-36 font-medium text-white'
            style={{ backgroundColor: '#0089FF' }}
            disabled
          >
            Get PureMatch
          </button>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
