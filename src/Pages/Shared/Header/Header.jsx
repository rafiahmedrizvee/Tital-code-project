// import React from "react";
// import { Link } from "react-router";
// import logo from "../../../assets/Images/Logo.png";
// import LanguageSwitcher from "../../../Components/LanguageSwitcher";

// const Header = () => {
//   const navitems = (
//     <React.Fragment>
//       <li className="font-inter text-sm md:text-base font-normal hover:font-semibold hover:text-black">
//         <Link to="/home">Home</Link>
//       </li>
//       <li className="font-inter text-sm md:text-base font-normal hover:font-semibold hover:text-black">
//         <Link to="/about-us">About Us</Link>
//       </li>
//       <li className="font-inter text-sm md:text-base font-normal hover:font-semibold hover:text-black">
//         <Link to="/service">Service</Link>
//       </li>
//       <li className="font-inter text-sm md:text-base font-normal hover:font-semibold hover:text-black">
//         <Link to="/portfolio">Portfolio</Link>
//       </li>
//       <li className="font-inter text-sm md:text-base font-normal hover:font-semibold hover:text-black">
//         <Link to="/blogs">Blogs</Link>
//       </li>
//     </React.Fragment>
//   );

//   return (
//     <div className="bg-base-100 px-4 md:px-8">
//       <div className="navbar mt-4 md:mt-6">
//         {/* Logo and Mobile Menu */}
//         <div className="navbar-start">
//           <div className="dropdown">
//             <button
//               tabIndex={0}
//               className="btn btn-ghost lg:hidden"
//               aria-label="Open Menu"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </button>
//             <ul
//               tabIndex={0}
//               className="menu dropdown-content mt-3 z-10 bg-base-100 rounded-box shadow-md w-52 p-2"
//             >
//               {navitems}
//             </ul>
//           </div>
//           <Link to="/home" className="flex items-center">
//             <img
//               className="ms-4 md:ms-10 w-36 md:w-52"
//               src={logo}
//               alt="Logo"
//             />
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal space-x-6">{navitems}</ul>
//         </div>

//         {/* Contact Button */}
//         <div className="navbar-end">
//           <Link to="/contact">
//             <button className="text-sm md:text-base font-medium px-[30px] py-[20px] gap-[10px] rounded-[100px] border-[1px] border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 mr-[16px] ">
//               Contact
//             </button>
//           </Link>
//           <div >
//             <LanguageSwitcher />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/Logo.png";
import LanguageSwitcher from "../../../Components/LanguageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <Link to="/home" className="hover:text-black">Home</Link>
      </li>
      <li>
        <Link to="/about-us" className="hover:text-black">About Us</Link>
      </li>
      <li>
        <Link to="/service" className="hover:text-black">Service</Link>
      </li>
      <li>
        <Link to="/portfolio" className="hover:text-black">Portfolio</Link>
      </li>
      <li>
        <Link to="/blogs" className="hover:text-black">Blogs</Link>
      </li>
    </>
  );

  return (
    <header className="bg-base-100 w-full shadow-sm px-4 md:px-8">
      <div className="flex items-center justify-between py-4 md:py-6">
        
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 md:w-48" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6 font-inter  font-inter text-sm md:text-base font-normal hover:font-semibold hover:text-black">
          {navItems}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Contact Button */}
          <Link to="/contact">
            <button className="text-sm md:text-base font-medium px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
              Contact
            </button>
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="lg:hidden pb-4">
          <ul className="flex flex-col space-y-2 text-sm font-inter font-normal">
            {navItems}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
