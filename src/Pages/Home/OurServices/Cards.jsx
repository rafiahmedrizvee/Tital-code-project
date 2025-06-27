import React from 'react';
import Img1 from "../../../assets/Images/img1.png";
import Img2 from "../../../assets/Images/img2.png";
import Img3 from "../../../assets/Images/img3.png";
import Img4 from "../../../assets/Images/img4.png";
import Img5 from "../../../assets/Images/img5.png";
import Img6 from "../../../assets/Images/img6.png";

const cardData = [
  {
    id: 1,
    img: Img1,
    title: 'Automation Solutions',
    description: 'Boosting efficiency through smart automation and optimized workflows.',
  },
  {
    id: 2,
    img: Img2,
    title: 'Website & Apps design',
    description: 'Design and build responsive websites for a smooth, consistent user experience.',
  },
  {
    id: 3,
    img: Img3,
    title: 'Cloud and cyber hosting',
    description: 'Reliable hosting solutions with robust cybersecurity to safeguard your digital assets.',
  },
  {
    id: 4,
    img: Img4,
    title: 'Custom software development',
    description: 'Tailored software and management tools built to fit your exact needs.',
  },
  {
    id: 5,
    img: Img5,
    title: 'Website & Apps development',
    description: 'Design and build responsive websites for a smooth, consistent user experience.',
  },
  {
    id: 6,
    img: Img6,
    title: 'Product prototype',
    description: 'Transforming ideas into functional prototypes for fast validation and iteration.',
  },
];

const Cards = () => {
  return (
    <div className="p-4 sm:p-6 md:p-15 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-3xl shadow-lg flex flex-col text-center items-center transition-transform transform hover:scale-105 p-6 sm:p-8 md:h-[440px] justify-center "
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[120px] md:h-[120px] mb-4 md:mb-[35px] rounded-full object-cover"
            />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 md:mb-[16px mb-4">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {card.description}
            </p>
            <a
              className="inline-flex items-center text-blue-600 font-bold hover:underline"
              href="/"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
