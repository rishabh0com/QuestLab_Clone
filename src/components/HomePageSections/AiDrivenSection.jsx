import React from "react";
import AppCard from "./AppCard";
import logoWithLine from "../../assets/logoWithLine.svg";
import "./aiDriven.css";
// import { ai1, ai2, ai3, ai4 } from "../assets/aiDrivenImage";
import ai1 from "../../assets/aiDrivenImage/ai1.svg";
import ai2 from "../../assets/aiDrivenImage/ai2.svg";
import ai3 from "../../assets/aiDrivenImage/ai3.svg";
import ai4 from "../../assets/aiDrivenImage/ai4.svg";
import NewDynamicContent from "./NewDynamicContent";
import NewAiDriven from "./NewAiDriven";

const AiDrivenSection = () => {
  return (
    <div
      className="p-2 lg:p-[80px_120px] md:p-0 sm:p-0 text-white"
      style={{ opacity: "1", transform: "none" }}>
      <div className=" m-auto flex flex-col gap-4 mb-[48px]">
        <p className="text-white text-center font-medium text-[30px] lg:text-5xl leading-[40px] lg:leading-[56px] -tracking-[0.96px] font-figtree m-auto">
          AI-Driven Personalized UI
        </p>
        <p className=" text-center text-[14px] lg:text-[18px] font-normal leading-[28px] text-[#B9B9B9] font-[Figtree] m-auto">
          Enhance your app with AI-driven personalized UI, seamlessly integrated
          with your data stack for a tailored user experience
        </p>
      </div>
      {/* <div className="md:hidden">
        <AppCard />
      </div> */}
      { }
     <NewAiDriven/>
      { }
      <div className="product-map hidden  md:flex items-center justify-center flex-col p-10">
        <AppCard />
        <div className="relative">
          <img src={logoWithLine} alt="logoWithLine" />
          <div>
            <div className="menuItem top-[38%] left-[-42%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none">
                <path
                  d="M14.5003 2H2.50033C1.76699 2 1.16699 2.6 1.16699 3.33333V11.3333C1.16699 12.0667 1.76699 12.6667 2.50033 12.6667H5.83366V14H11.167V12.6667H14.5003C15.2337 12.6667 15.827 12.0667 15.827 11.3333L15.8337 3.33333C15.8337 2.6 15.2337 2 14.5003 2ZM14.5003 11.3333H2.50033V3.33333H14.5003V11.3333ZM13.167 5.33333H5.83366V6.66667H13.167V5.33333ZM13.167 8H5.83366V9.33333H13.167V8ZM5.16699 5.33333H3.83366V6.66667H5.16699V5.33333ZM5.16699 8H3.83366V9.33333H5.16699V8Z"
                  fill="white"></path>
              </svg>
              AI Segmentation
            </div>
            <div className="menuItem top-[38%] right-[-42%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none">
                <path
                  d="M13.1667 2H3.83333C3.1 2 2.5 2.6 2.5 3.33333V12.6667C2.5 13.4 3.1 14 3.83333 14H13.1667C13.9 14 14.5 13.4 14.5 12.6667V3.33333C14.5 2.6 13.9 2 13.1667 2ZM13.1667 12.6667H3.83333V3.33333H13.1667V12.6667Z"
                  fill="white"></path>
              </svg>
              Decision Agents
            </div>
            <div className="menuItem top-[87%] left-[-35%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none">
                <path
                  d="M11.1663 7.33333V2H5.83301V6H1.83301V14H15.1663V7.33333H11.1663ZM7.16634 3.33333H9.83301V12.6667H7.16634V3.33333ZM3.16634 7.33333H5.83301V12.6667H3.16634V7.33333ZM13.833 12.6667H11.1663V8.66667H13.833V12.6667Z"
                  fill="white"></path>
              </svg>
              Analytics &amp; Insights
            </div>
            <div className="menuItem top-[87%] right-[-35%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M2.66634 3.99967H1.33301V13.333C1.33301 14.0663 1.93301 14.6663 2.66634 14.6663H11.9997V13.333H2.66634V3.99967ZM13.333 1.33301H5.33301C4.59967 1.33301 3.99967 1.93301 3.99967 2.66634V10.6663C3.99967 11.3997 4.59967 11.9997 5.33301 11.9997H13.333C14.0663 11.9997 14.6663 11.3997 14.6663 10.6663V2.66634C14.6663 1.93301 14.0663 1.33301 13.333 1.33301ZM13.333 10.6663H5.33301V2.66634H13.333V10.6663ZM6.66634 5.99967H11.9997V7.33301H6.66634V5.99967ZM6.66634 7.99967H9.33301V9.33301H6.66634V7.99967ZM6.66634 3.99967H11.9997V5.33301H6.66634V3.99967Z"
                  fill="white"></path>
              </svg>
              AI growth campaign
            </div>
          </div>
        </div>
        {}
        <div className="relative w-full flex align-middle items-center justify-center">
          <div className="absolute -top-[10px]">
            <img
              src="data:image/svg+xml,%3csvg%20width='984'%20height='174'%20viewBox='0%200%20984%20174'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M491.49%200V94.2075C491.49%20102.492%20484.774%20109.207%20476.49%20109.207H16C7.71573%20109.207%201%20115.923%201%20124.207V174'%20stroke='url(%23paint0_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M492.51%200V94.2075C492.51%20102.492%20499.226%20109.207%20507.51%20109.207H968C976.284%20109.207%20983%20115.923%20983%20124.207V174'%20stroke='url(%23paint1_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M330.371%20110.295V171.147'%20stroke='url(%23paint2_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M654.646%20110.295V171.147'%20stroke='url(%23paint3_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(-211.104%20182.557)%20rotate(-15.2854)%20scale(985.777%205132.35)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint1_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(1195.1%20182.557)%20rotate(-164.715)%20scale(985.777%205132.35)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint2_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(330.205%20171.147)%20rotate(-89.1183)%20scale(108.692%2031.165)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint3_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(654.48%20171.147)%20rotate(-89.1183)%20scale(108.692%2031.165)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e"
              alt=""
            />
          </div>
          <div className="compCont">
            <div className="compCard hoverBg">
              <div className="hoverredDiv h-full">
                <div className="relative mb-5 ">
                  <img
                    src={ai1}
                    alt=""
                    className="translate-y-[-7%] translate-x-[10%]"
                  />
                </div>
                <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4 absolute bottom-0">
                  Onboarding Components
                </p>
              </div>
            </div>
            <div className="compCard hoverBg">
              <div className="h-full hoverredDiv">
                <div className="relative mb-5 ">
                  <img
                    src={ai2}
                    alt=""
                    className="translate-y-[-20%] translate-x-[10%]"
                  />
                </div>
                <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4 absolute bottom-0">
                  User Data Collection
                </p>
              </div>
            </div>
            <div className="compCard hoverBg">
              <div className="h-full hoverredDiv">
                <div className="relative mb-5">
                  <img
                    src={ai3}
                    alt=""
                    className="translate-y-[-5%] translate-x-[10%]"
                  />
                </div>
                <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4 absolute bottom-0">
                  Dynamic Enagagement
                </p>
              </div>
            </div>
            <div className="compCard hoverBg">
              <div className="h-full hoverredDiv">
                <div className="relative mb-6">
                  <img
                    src={ai4}
                    alt=""
                    className="translate-y-[-7%] translate-x-[10%]"
                  />
                </div>
                <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4 absolute bottom-0">
                  Personalized Ui offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDrivenSection;
