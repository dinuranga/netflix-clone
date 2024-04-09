import React from 'react';

function Image2() {
  return (
    <div className='relative flex'>
      <div className='min-w-72 w-3/5 absolute p-[2%] ml-[20%] mt-[55%] z-20 flex justify-between rounded border-red-400 border-2 bg-black gap-5'>
        <div className='w-8 max-w-12 flex justify-center'>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt='poster' className='max-w-full' />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='font-semibold text-white'>Stranger Things</p>
          <p className='text-blue-400'>Downloading...</p>
        </div>
        <div className='w-12 max-w-16 flex justify-center'>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt='loading' className='max-w-full' />
        </div>
      </div>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="phone" className='w-full min-w-96' />
    </div>
  );
}

export default Image2;
