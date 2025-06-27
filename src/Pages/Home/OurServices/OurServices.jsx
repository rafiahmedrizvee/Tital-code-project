import React from "react";
import Cards from "./Cards";
import blur from "../../../assets/Images/blur.png";

const OurServices = () => {
  return (

     <div className=" bg-secondary px-[20px]">
      <div className="text-center">
        <h3 className="font-inter md:text-[24px] pt-5 text-[12px] font-bold text-primary ">
          Our Services
        </h3>

        <h2 className="font-inter md:text-[52px] text-xl font-bold">Services That We Offer</h2>
      </div>
      <div
        className="  bg-center bg-no-repeat w-full bg-cover "
        style={{ backgroundImage: `url(${blur})` }}
      >
        <Cards />
      </div>
    </div>
   
  );
};

export default OurServices;
