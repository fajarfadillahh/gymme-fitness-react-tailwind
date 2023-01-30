import React from "react";

// import faq data
import { faq } from "../data";

// import components
import Accordion from "../components/Accordion";

const Faq = () => {
  // destructure faq data
  const { icon, title, accordions } = faq;
  return (
    <section className="faq section pt-[480px] lg:pt-[280px]">
      <div className="mx-auto max-w-[768px] bg-custom bg-center bg-no-repeat lg:h-[1160px] lg:bg-faq lg:pt-6">
        {/* faq title */}
        <div
          className="section-title-group mx-auto justify-start -space-x-4 px-4 lg:max-w-[540px] lg:justify-center lg:px-0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          <img src={icon} alt="faq icon" className="lg:hidden" />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>

        {/* faq accordion list */}
        <div
          className="flex flex-col gap-y-4 px-4"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="200"
        >
          {accordions.map((accordion, index) => {
            return <Accordion key={index} accordion={accordion} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
