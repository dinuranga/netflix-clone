import React from 'react';

function SplitLayout({ image,imagePosition, heading, paragraph }) {
  return (
    <div className='min-h-[620px] lg:min-h-[600px] relative flex py-14 justify-center flex-col lg:flex-row bg-black text-white'>
      
      {imagePosition === 'left' && (
        <div className='w-full lg:w-5/12'>
          {image}
        </div>
      )}
      <div className='w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left px-6'>
        <h1 className='text-3xl lg:text-5xl font-black mb-6'>{heading}</h1>
        <p className='text-base lg:text-2xl'>{paragraph}</p>
      </div>
      {imagePosition === 'right' && (
        <div className='w-full lg:w-5/12'>
          {image}
        </div>
      )}
      <div class="absolute bottom-0 left-0 w-full h-2 z-30 bg-[rgb(50,50,50)]"></div>
    </div>
    
  );
}

export default SplitLayout;