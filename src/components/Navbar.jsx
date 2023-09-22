import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
  const { t } = useTranslation();

  return (
    <nav className="bg-primary border-b-[0.2px] border-purple p-6 flex fixed items-center justify-between">
      <Link href="#" className="text-white font-bold text-lg cursor-pointer" to="home"
        spy={true}
        smooth={true}
        duration={500}>
        Manuel
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
          {t("home")}
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
          {t("about")}
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
          {t("experience")}
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
          {t("work")}
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
          {t("contact")}
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
              {t("home")}
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
              {t("about")}
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
              {t("experience")}
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
              {t("work")}
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
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
