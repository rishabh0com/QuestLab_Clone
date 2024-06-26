import React from "react";
import rightBg from "../assets/featuresImg/rightBg.svg";
import leftBg from "../assets/featuresImg/leftBg.svg";
import upper1 from "../assets/featuresImg/upper1.svg";
import upper2 from "../assets/featuresImg/upper2.svg";
import lower1 from "../assets/featuresImg/lower1.svg";
import lower2 from "../assets/featuresImg/lower2.svg";
import lower3 from "../assets/featuresImg/lower3.svg";

const Features = () => {
  return (
    <div className=" px-2 py-4 lg:py-[80px] lg:px-[120px] md:px-[40px] relative z-10 overflow-hidden ">
      <img
        className="absolute -top-52 left-0 -z-10 hidden md:block"
        src={leftBg}
        alt=""
      />
      <img
        className="absolute -bottom-40 -right-40 -z-10 hidden md:block"
        src={rightBg}
        alt=""
      />
      <div className=" m-auto flex flex-col gap-4 mb-[80px]  ">
        <p className="linearText text-center text-[#F6F6F6] font-Figtree text-[14px] font-bold m-auto leading-5 tracking-[0.28px]">
          FEATURES
        </p>
        <p className="text-white text-center font-medium text-[30px] lg:text-5xl leading-[40px] lg:leading-[56px] -tracking-[0.96px] font-figtree m-auto ">
          Robust &amp; Scalable Platform &amp; SDKs
        </p>
        <p className=" text-center text-[14px] lg:text-[18px] font-normal leading-[28px] text-[#B9B9B9] font-[Figtree] m-auto">
          Low-Code Dashboard, SDKs &amp; APIs to drive product growth
        </p>
      </div>
      <div
        className=" flex flex-col md:flex-row gap-6 w-full  m-auto max-w-[1200px]"
        style={{ opacity: "1", transform: "none" }}>
        <div className="w-full md:w-[42%] relative rounded-[24px] border border-[rgba(201,201,201,0.12)] bg-[#202020] flex flex-col justify-between">
          <div className="">
            <img src={upper1} alt="" className="w-full" />
          </div>
          <div className="px-8 py-6">
            <p className="text-[#E0E0E0] text-center font-figtree leading-[30px] tracking-tight sm:text-xl sm:leading-[30px] sm:tracking-[-0.4px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.48px] lg:font-semibold ">
              Enterprise-Grade SDKs
            </p>
            <p className="text-[#939393]  text-center font-figtree text-[12px] md:text-[14px] font-normal leading-[20px] mt-2">
              Build on a solid foundation with our robust SDKs, designed for
              scalability and performance.
            </p>
          </div>
        </div>
        <div className="rounded-[24px] border border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-[58%] flex flex-col justify-between">
          <div className="flex relative">
            <img src={upper2} alt="" className="w-full" />
          </div>
          <div className="px-8 py-6">
            <p className="text-[#E0E0E0] text-center font-figtree leading-[30px] tracking-tight sm:text-xl sm:leading-[30px] sm:tracking-[-0.4px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.48px] lg:font-semibold">
              Fully Customizable to your Brand
            </p>
            <p className="text-[#939393] text-center font-figtree text-[12px] md:text-[14px] max-w-[350px] m-auto font-normal leading-[20px] mt-2">
              Your brand, your way—personalize every aspect of your platform to
              stand out.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full max-w-[1200px] m-auto flex flex-col md:flex-row gap-6 mt-6"
        style={{ opacity: "1", transform: "none" }}>
        <div className="rounded-3xl border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-1/3">
          <div className="rounded-3xl">
            <img src={lower1} alt="" className="rounded-3xl w-full" />
          </div>
          <div className="px-8 py-6">
            <p className="text-center font-figtree text-[#FFF] text-xl font-semibold">
              Plug &amp; Play with Pre-Built Templates
            </p>
            <p className="text-center font-figtree text-[#939393] text-sm mt-2">
              Jumpstart your project using 100s of customi-zable templates for a
              seamless user experience.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-1/3">
          <div className="rounded-3xl">
            <img src={lower2} alt="" className="rounded-3xl w-full" />
          </div>
          <div className="px-8 py-6">
            <p className="text-center font-figtree text-[#FFF] text-xl font-semibold">
              Unlock AI-Powered Insights
            </p>
            <p className="text-center font-figtree text-[#939393] text-sm mt-2">
              Leverage advanced analytics to drive data-driven decisions and
              foster growth.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-1/3">
          <div className="rounded-3xl">
            <img src={lower3} alt="" className="rounded-3xl w-full" />
          </div>
          <div className="px-8 py-6">
            <p className="text-center font-figtree text-[#FFF] text-xl font-semibold">
              Stay Updated in Slack
            </p>
            <p className="text-center font-figtree text-[#939393] text-sm mt-2">
              Trigger Slack alerts to your team and automatically detect key
              intent signals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
