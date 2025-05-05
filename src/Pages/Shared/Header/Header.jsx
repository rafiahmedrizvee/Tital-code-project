import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/Images/Logo.png";

const Header = () => {
  const navitems = (
    <React.Fragment>
      <li className="font-inter text-[14px] font-normal hover:font-semibold hover:text-#000000  ">
        <Link to="/home">Home</Link>
      </li>
      <li className="font-inter text-[14px] font-normal hover:font-semibold hover:text-#000000">
        <Link to="/about-us">About Us</Link>
      </li>
      <li className="font-inter text-[14px] font-normal hover:font-semibold hover:text-#000000">
        <Link to="/service">Service</Link>
      </li>
      <li className="font-inter text-[14px] font-normal hover:font-semibold hover:text-#000000">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="font-inter text-[14px] font-normal hover:font-semibold hover:text-#000000">
        <Link to="/blogs">Blogs</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100 mt-[40px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              
              {navitems}
              
            </ul>
          </div>
          <div>
            <img className="ms-[100px] w-[234px] h-[53px] " src={logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ms-40 gap-8 ">
               
               {navitems}
              
                </ul>
        </div>
        <div className="navbar-end me-10">
        <button className='text-[18px] font-inter font-medium px-4 py-2 rounded-3xl border-1 text-[#1E56F4] hover:bg-primary hover:text-white ;
'>
                        <Link to="/contact" >Contact</Link>
                        </button>
                        
        </div>
      </div>
    </div>
  );
};

export default Header;
