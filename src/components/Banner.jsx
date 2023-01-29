import React from "react";

// import banner data
import { banner } from "../data";

const Banner = () => {
  // destructure banner
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section className="banner h-[790px] bg-neutral-500">
      <div className="container mx-auto h-full">
        <div className="relative flex h-full items-center -space-x-48 lg:-space-x-24">
          {/* banner data */}
          <div className="z-10 flex-1 pl-6 text-white lg:pl-0">
            <h1
              className="h1 mb-8 text-white"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1} <br />
              <span className="text-green-200">{titlePart2}</span>
            </h1>
            <p
              className="text-body-md lg:text-body-lg mb-8 max-w-[415px]"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-sm btn-secondary lg:btn-lg"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              {textBtn}
            </button>
          </div>

          {/* banner image */}
          <div
            className="h-full w-full flex-1 bg-blue-200 bg-banner bg-cover bg-right bg-no-repeat lg:bg-center"
            data-aos="fade-right"
            data-aos-delay="900"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
