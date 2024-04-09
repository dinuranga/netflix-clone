import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='w-full bg-black text-gray-300 px-10 py-20 md:px-[80px] lg:px-28 flex flex-col gap-10'>
      <a href="#" className='underline'>Questions? Contact us.</a>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm'>
        <a href="#">Help Center</a>
        <a href="#">Account</a>
        <a href="#">Media Center</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
        <a href="#">Speed Test</a>
        <a href="#">Legal Notices</a>
        <a href="#">Only on Netflix</a>
      </div>
      <div className="relative w-32">
        <div className="absolute top-1 right-4 pointer-events-none">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <select className='w-32 pr-5 pl-10 py-1 rounded bg-gray-900 appearance-none'>
          <option value="english">English</option>
        </select>
        <div className="absolute top-1 left-4 pointer-events-none">
          <FontAwesomeIcon icon={faLanguage} />
        </div>
      </div>
      <p>Netflix Sri Lanka | <span className='text-xs -mt-10'>Education Purpose Only.</span></p>
    </div>
  );
}

export default Footer;
