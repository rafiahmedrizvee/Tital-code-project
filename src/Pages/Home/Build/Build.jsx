import React from 'react';

const ContactSection = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center  h-[453px] ">
      <div className="bg-white text-center rounded-[30px]  rounded-t-[50px] h-[350px] w-[735px] px-8 py-16 max-w-xl shadow-lg">
        <h2 className="text-4xl text-inter font-bold text-black mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="text-gray-600 mb-8 text-inter ">
          Have a project in mind? Reach out and let’s bring your vision to life.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
