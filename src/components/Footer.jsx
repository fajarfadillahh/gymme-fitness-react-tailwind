import React from "react";

// import footer data
import { footer } from "../data";

const Footer = () => {
  // destructure footer data
  const { logo, copyrightText } = footer;

  return (
    <footer className="footer h-[125px] bg-neutral-500 px-[20px] md:h-[195px]">
      <div
        className="container mx-auto flex h-full flex-col items-center justify-between py-6 text-center md:flex-row md:items-end md:py-0 md:pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a href="/">
          <img src={logo} alt="footer logo" />
        </a>

        <p className="text-sm text-neutral-300">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
