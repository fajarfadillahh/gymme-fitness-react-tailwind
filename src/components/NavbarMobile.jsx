import React from "react";

// import navbar data
import { nav } from "../data";

const NavbarMobile = ({ navbarMobile }) => {
  return (
    <nav
      className={`${
        navbarMobile ? "min-h-screen" : "min-h-0"
      } fixed inset-x-0 top-0 -bottom-12 -z-10 h-0 w-full overflow-hidden bg-neutral-500 transition-all delay-200 duration-300 ease-in-out lg:hidden`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-y-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href} className="text-body-md text-white">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      {/* navbar btns */}
      <div className="-mt-44 flex justify-center">
        <button className="btn btn-lg text-white">Log in</button>
        <button className="btn btn-lg btn-primary">Sign up</button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
