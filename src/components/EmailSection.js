import React from 'react';

const EmailSection = () => {
  return (
    <div className='w-full mx-auto p-4' style={{ backgroundColor: '#00BA84' }}>
      <div className='max-w-6xl mx-auto text-center flex flex-col items-center'>
        <div className='w-full h-24'></div>
        <p className='font-medium text-white text-5xl'>Stay connected!</p>
        <p
          className='mt-4 text-lg w-5/12 text-center'
          style={{ color: '#2C2D30' }}
        >
          Sign up for our newsletter to get the latest news and updates, as well
          as exclusive perks and offers!
        </p>
        <form className='flex flex-col mx-auto items-center w-10/12 mt-10'>
          <input
            placeholder='Enter your name'
            className='rounded-md w-8/12 p-2 text-gray-400 outline outline-0'
          />
          <input
            placeholder='Enter your email'
            className='rounded-md w-8/12 p-2 text-gray-400 mt-4 outline outline-0'
          />
          <button
            className='bg-white w-44 rounded-md h-10 mt-10 border-1 border-green-700'
            style={{ color: '#00BA84' }}
          >
            Subscribe
          </button>

          <p style={{ color: '#2C2D30' }} className='mt-4'>
            We respect your privacy.
          </p>
        </form>
        <div className='w-full h-24'></div>
      </div>
    </div>
  );
};

export default EmailSection;
