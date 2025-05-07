import React from "react";
import aboutImg from "../../assets/Images/about.png";
import blogImg from "../../assets/Images/blogcard.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <div className=" ">
        <h2 className="text-inter font-bold text-[64px] text-black mt-[100px] text-center">
          About Us
        </h2>
        <p className="text-inter text-[18px] font-normal text-[#555555] pt-[11px capitalize text-center">
          Innovation at Its Best: Unveiling Our Journey, Vision, and Commitment
          to <br /> Crafting Exceptional Digital Solutions Just for You.
        </p>
      </div>
      <div className="flex justify-around items-center gap-[50px]  my-[100px] ">
        <img
          src={aboutImg}
          className=" w-[627px] h-[505px] rounded-[40px] ms-[70px]"
        />

        <div className=" me-[20px] ">
          <h3 className="text-[42px]  text-inter font-bold text-black  ">
            The Journey of
            <br />
            TitanCode Technologies
          </h3>
          <p className=" text-[18px] text-inter font-normal text-[#555555] ">
            We are TitanCode Technologies, a team of seasoned professionals with
            a passion for crafting innovative <br /> web and app solutions. With
            over a decade of <br /> experience in the industry, our expertise
            spans <br /> across web development, app development, hosting,
            <br /> cybersecurity, automation, and custom software <br />{" "}
            solutions. We are dedicated to solving complex <br />
            problems and delivering exceptional digital <br /> experiences that
            drive success. Let’s create <br /> something remarkable together.
          </p>

          <div className="mt-[36px]">
            <button className="font-semibold text-[18px] border-[1px] text-inter hover:text-white py-3 px-5 rounded-[40px] hover:bg-primary  ">
              Let’s Talk
            </button>
            <button className="font-semibold text-[18px] border-[1px] text-inter hover:text-white py-3 px-5 rounded-[40px] hover:bg-primary ms-[32px] ">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Contact section */}

      <div className=" bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center  h-[453px] ">
        <div className="bg-white text-center rounded-[30px]  rounded-t-[50px] h-[350px] w-[735px] px-8 py-16 max-w-xl shadow-lg">
          <h2 className="text-4xl text-inter font-bold text-black mb-4">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-600 mb-8 text-inter ">
            Have a project in mind? Reach out and let’s bring your vision to
            life.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
      {/* Contact end */}

      {/* blog section */}
      <div>
        <div className="text-center">
          <h5 className="font-inter text-[24px] font-bold text-primary my-[12px] ">
            Blog
          </h5>
          <h2 className="font-inter text-[52px] font-bold text-[#000000] capitalize ">
            Latest blog post
          </h2>
          <p className="font-inter text-[16px] font-normal text-[#484848] my-[17px]">
            Fresh insights from TitanCode. Dive into our latest blog post for{" "}
            <br /> innovative ideas, industry trends, and expert tips
          </p>
        </div>

        <div className="my-[55px]">
          <div className=" flex justify-between">
            <div className=" bg-[#EEF0F6] shadow-sm w-[581px] h-[297px] rounded-[20px] flex items-center justify-between gap-5 mx-auto ">
              <div className="ps-[12px] line  ">
                <h2 className="text-inter text-[24px] font-semibold leading-none text-[#000000] mb-[8px]">
                  Prototype to <br /> Product: The Fast <br /> Track
                </h2>
                <p className="text-inter text-[16px] font-normal text-[#484848] ">
                  Learn how we turn your ideas <br /> into clickable, testable{" "}
                  <br />
                  prototypes—fast.
                </p>
                <div className="card-actions justify-start">
                  <button className=" px-5 py-3 bg-[#1E56F4] text-white rounded-3xl mt-[23px] text-[16px] font-medium text-inter ">
                    Learn More
                  </button>
                </div>
              </div>

              <div className=" pe-[21px]">
                <img
                  className="rounded-[14px] w-[260px] h-[265px]  "
                  src={blogImg}
                  alt="Movie"
                />
              </div>
            </div>
            <div className=" bg-[#EEF0F6] shadow-sm w-[581px] h-[297px] rounded-[20px] flex items-center justify-between gap-5 mx-auto ">
              <div className="ps-[12px] line  ">
                <h2 className="text-inter text-[24px] font-semibold leading-none text-[#000000] mb-[8px]">
                  Prototype to <br /> Product: The Fast <br /> Track
                </h2>
                <p className="text-inter text-[16px] font-normal text-[#484848] ">
                  Learn how we turn your ideas <br /> into clickable, testable{" "}
                  <br />
                  prototypes—fast.
                </p>
                <div className="card-actions justify-start">
                  <button className=" px-5 py-3 bg-[#1E56F4] text-white rounded-3xl mt-[23px] text-[16px] font-medium text-inter ">
                    Learn More
                  </button>
                </div>
              </div>

              <div className=" pe-[21px]">
                <img
                  className="rounded-[14px] w-[260px] h-[265px]  "
                  src={blogImg}
                  alt="Movie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog end */}
    </div>
  );
};

export default AboutUs;
