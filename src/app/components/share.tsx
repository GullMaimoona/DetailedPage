// components/SocialShare.js
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialShare() {
  return (
    <div className=" items-center  ">
      <p className="text-lg font-semibold">Share It</p>
      <div className="flex items-center space-x-2"> {/* Adjust space between icons here */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
          <FaFacebookF className="h-5 w-5" />
        </a>
        {/* Increased size for Google Plus icon */}
        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-red-600">
          <FaGooglePlusG className="h-6 w-6" /> {/* Size increased */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-400">
          <FaTwitter className="h-5 w-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600">
          <FaInstagram className="h-5 w-5" />
        </a>
        {/* New share icons */}
        <span className="text-gray-800 hover:text-green-600 cursor-pointer">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 5a1 1 0 01-1-1V2M8 15l3-3m0 0l3 3m-3-3v9" />
          </svg>
        </span>
      </div>
    </div>
  );
}
