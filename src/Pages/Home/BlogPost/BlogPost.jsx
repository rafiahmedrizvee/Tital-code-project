import React from "react";
import blogImg from "../../../assets/Images/blogcard.jpg";

const BlogPost = () => {
  return (
    <div className="p-4">
      <div className="text-center">
        <h5 className="font-inter text-lg md:text-xl lg:text-2xl font-bold text-primary my-3">
          Blog
        </h5>
        <h2 className="font-inter text-2xl md:text-4xl lg:text-5xl font-bold text-black capitalize">
          Latest Blog Post
        </h2>
        <p className="font-inter text-sm md:text-base lg:text-lg text-gray-600 my-4">
          Fresh insights from TitanCode. Dive into our latest blog post for <br className="hidden md:block" />
          innovative ideas, industry trends, and expert tips.
        </p>
      </div>

      <div className="my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-sm w-full max-w-md lg:max-w-lg mx-auto rounded-2xl flex flex-col lg:flex-row items-center gap-5"
            >
              <div className="p-4 flex-1">
                <h2 className="text-lg md:text-xl font-semibold leading-tight text-black mb-2">
                  Prototype to <br /> Product: The Fast <br /> Track
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Learn how we turn your ideas <br /> into clickable, testable <br />
                  prototypes—fast.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm md:text-base">
                  Learn More
                </button>
              </div>
              <div className="p-4">
                <img
                  className="rounded-lg w-full lg:w-[260px] h-auto lg:h-[265px]"
                  src={blogImg}
                  alt="Blog"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
