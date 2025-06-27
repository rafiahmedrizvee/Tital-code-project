import React from 'react';
import { Link } from 'react-router-dom';

const Build = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center h-auto py-16">
      <div className="bg-white text-center rounded-[30px] md:rounded-t-[50px] px-6 md:px-16 py-10 shadow-lg max-w-xl w-full">
        <h2 className="text-xl md:text-4xl font-bold text-black mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="text-gray-600 md:mb-8 mb-4 text-sm md:text-base">
          Have a project in mind? Reach out and let’s bring your vision to life.
        </p>
        <Link to="/contact">
          <button className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Build;
