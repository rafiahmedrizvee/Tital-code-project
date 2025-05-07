import React from "react";
import blogImg from "../../../assets/Images/blogcard.jpg"


const BlogPost = () => {
  return (


        <div  >

                <div className="text-center">
                        <h5 className="font-inter text-[24px] font-bold text-primary my-[12px] " >Blog</h5>
                        <h2 className="font-inter text-[52px] font-bold text-[#000000] capitalize " >Latest blog post</h2>
                        <p className="font-inter text-[16px] font-normal text-[#484848] my-[17px]">Fresh insights from TitanCode. Dive into our latest blog post for <br /> innovative ideas, industry trends, and expert tips</p>
                </div>



                
    <div className="my-[55px]">
        <div className=" flex justify-between">
      <div className=" bg-[#EEF0F6] shadow-sm w-[581px] h-[297px] rounded-[20px] flex items-center justify-between gap-5 mx-auto ">
        <div className="ps-[12px] line  ">
          <h2 className="text-inter text-[24px] font-semibold leading-none text-[#000000] mb-[8px]">Prototype to <br /> Product: The Fast <br /> Track</h2>
          <p className="text-inter text-[16px] font-normal text-[#484848] " >Learn how we turn your ideas <br /> into clickable, testable <br />prototypes—fast.</p>
          <div className="card-actions justify-start">
            <button className=" px-5 py-3 bg-[#1E56F4] text-white rounded-3xl mt-[23px] text-[16px] font-medium text-inter ">Learn More</button>
          </div>
        </div>

        <div className=" pe-[21px]">
          <img className="rounded-[14px] w-[260px] h-[265px]  "
            src= {blogImg}
            alt="Movie"
          />
        </div>
      </div>
      <div className=" bg-[#EEF0F6] shadow-sm w-[581px] h-[297px] rounded-[20px] flex items-center justify-between gap-5 mx-auto ">
        <div className="ps-[12px] line  ">
          <h2 className="text-inter text-[24px] font-semibold leading-none text-[#000000] mb-[8px]">Prototype to <br /> Product: The Fast <br /> Track</h2>
          <p className="text-inter text-[16px] font-normal text-[#484848] " >Learn how we turn your ideas <br /> into clickable, testable <br />prototypes—fast.</p>
          <div className="card-actions justify-start">
            <button className=" px-5 py-3 bg-[#1E56F4] text-white rounded-3xl mt-[23px] text-[16px] font-medium text-inter ">Learn More</button>
          </div>
        </div>

        <div className=" pe-[21px]">
          <img className="rounded-[14px] w-[260px] h-[265px]  "
            src= {blogImg}
            alt="Movie"
          />
        </div>
      </div>
    </div>
    </div>
        </div>





  );
};

export default BlogPost;
