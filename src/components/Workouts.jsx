import React from "react";

// import workouts data
import { workouts } from "../data";

// import components
import WorkoutSlider from "../components/WorkoutSlider";

const Workouts = () => {
  // destructure workouts data
  const { icon, title } = workouts;

  return (
    <section className="workouts section">
      {/* workouts title */}
      <div
        className="section-title-group mx-auto max-w-[540px] px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={icon} alt="workouts icon" />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>

      {/* workouts slide */}
      <div data-aos="fade-up" data-aos-delay="300">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
