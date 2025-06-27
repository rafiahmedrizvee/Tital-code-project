import React from 'react';
import { Link } from 'react-router';

const Experience = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center w-full my-12 px-4 lg:my-24 lg:px-16">
      {/* Left Section */}
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <h3 className="font-inter text-black text-xl md:text-5xl lg:text-6xl font-semibold leading-snug lg:leading-none">
          Experiences with Innovation, Precision, and Expertise.
        </h3>
      </div>

      {/* Right Section */}
      <div className="md:mt-8 mt-4 lg:mt-0 w-full lg:w-1/2 lg:pl-12">
        <p className="font-inter text-gray-600 text-sm md:text-base lg:text-lg">
          Transforming Ideas into Reality: Specializing in Web & App Development, Hosting, Cybersecurity, Automation, and Custom Software to Boost Your Online Presence and Create Memorable Experiences.
        </p>

        <Link to="/contact">
          <button className=" font-semibold text-sm md:text-xl text-white py-3 px-6 rounded-full bg-primary mt-6 hover:bg-blue-700 transition-colors text-center">
            Let’s Talk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
