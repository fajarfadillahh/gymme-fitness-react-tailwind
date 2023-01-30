import React from "react";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper modules
import { Navigation } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={"auto"}
      grabCursor={true}
      modules={[Navigation]}
    >
      {testimonials.map((testimonial, index) => {
        // destructure testimonial
        const { image, name, message } = testimonial;

        return (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* testimonial img */}
              <div>
                <img src={image} alt="testimonial img" />
              </div>

              {/* testimonial message & name */}
              <div className="absolute bottom-[30px] p-[20px] text-center text-white">
                <div className="mb-8 text-lg font-light italic">{message}</div>
                <div className="flex items-center justify-center gap-x-1">
                  <span className="text-[30px] font-bold text-primary-200">
                    ~
                  </span>
                  <div className="text-[20px] font-bold">{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
