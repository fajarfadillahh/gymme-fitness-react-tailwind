import React from "react";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper modules
import { Navigation } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../assets/styles/_workoutSlider.css";

// import workouts data
import { workouts } from "../data";

const WorkoutSlider = () => {
  // destructure workouts data
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, index) => {
        // destructure program
        const { image, name } = program;

        return (
          <SwiperSlide
            key={index}
            className="relative max-h-[320px] max-w-[320px]"
          >
            <img
              src={image}
              alt="program image"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-[20px] bottom-[20px] flex h-[26px] items-center rounded-[2px] bg-white px-[14px]">
              <div className="font-primary text-sm font-semibold text-neutral-500">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
