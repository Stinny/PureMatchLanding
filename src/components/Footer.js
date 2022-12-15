import React from 'react';
import logo from '../Images/logo.png';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='w-full mx-auto'>
      <div className='w-full h-20'></div>
      <div className='max-w-7xl flex justify-between mx-auto'>
        <div className='flex flex-col w-5/12'>
          <div>
            <img src={logo} />
          </div>
          <p style={{ color: '#0089FF' }} className='mt-6'>
            2022 Pure Match
          </p>
          <div
            className='flex justify-between items-center text-3xl mt-6 w-5/12'
            style={{ color: '#0089FF' }}
          >
            <BsFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
            <AiFillLinkedin />
          </div>
        </div>

        <div className='flex flex-col w-5/12 mr-24'>
          <p style={{ color: '#0089FF' }} className='text-2xl font-medium'>
            About
          </p>
          <p style={{ color: '#2C2D30' }} className='mt-4'>
            Pure Match is a free networking app for like-minded followers of
            Christ to connect, date, and socialize.
          </p>

          <p style={{ color: '#0089FF' }} className='text-2xl font-medium mt-6'>
            Our Mission
          </p>
          <p style={{ color: '#2C2D30' }} className='mt-4'>
            We’re on a mission to bring true followers of Christ together in a
            safe, fun, and innovative new networking app! And to transform
            single-hood into the exciting, enriching, and FUN season it was
            meant to be.
          </p>
        </div>
        <div className='flex flex-col w-2/12'>
          <p style={{ color: '#0089FF' }} className='text-2xl font-medium'>
            Navigation
          </p>
          <a href='#' style={{ color: '#2C2D30' }} className='mt-4 text-xl'>
            Home
          </a>
          <a href='#' style={{ color: '#2C2D30' }} className='mt-4 text-xl'>
            About
          </a>
          <a href='#' style={{ color: '#2C2D30' }} className='mt-4 text-xl'>
            Blog
          </a>
          <a href='#' style={{ color: '#2C2D30' }} className='mt-4 text-xl'>
            Contact
          </a>
          <a href='#' style={{ color: '#2C2D30' }} className='mt-4 text-xl'>
            Donate
          </a>
        </div>
      </div>
      <div className='w-full h-20'></div>
    </footer>
  );
};

export default Footer;
