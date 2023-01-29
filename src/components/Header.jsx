import React, { useState, useEffect } from "react";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

// import header data
import { header } from "../data";

// import components
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

const Header = () => {
  // destructure header data
  const { logo, btnLoginText, btnSignupText } = header;

  // header state & navbar mobile state
  const [isActive, setIsActive] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`header ${
        isActive ? "bg-neutral-500 py-6" : "bg-transparent py-8"
      } fixed inset-x-0 z-30 mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-300 lg:px-20`}
    >
      {/* header logo */}
      <a href="/">
        <img src={logo} className="h-8" alt="header logo" />
      </a>

      {/* navbar & btns - desktop version */}
      <Navbar />
      <div className="hidden space-x-4 lg:flex">
        <button className="btn btn-sm text-white transition hover:text-primary-200">
          {btnLoginText}
        </button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>

      {/* navbar toggle & navbar - mobile version */}
      <div
        className="absolute right-4 cursor-pointer text-2xl text-white lg:hidden"
        onClick={() => setNavbarMobile(!navbarMobile)}
      >
        {navbarMobile ? <RiCloseFill /> : <RiMenu4Fill />}
      </div>
      <NavbarMobile navbarMobile={navbarMobile} />
    </header>
  );
};

export default Header;
