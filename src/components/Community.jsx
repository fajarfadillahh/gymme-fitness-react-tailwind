import React from "react";

// import community data
import { community } from "../data";

// import components
import CommunitySlider from "./CommunitySlider";

const Community = () => {
  // destructure community data
  const { icon, title, testimonials } = community;

  return (
    <section className="community section relative">
      <div className="container mx-auto">
        <div className="flex">
          {/* community title */}
          <div
            className="section-title-group mx-auto max-w-[240px] px-4 lg:ml-0 lg:px-0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <img src={icon} alt="community icon" />
            <h2 className="h2 section-title">
              {title}
              <span className="text-primary-200">.</span>
            </h2>
          </div>

          {/* community slider */}
          <div
            className="absolute -right-[375px] top-48 w-[1140px] lg:top-0 lg:-right-[280px]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
