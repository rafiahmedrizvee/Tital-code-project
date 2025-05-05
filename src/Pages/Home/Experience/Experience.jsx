import React from 'react';

const Experience = () => {
        return (
                <div className='flex justify-around items-center w-100%  my-[100px] mx-[100px] ' >
                        <div className='text-inter text-[#000000] text-[64px] font-semibold w-50% leading-none'>
                            <h3 >Experiences with Innovation,Precision, and Expertise.</h3>    
                        </div>
                        <div className='w-50% ms-[150px] mt-5'>
                                <p className='text-inter text-[#6B6B6B] text-[16px] font-normal '>Transforming Ideas into Reality: Specializing in Web & App Development, Hosting, Cybersecurity, Automation, and Custom Software to Boost Your Online Presence and Create Memorable Experiences</p>

                                <button className='font-semibold text-[18px] text-inter text-white py-3 px-5 rounded-[40px] bg-primary mt-[32px] '>
                                Let’s Talk
                                </button>
                        </div>
                </div>
        );
};

export default Experience;