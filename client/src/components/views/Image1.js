import React from 'react';

function Image1() {
  return (
    <div className='relative'>
      <video className='min-w-72 w-3/5 absolute ml-[19.7%] mt-[21.8%] z-0' autoPlay playsInline muted loop>
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
      </video>
      <img className='w-full min-w-96 p-[9%] z-10' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV" />
    </div>
  );
}

export default Image1;
