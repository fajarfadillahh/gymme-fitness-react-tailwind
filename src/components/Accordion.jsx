import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  // accordion state
  const [isOpen, setIsOpen] = useState(false);

  // destructure accordion data
  const { question, answer } = accordion;

  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="rounded-sm border bg-white">
        {/* accordion question */}
        <div className="flex min-h-[60px] items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div className="text-[20px] text-neutral-500">
            {isOpen ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
        </div>

        {/* accordion answer */}
        <div
          className={`${
            isOpen ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0"
          } flex max-h-0 justify-center overflow-hidden px-[30px] transition-all`}
        >
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
