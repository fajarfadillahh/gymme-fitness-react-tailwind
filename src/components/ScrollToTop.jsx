import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 650 ? setScrollVisible(true) : setScrollVisible(false);
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-6 inline-flex cursor-pointer rounded-sm bg-primary-200 p-3 text-[1.5rem] text-white transition-all duration-300 hover:bg-neutral-500 lg:right-10 ${
        scrollVisible ? "bottom-12 lg:bottom-16" : "-bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
};

export default ScrollToTop;
