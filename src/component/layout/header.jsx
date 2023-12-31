import React, { useState } from "react";
import { ChurchLogo } from "../../assets/icon";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import DCLOGO from "../../assets/dc-logo.jpg";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    controls.start({ opacity: isMenuOpen ? 0 : 1 });
  };
  return (
    <div className="h-[80px] shadow-sm border fixed w-[90%] top-0 bg-white z-50">
      <div className="my-5 mx-5 flex justify-between items-center">
        <motion.span className="static mb-[128px] w-[120px] lg:mb-0">
          <Link to="home" smooth={true} className="cursor-pointer">
            <img src={DCLOGO} alt="align" />
          </Link>
        </motion.span>
        <ul
          className={`lg:flex text-[16px] block font-medium gap-3  ${
            isMenuOpen
              ? "bg-[#F0FFF8] z-50 w-[150px] text-[#493E00] mt-16 leading-8 text-center h-[140px]"
              : "hidden"
          }`}
        >
          <li className="pt-2">
            <Link to="home" smooth={true} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className="pt-2">
            <Link to="about" smooth={true} className="cursor-pointer">
              About
            </Link>
          </li>
          <li className=" mr-1">
            <Link to="register" smooth={true}>
              <button
                className="bg-[#117C1A] hover:bg-[#68d571] rounded text-white w-[120px] h-10 transition duration-300 ease-in-out cursor-pointer"
              >
                 Register
              </button>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden mb-[128px]">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none ">
            &#9776;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
