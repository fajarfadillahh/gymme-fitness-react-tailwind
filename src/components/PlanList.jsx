import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  // index state
  const [index, setIndex] = useState(0);

  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-y-4 lg:flex-row">
      {plans.map((plan, currentIndex) => {
        // destructure plan
        const { name, price, list, delay } = plan;

        return (
          <div
            key={currentIndex}
            className="w-full rounded-sm px-4 md:max-w-[620px] lg:min-h-[550px] lg:max-w-[405px]"
            onClick={() => setIndex(currentIndex)}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex items-center justify-center py-[40px] px-[30px] transition duration-150 lg:min-h-[550px]`}
            >
              <div className="flex flex-row items-center gap-y-8 gap-x-8 lg:flex-col lg:gap-x-0">
                {/* pricing: name & price wrapper */}
                <div>
                  <div
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } mx-auto mb-8 flex h-[26px] min-w-min items-center justify-center px-[14px] font-primary text-sm font-semibold`}
                  >
                    {name}
                  </div>

                  <div className="flex flex-col items-center justify-center text-center font-primary text-[40px] font-extrabold lg:text-[50px]">
                    <div className="leading-none">
                      <span className="tracking-[-0.1px]">{price}</span>
                      <span className="text-[30px] font-extrabold">$</span>
                    </div>
                    <span className="text-sm font-medium">/month</span>
                  </div>
                </div>

                {/* pricing: list & btns */}
                <div>
                  <ul className="mb-8 flex flex-col gap-y-4">
                    {list.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-x-[10px]"
                        >
                          <BsCheckCircleFill className="text-lg" />
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>

                  <button
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "border border-neutral-500"
                    } btn btn-lg rounded-[2px] lg:mx-auto`}
                  >
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
