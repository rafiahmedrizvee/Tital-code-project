import React from "react";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices";
import Experience from "./Experience/Experience";

import ContactSection from "./Build/Build";

import BankSlider from "./Stories/Stories";


import BlogPost from "./BlogPost/BlogPost";




const Home = () => {
  return (
    <div>
      <Banner/>
      <OurServices/>
      <Experience/>
      <BankSlider></BankSlider>
     <ContactSection/>
    <BlogPost></BlogPost>
    </div>
  );
};

export default Home;
