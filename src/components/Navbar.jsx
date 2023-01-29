import React from "react";

// import navbar data
import { nav } from "../data";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-start gap-x-8 text-white">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href} className="transition hover:text-primary-200">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
