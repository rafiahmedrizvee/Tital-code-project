// import React from "react";
// import service1 from "../../assets/Images/service1.png";
// import service1 from "../../assets/Images/service1.png";
// import service1 from "../../assets/Images/service1.png";

// const Service = () => {
//   return (
//     <section className="py-10">
//       <div className="container mx-auto px-6 lg:px-20 text-center">
//         {/* Title */}
//         <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold mb-4">
//           Services
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-12">
//           Embark On A Journey With TitanCode Technologies: Discovering Tailored
//           Solutions Infused With Innovation, Precision, And Expertise To Shape
//           Tomorrow's Digital Experiences.
//         </p>

//         {/* Service Sections */}
//         {[...Array(6)].map((_, index) => (
//           <div
//             key={index}
//             className={`flex flex-col ${
//               index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
//             } items-center justify-center gap-8 lg:gap-12 bg-[#F6F6F6] my-8  px-4 lg:px-12 py-6 lg:py-12 rounded-[30px] `}
//           >
//             {/* Image Section */}
//             <div className="lg:w-1/2 w-full  max-w-sm lg:max-w-none">
//               <img
//                 className="rounded-[40px] w-full"
//                 src={service1}
//                 alt="Creative Designs"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="lg:w-1/2 text-left space-y-4 lg:space-y-6">
//               <h3 className="text-xl lg:text-2xl font-semibold">
//                 Website & Apps Design
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
//                 Design and build responsive websites for a smooth, consistent
//                 user experience.
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-800">
//                 <div>
//                   Website & Apps Design ➝
//                   <hr className="w-36 lg:w-48 h-px mt-2 bg-gray-300 rounded" />
//                 </div>
//                 <div>Visual UI Design</div>
//                 <div>
//                   User Research
//                   <hr className="w-36 lg:w-48 h-px mt-2 bg-gray-300 rounded" />
//                 </div>
//                 <div>Usability Testing</div>
//                 <div>Wireframe & Prototyping</div>
//               </div>
//               {/* Button */}
//               <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
//                 Let's Talk
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Service;





import React from "react";
import service1 from "../../assets/Images/service1.png";
import service2 from "../../assets/Images/service2.png";
import service3 from "../../assets/Images/service3.png";
import service4 from "../../assets/Images/service4.png";
import service5 from "../../assets/Images/service5.png";
import service6 from "../../assets/Images/service6.png";
import BlogPost from "../Home/BlogPost/BlogPost";

const services = [
  {
    id: 1,
    image: service1,
    title: "Website & Apps Design",
    description: "Design and build responsive websites for a smooth, consistent user experience.",
  },
  {
    id: 2,
    image: service2,
    title: "Custom Software Development",
    description: "Create tailored software solutions to meet your unique business needs.",
  },
  {
    id: 3,
    image: service3,
    title: "Mobile App Development",
    description: "Develop feature-rich mobile applications for both Android and iOS platforms.",
  },
  {
    id: 4,
    image: service4,
    title: "Digital Marketing",
    description: "Enhance your online presence with our result-driven digital marketing strategies.",
  },
  {
    id: 5,
    image: service5,
    title: "UI/UX Design",
    description: "Design intuitive and visually appealing user interfaces and experiences.",
  },
  {
    id: 6,
    image: service6,
    title: "Cloud Solutions",
    description: "Leverage cloud technologies to scale your business and ensure data security.",
  },
];

const Service = () => {
  return (
  <div>
      <section className="py-10">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold mb-4">
          Services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-12">
          Embark On A Journey With TitanCode Technologies: Discovering Tailored
          Solutions Infused With Innovation, Precision, And Expertise To Shape
          Tomorrow's Digital Experiences.
        </p>

        {/* Service Sections */}
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-center gap-8 lg:gap-12 bg-[#F6F6F6] my-8 px-4 lg:px-12 py-6 lg:py-12 rounded-[30px]`}
          >
            {/* Image Section */}
            <div className="lg:w-1/2 w-full max-w-sm lg:max-w-none">
              <img
                className="rounded-[40px] w-full"
                src={service.image}
                alt={service.title}
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 text-left space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-800">
                <div className="font-inter text-[18px] font-normal font-[#000000] ">
                  Website & Apps Design ➝
                  <hr className="w-36 lg:w-48 h-px mt-2 bg-gray-300 rounded" />
                </div >
                <div className="font-inter text-[18px] font-normal font-[#000000] ">Visual Ui Design</div>
                <div className="font-inter text-[18px] font-normal font-[#000000] ">
                    User Research
                 
                  <hr className="w-36 lg:w-48 h-px mt-2 bg-gray-300 rounded" />
                </div>
                <div className="font-inter text-[18px] font-normal font-[#000000] ">Usability Testing</div>
                <div className="font-inter text-[18px] font-normal font-[#000000] ">Wireframe & Prototyping</div>
            
              </div>
              {/* Button */}
              <button className="mt-[10px] text-inter font-semibold px-[15px] md:px-[30px] py-[7px] md:py-[15px] bg-[#1E56F4] text-white text-[9px]  md:text-[18px] rounded-[42.02px] hover:bg-blue-700">
                Let's Talk
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <BlogPost></BlogPost>
  </div>
  );
};

export default Service;

