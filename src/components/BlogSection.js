import React from 'react';
import imgOne from '../Images/blogOne.png';
import imgTwo from '../Images/blogTwo.png';
import imgThree from '../Images/blogThree.png';

const BlogSection = () => {
  return (
    <div className='w-full mx-auto'>
      <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <div className='w-full h-28'></div>
        <div className='flex flex-col text-center w-5/12 mx-auto'>
          <p style={{ color: '#FFAC00' }} className='font-medium text-5xl'>
            Read our blog
          </p>
          <p style={{ color: '#2C2D30' }} className='mt-8 text-xl font-medium'>
            Join our growing community of Pure Matchers and keep posted on
            development updates.
          </p>
        </div>

        <div className='w-10/12 mx-auto flex justify-between mt-28'>
          <div className='flex flex-col w-4/12'>
            <img src={imgOne} />
            <button
              disabled
              className='rounded-md w-32 text-white mt-2 font-medium'
              style={{ backgroundColor: '#FFAC00' }}
            >
              DEVELOPMENT
            </button>
            <p className='font-medium mt-2 text-2xl'>
              Updates and Rewards for Patience!
            </p>
            <p className='font-medium mt-2'>
              Shaela - <span style={{ color: '#9A9A9D' }}>Oct 29, 2021</span>
            </p>
          </div>

          <div className='flex flex-col ml-10 w-4/12'>
            <img src={imgTwo} />
            <button
              disabled
              className='rounded-md w-32 text-white mt-2 font-medium'
              style={{ backgroundColor: '#FFAC00' }}
            >
              DEVELOPMENT
            </button>
            <p className='font-medium mt-2 text-2xl'>
              GOOD NEWS! (Server is up! Matches are happening!)
            </p>
            <p className='font-medium mt-2'>
              Pure Match Team -{' '}
              <span style={{ color: '#9A9A9D' }}>Jun 6, 2021</span>
            </p>
          </div>

          <div className='flex flex-col ml-10 w-4/12'>
            <img src={imgThree} />
            <button
              disabled
              className='rounded-md w-32 text-white mt-2 font-medium'
              style={{ backgroundColor: '#FFAC00' }}
            >
              COMMUNITY
            </button>
            <p className='font-medium mt-2 text-2xl'>
              Problem-Solving & Moving Forward
            </p>
            <p className='font-medium mt-2'>
              Pure Match Team -{' '}
              <span style={{ color: '#9A9A9D' }}>May 20, 2021</span>
            </p>
          </div>
        </div>

        <button
          disabled
          className='h-10 w-44 text-lg font-medium mx-auto rounded-md text-white mt-20'
          style={{ backgroundColor: '#FFAC00' }}
        >
          Load more stories
        </button>
        <div className='w-full h-28'></div>
      </div>
    </div>
  );
};

export default BlogSection;
