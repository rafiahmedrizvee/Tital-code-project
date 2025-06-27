import React from "react";
import aboutImg from "../../assets/Images/about.png";
import ContactSection from "../Home/Build/Build";
import BlogPost from "../Home/BlogPost/BlogPost";

const AboutUs = () => {
  return (
    
    <div>

    <div className="px-4 sm:px-6 lg:px-10 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-black">
          About Us
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Innovation at Its Best: Unveiling Our Journey, Vision, and Commitment
          to <br className="hidden sm:block" />
          Crafting Exceptional Digital Solutions Just for You.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Image Section */}
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full md:w-1/2 rounded-3xl object-cover max-h-[500px]"
        />

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
            The Journey of <br /> TitanCode Technologies
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We are TitanCode Technologies, a team of seasoned professionals
            with a passion for crafting innovative web and app solutions. With
            over a decade of experience in the industry, our expertise spans
            across web development, app development, hosting, cybersecurity,
            automation, and custom software solutions. We are dedicated to
            solving complex problems and delivering exceptional digital
            experiences that drive success. Let’s create something remarkable
            together.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="font-semibold text-sm md:text-base border border-black text-black py-3 px-6 rounded-full hover:bg-black hover:text-white transition">
              Let’s Talk
            </button>
            <button className="font-semibold text-sm md:text-base border border-black text-black py-3 px-6 rounded-full hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    <ContactSection/>
    <BlogPost/>
    </div>
  );
};

export default AboutUs;
