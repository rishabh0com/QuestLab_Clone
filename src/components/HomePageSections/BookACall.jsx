import React from "react";
import leftBg from "../../assets/BookACall/leftBg.svg";
import rightBg from "../../assets/BookACall/rightBg.svg";
import centerBg from "../../assets/BookACall/centerBg.svg";

const BookACall = () => {
  return (
    <div className="mt-6 gap-6 relative h-fit items-center">
      <div className="relative h-[300px] md:h-full">
        <img
          src={centerBg}
          className="text-white h-full min-h-[200px] m-auto"
          alt="Quest Labs website layout element"
        />
        <img
          src={leftBg}
          className="absolute h-full w-1/2 top-0 lg:block"
          alt=""
        />
        <img
          src={rightBg}
          className="absolute h-full w-1/2 top-0  lg:block right-0 "
          alt=""
        />
      </div>
      {}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full lg:w-[660px] px-4 flex flex-col justify-center items-center">
        <p className=" w-full  lg:w-[860px] text-white text-center font-figtree text-[24px] md:text-[36px] lg:text-[48px] font-medium leading-[26px] md:leading-[42px] lg:leading-[56px] tracking-[-0.96px]">
          Let's make sure your customers are getting the best experience
          possible
        </p>
        <p className="text-sm lg:text-lg text-[#E0E0E0] text-center mt-4">
          Create your account for free or book a demo today!
        </p>
        <button
                  className="bg-gradient-to-r from-[#9035FF] to-[#6144FF] p-[8px_12px] rounded-[4px]  text-white font-semibold text-sm leading-[20px] mt-7 font-figtree "
                  style={{ background: "linear-gradient(transparent, transparent) padding-box, linear-gradient(to left, rgb(0, 101, 255), rgb(144, 53, 255), rgb(144, 53, 255)) border-box", border: "1px solid rgba(0, 0, 0, 0)" }}>
          Book a Call Today!
        </button>
      </div>
    </div>
  );
};

export default BookACall;
