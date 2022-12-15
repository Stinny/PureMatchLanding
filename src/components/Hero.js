import React from 'react';
import img from '../Images/heroOne.png';
import imgTwo from '../Images/heroTwo.png';
import AppStore from '../Images/AppStore.png';
import GooglePlay from '../Images/GooglePlay.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Hero = () => {
  return (
    <div className='max-w-6xl mx-auto flex justify-center items-center pt-44'>
      <div className='flex flex-col mr-10'>
        <p style={{ color: '#0089FF' }} className='font-medium text-6xl'>
          Connect, Date, and Socialize.
        </p>
        <p className='mt-6 text-lg' style={{ color: '#2C2D30' }}>
          <span className='font-semibold'>Pure Match</span> is on a mission to
          bring like-minded followers of Christ together in a safe, innovative,
          and <span className='font-semibold'>FREE</span> networking app! Join
          us as we transform singlehood into the exciting, enriching,{' '}
          <span className='font-semibold'>FUN</span> season it was meant to be.
        </p>
        <button
          className='rounded-md h-10 w-52 font-medium text-white mt-6'
          style={{ backgroundColor: '#0089FF' }}
          disabled
        >
          Support the app
        </button>
        <div className='flex items-center mt-6'>
          <img src={AppStore} />
          <img src={GooglePlay} className='ml-4' />
        </div>
      </div>

      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
      >
        <img src={img} />
        <img src={imgTwo} />
      </Carousel>
    </div>
  );
};

export default Hero;
