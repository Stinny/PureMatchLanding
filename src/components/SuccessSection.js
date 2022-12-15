import React from 'react';
import img from '../Images/couple.png';
import icon from '../Images/successIcon.png';

const SuccessSection = () => {
  return (
    <div className='w-full mx-auto' style={{ backgroundColor: '#0089FF' }}>
      <div className='w-full h-28'></div>
      <div className='flex justify-between items-center max-w-6xl mx-auto h-full'>
        <div className='flex flex-col w-3/6'>
          <img src={icon} className='w-44 mb-10' />
          <p className='text-white text-2xl'>
            "He started a conversation with me and our friendship grew so fast!
            Now we’re dating, which is wild to me because I got the app just to
            get to know people. I had no idea that God would bless me with such
            a cool boyfriend! Super thankful for this app and definitely
            encourage people to try it out because you never know how God could
            surprise you!"
          </p>
          <p className='text-white text-xl mt-4'>- Chloe and George</p>
        </div>
        <img src={img} className='w-2/6' />
      </div>
      <div className='w-full h-28'></div>
    </div>
  );
};

export default SuccessSection;
