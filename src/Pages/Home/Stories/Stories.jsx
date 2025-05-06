import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Dummy UI screenshots — replace these paths with your own image URLs
const images = [
  "/src/assets/Images/slide1.png",
  "/src/assets/Images/slide2.png",
  "/src/assets/Images/slide3.png",
  "/src/assets/Images/slide1.png",
 
];

const BankAppSlider = () => {
  return (
    <div>
      <div className="text-center">
        <h5 className="text-inter text-[24px] font-bold text-primary ">Success Stories</h5>
        <h2 className="text-inter text-[52px] font-bold text-[#000000] capitalize ">Projects we have done for our clients</h2>
      </div>

<div className="flex flex-col items-center justify-center py-10 bg-white mt-">
      <div className="w-full max-w-6xl px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="border-4 border-blue-400 rounded-2xl p-4 bg-blue-50 shadow-md transition-all hover:scale-105">
                <img
                  src={src}
                  alt={`Bank UI ${index + 1}`}
                  className="h-96 object-contain mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2 className="text-xl font-semibold mt-8">Bank App UI Design</h2>
    </div>
    </div>
  );
};

export default BankAppSlider;
