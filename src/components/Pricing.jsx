import React from "react";

// import pricing data
import { pricing } from "../data";

// import components
import PlanList from "./PlanList";

const Pricing = () => {
  // destructure pricing data
  const { icon, title, plans } = pricing;
  return (
    <section className="pricing section">
      {/* pricing title */}
      <div
        className="section-title-group mx-auto max-w-[540px] px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img src={icon} alt="pricing icon" />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>

      {/* pricing list */}
      <div>
        <PlanList plans={plans} />
      </div>
    </section>
  );
};

export default Pricing;
