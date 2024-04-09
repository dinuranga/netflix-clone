import React from 'react';

const Home = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative home'>

      <header className="absolute top-0 left-0 w-full z-30 px-4 md:px-10 xl:px-36">
        <div className='w-full flex justify-between items-center'>
          <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='w-48 saturate-150' alt="Netflix Logo" />
          <button className='bg-red-600 text-white px-4 py-1 font-semibold rounded-md'>Sign In</button>
        </div>
      </header>

      <div className='w-full relative z-20 overflow-hidden'>
        <div className='w-full absolute z-10 bg-gradient-to-b from-black to-transparent opacity-50'></div>
        <div className='w-full absolute z-5 bg-cover bg-center' style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/036924b7-6102-4ae6-898a-aa233d1c473c/LK-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg')` }}></div>
      </div>

      <div className='h-[115%] flex flex-col justify-center items-center p-4 text-center text-white relative z-30'>
        <h1 className='text-3xl md:text-heading font-black mb-8'>Unlimited movies, TV shows, and more</h1>
        <p className='text-lg md:text-xl mb-5'>Watch anywhere. Cancel anytime.</p>
        <p className='text-lg px-4 md:px-0 md:text-xl mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex flex-col md:flex-row items-center gap-2'>
          <input type="email" className='w-72 md:w-96 bg-[rgba(12,12,12,0.7)] border border-gray-700  outline-0 rounded px-4 py-3' placeholder='Email Address' />
          <button className='w-40 md:w-48 bg-red-600 text-lg md:text-2xl font-bold text-white px-4 py-2 rounded'>Get Started</button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 z-30 bg-[rgb(50,50,50)]"></div>
    </div>
  );
}

export default Home;