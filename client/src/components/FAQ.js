import React, { useState } from 'react';
import qa from "./faqData"

function FAQ() {

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className='w-full'>
      <div className='w-full px-[11%] bg-black py-16'>
        <h1 className='text-3xl lg:text-5xl font-black mb-6 text-white text-center mb-8'>Frequently Asked Questions</h1>
        <div className='w-full'>
          {qa.map((element, index) => (
            <div className='mb-2' key={index}>
              <div className={`w-full bg-zinc-800 text-white py-7 px-7 text-xl lg:text-2xl hover:bg-zinc-700 cursor-pointer select-none`} onClick={() => toggleOpen(index)}>
                {element.question}
              </div>
              <div className={`bg-zinc-600 mt-1 py-7 px-7 text-white text-xl ${openIndex === index ? "block": "hidden"} transition-all duration-300 ease-in-out`}>
                {element.answer}
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center flex-col'>
          <p className='text-base text-center lg:text-[1.4rem] mt-10 mb-5 text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
            <input type="email" className='w-72 md:w-96 bg-[rgba(12,12,12,0.7)] border border-gray-700  outline-0 rounded px-4 py-3' placeholder='Email Address' />
            <button className='w-40 md:w-48 bg-red-600 text-lg md:text-2xl font-bold text-white px-4 py-2 rounded'>Get Started</button>
          </div>
        </div>
      </div>
      <div class="w-full h-2 z-30 bg-[rgb(50,50,50)]"></div>
    </div>
  );
}

export default FAQ;
