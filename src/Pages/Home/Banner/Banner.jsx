import React from "react";
import banner1 from "../../../assets/Images/banner1.png";
import banner2 from "../../../assets/Images/banner2.png";
import banner3 from "../../../assets/Images/banner3.png";
import elipse from "../../../assets/Images/Ellipse 998.png";

const Banner = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center md:mb-10 mb-5 px-4 md:px-8">
      {/* Left Section */}
      <div className="md:w-1/2 w-full text-center md:text-left leading-tight md:pr-10">
        <p className="font-inter text-primary text-sm md:text-lg font-bold">
          Meet TitanCode – Experts in Digital Innovation
        </p>
        <h3 className="font-inter text-2xl md:text-5xl font-bold py-5">
          Building Smart Web <br /> & App Solutions <br /> with Cloud & <br />
          Security Focus.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <button className="px-4 py-2 border rounded-full hover:bg-primary hover:text-white font-medium text-sm md:text-lg">
            Get in Touch
          </button>
          <button className="px-4 py-2 border rounded-full hover:bg-primary hover:text-white font-medium text-sm md:text-lg">
            Explore Service
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center  mt-8 md:mt-40">
        <div className="flex justify-center md:justify-start items-center relative">
          <img
            className="w-28 md:w-52 h-22  md:h-72"
            src={banner1}
            alt="Banner 1"
          />
          <div
            className="absolute top-16  md:top-58  md:left-40 rounded-full bg-cover bg-no-repeat w-12  md:w-28 h-12 sm:h-20 md:h-28 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(${elipse})`,
            }}
          >
            <h3 className="font-inter font-bold text-primary text-xs sm:text-sm md:text-lg">
              5k
            </h3>
            <p className="font-inter text-black text-[6px] sm:text-[8px] md:text-sm font-semibold text-center">
              Successful <br /> Projects
            </p>
          </div>
          <img
            className=" md:w-60   ml-2  md:ml-3 w-28  h-22  md:h-72"
            src={banner2}
            alt="Banner 2"
          />
        </div>
        <img
          className="w-58  md:w-full h-26 lg:w-[450px]  md:h-62 mt-2   md:mb-10 mb-5 "
          src={banner3}
          alt="Banner 3"
        />
      </div>
    </div>
  );
};

export default Banner;
