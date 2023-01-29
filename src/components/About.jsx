import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// import about data
import { about } from "../data";

const About = () => {
  // destructure about data
  const { icon, title, subtitle1, subtitle2, link } = about;

  return (
    <section className="about py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* about title */}
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={icon} alt="about icon" />
          <h2 className="h2 section-title">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>

        {/* about text */}
        <div className="grid gap-y-8">
          <p
            className="md:text-body-md mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {subtitle1}
          </p>
          <p
            className="md:text-body-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {subtitle2}
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="#"
              className="link inline-flex items-center gap-x-4 transition-all duration-300 hover:gap-x-6"
            >
              {link}
              <IoIosArrowDroprightCircle className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
