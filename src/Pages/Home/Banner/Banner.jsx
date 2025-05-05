import React from "react";
import banner1 from "../../../assets/Images/banner1.png";
import banner2 from "../../../assets/Images/banner2.png";
import banner3 from "../../../assets/Images/banner3.png";
import elipse from "../../../assets//Images/Ellipse 998.png";


const Banner = () => {
  return (
    <div className=" md:flex justify-around items-center mb-[100px]">
      <div className="w-50% leading-[1.1] ms-[70px]">
        <p
          className="font-inter text-[24px] font-bold text-[#1E56F4] ;
] ;
 "
        >
          Meet TitanCode – Experts in Digital Innovation
        </p>
        <h3 className="font-inter text-[64px] font-bold py-5">
          Building Smart Web <br /> & App Solutions <br /> with Cloud & <br />{" "}
          Security Focus.
        </h3>
       <div className="mt-10">
       <button className="px-5 py-3 border-1 rounded-3xl hover:bg-primary hover:text-white font-inter font-medium text-[18px] ">
          Get in Touch
        </button>
        <button className="px-5 py-3 border-1 rounded-3xl hover:bg-primary hover:text-white font-inter font-medium text-[18px] ms-5 ">
          Explore Service
        </button>
       </div>
      </div>
      <div className="w-50%">
        <div className=" md:flex justify-center items-center mt-10">
          <img className="w-[202px] h-[283px] me-[-50px]" src={banner1} alt="" />

          <div className=" mt-70 rounded-full px-7  py-5 text-center z-50  " style={{ 
                 background: `url(${elipse})`,
          }}>
          <h3 className="font-inter font-bold text-primary text-[24px] ">5k</h3>
         
          <p className="font-inter text-[14px] font-semibold text-[#000000]
 ">Sucessful <br /> Project</p>
          </div>

          <img className="w-[303px] h-[283px] ms-[-50px]  " src={banner2} alt="" />
        </div>
        <img className="w-[525px] h-[283px] mt-[-50px] ps-2  " src={banner3} alt="" />
      </div>
    </div>
  );
};

export default Banner;
