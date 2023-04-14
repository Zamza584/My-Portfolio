import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);

  return (
    <nav className="bg-primary border-b-[0.2px] border-purple p-6 flex fixed items-center justify-between">
      <Link href="#" className="text-white font-bold text-lg cursor-pointer" to="home"
        spy={true}
        smooth={true}
        duration={500}>
        Portfolio
      </Link>

      <div className="hidden md:flex">
        <Link
          className="px-3 py-2 text-cream hover:text-orange cursor-pointer"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
        >
          Home
        </Link>
        <Link
          className="px-3 py-2 text-cream hover:text-orange cursor-pointer"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
        >
          About Me
        </Link>
        <Link
          className="px-3 py-2 text-cream hover:text-orange cursor-pointer"
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
        >
          Experience
        </Link>
        <Link
          className="px-3 py-2 text-cream hover:text-orange cursor-pointer"
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
        >
          Work
        </Link>
        <Link
          className="px-3 py-2 text-cream hover:text-orange cursor-pointer"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
        >
          Contact
        </Link>
      </div>
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        <BsList className="w-6 h-6" />
      </div>

      {/* Mobile Menu */}
      <div
        className={
          Nav
            ? "bg-primary mobile-menu flex flex-col items-center justify-center top-0 left-0 w-full h-screen absolute md:hidden translate-x-0 duration-100"
            : "hidden"
        } 
      >
        <ul className="space-y-7">
          <li>
            <Link activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              href="#"
              className="border-b-2 border-blue-400 px-3 py-2 text-cream hover:text-orange"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              href="#"
              className="border-b-2 border-blue-400 px-3 py-2 text-cream hover:text-orange"
              onClick={handleClick}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              href="#"
              className="border-b-2 border-blue-400 px-3 py-2 text-cream hover:text-orange"
              onClick={handleClick}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              href="#"
              className="border-b-2 border-blue-400 px-3 py-2 text-cream hover:text-orange"
              onClick={handleClick}
            >
              Work
            </Link>
          </li>
          <li>
            <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              href="#"
              className="border-b-2 border-blue-400 px-3 py-2 text-cream hover:text-orange"
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
