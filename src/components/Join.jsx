import React from "react";

// import join data
import { join } from "../data";

const Join = () => {
  // destructure join data
  const { image, title, subtitle, btnText } = join;

  return (
    <section className="join min-h-[537px] bg-neutral-500">
      <div className="container mx-auto">
        {/* join image & text wrapper */}
        <div className="flex flex-col -space-y-24 md:flex-row md:items-center md:-space-x-12 lg:-space-y-0">
          <div
            className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <img src={image} alt="join img" />
          </div>

          <div
            className="ml-[30px] max-w-[350px] lg:max-w-[492px]"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <h1 className="h1 mb-4 text-white md:text-[60px] md:leading-[62px] lg:mb-6">
              Wanna join <span className="text-primary-200">&</span> have fun?
            </h1>
            <p className="text-body-sm md:text-body-md mb-4 max-w-[348px] text-white md:max-w-[470px] lg:mb-6 lg:max-w-[492px]">
              {subtitle}
            </p>
            <button className="btn btn-lg btn-secondary">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
