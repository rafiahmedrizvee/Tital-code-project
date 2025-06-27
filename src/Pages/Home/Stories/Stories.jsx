import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slider1 from "../../../assets/Images/slide1.png";
import Slider2 from "../../../assets/Images/slide2.png";
import Slider3 from "../../../assets/Images/slide3.png";
import Slider4 from "../../../assets/Images/slide1.png";

// Dummy UI screenshots — replace these paths with your own image URLs
const images = [Slider1, Slider2, Slider3, Slider4];

const BankAppSlider = () => {
  return (
    <div className="py-10 bg-white">
      <div className="text-center px-4">
        <h5 className="text-inter text-lg sm:text-xl md:text-2xl font-bold text-primary">
          Success Stories
        </h5>
        <h2 className="text-inter text-2xl sm:text-4xl md:text-5xl font-bold text-black capitalize mt-4">
          Projects we have done for our clients
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-6xl px-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="rounded-xl"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="border-4 border-blue-400 rounded-2xl p-4 bg-blue-50 shadow-md transition-transform hover:scale-105">
                  <img
                    src={src}
                    alt={`Bank UI ${index + 1}`}
                    className="h-64 sm:h-72 md:h-96 object-contain mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-8 text-inter">
          Bank App UI Design
        </h2>
      </div>
    </div>
  );
};

export default BankAppSlider;
