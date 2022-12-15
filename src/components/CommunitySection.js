import React from 'react';
import img from '../Images/people.png';

const CommunitySection = () => {
  return (
    <>
      <div className='max-w-6xl flex justify-between items-center mx-auto mt-36'>
        <img src={img} className='w-6/12' />
        <div className='flex flex-col w-6/12 ml-32'>
          <p style={{ color: '#FF004A' }} className='text-5xl font-medium'>
            Connect as a community
          </p>
          <p className='text-lg mt-4 w-10/12' style={{ color: '#2C2D30' }}>
            Dating and marriage may not be the sole focus of discipleship, but
            we all need connection. As Christians, it’s important to have deep
            relationships with like-minded believers we trust and respect; our
            app facilities that.
          </p>
        </div>
      </div>
      <div className='w-full h-28'></div>
    </>
  );
};

export default CommunitySection;
