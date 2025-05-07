import React from 'react';
import Img1 from "../../../assets/Images/img1.png"
import Img2 from "../../../assets/Images/img2.png"
import Img3 from "../../../assets/Images/img3.png"
import Img4 from "../../../assets/Images/img4.png"
import Img5 from "../../../assets/Images/img5.png"
import Img6 from "../../../assets/Images/img6.png"




const cardData = [
  {
    id: 1,
    img: Img1 ,
    title: 'Automation Solutions',
    description: 'Boosting efficiency through smart automation and optimized workflows.',
   
  },
  {
    id: 2,
    img: Img2,
    title: 'Website & Apps design ',
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] py-10 ps-[40px] ">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-[40px] shadow-md  flex flex-col  text-center transition-transform transform hover:scale-110 w-[370px] h-[460px] items-center justify-center hover:border-[4px] hover:border-primary hover:w-[386px]  "
        >
          <img src={card.img} alt={card.title} className="w-[120px] h-[120px] mb-10 rounded-full object-cover" />
          <h3 className=" text-inter text-center text-[24px] font-semibold mb-2 text-[#000000] ">{card.title}</h3>
          <p className="text-[#6B6B6B] text-center mb-4 text-inter text-[16px] font-normal ">{card.description}</p>
          <a
  className="inline-flex items-center gap-2  text-inter  text-primary hover:bg-transparent  "
  href="/"
>
  <span className="text-inter text-[24px] font-bold text-primary "> Get Started </span>

  <svg
    className="size-5 shadow-sm rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
          
        </div>
      ))}
    </div>
  );
};

export default Cards;
