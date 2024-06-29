import React from "react";
import "./appCard.css"
import aiImage from "../../assets/aiDrivenImage/newAiImage.svg"
import ai1 from "../../assets/aiDrivenImage/ai1.svg";
import ai2 from "../../assets/aiDrivenImage/ai2.svg";
import ai3 from "../../assets/aiDrivenImage/ai3.svg";
import ai4 from "../../assets/aiDrivenImage/ai4.svg";

import AppCard from "./AppCard";


const NewAiDriven = () => {
  return (
      <div className="block max-w-[100%] md:hidden ">
          <AppCard/>
      <div className="">
        <div className="flex gap-[18px] ml-[70px]">
          <div
            className="h-[80px] w-[2px]"
            style={{
              background:
                "radial-gradient(2454.02% 125.52% at 0% 63.59%, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 49.65%, rgba(255, 255, 255, 0) 100%)",
            }}></div>
          <div
            className="h-[70px] w-[2px]"
            style={{
              background:
                "radial-gradient(2454.02% 125.52% at 0% 63.59%, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 49.65%, rgba(255, 255, 255, 0) 100%)",
            }}></div>
          <div
            className="h-[80px] w-[2px]"
            style={{
              background:
                "radial-gradient(2454.02% 125.52% at 0% 63.59%, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 49.65%, rgba(255, 255, 255, 0) 100%)",
            }}></div>
        </div>
        <div className="relative w-full">
          <div className="ml-[35px] -mt-3 relative z-10">
            <img src={aiImage} alt="" />
          </div>
          <div>
            <div className="absolute top-[30px] left-[95px]">
            </div>
            <div className="absolute top-[75px] left-[128px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="116"
                height="8"
                viewBox="0 0 116 8"
                fill="none">
                <path
                  opacity="0.5"
                  d="M107.5 4.00001C107.5 6.20915 109.291 8.00001 111.5 8.00001C113.709 8.00001 115.5 6.20915 115.5 4.00001C115.5 1.79087 113.709 9.89706e-06 111.5 9.70393e-06C109.291 9.5108e-06 107.5 1.79087 107.5 4.00001ZM0.5 4.75L111.5 4.75001L111.5 3.25001L0.5 3.25L0.5 4.75Z"
                  fill="url(#paint0_radial_4705_8808)"></path>
                <defs>
                  <radialGradient
                    id="paint0_radial_4705_8808"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.500004 4.63594) rotate(-0.487247) scale(167.2 29.3329)">
                    <stop stopColor="white" stopOpacity="0"></stop>
                    <stop offset="0.496531" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute top-[95px] left-[128px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="116"
                height="32"
                viewBox="0 0 116 32"
                fill="none">
                <path
                  opacity="0.5"
                  d="M116 28C116 30.2091 114.209 32 112 32C109.791 32 108 30.2091 108 28C108 25.7909 109.791 24 112 24C114.209 24 116 25.7909 116 28ZM59.0448 28L59.0448 28.75L58.8789 28.75L58.7284 28.68L59.0448 28ZM112 28.75L59.0448 28.75L59.0448 27.25L112 27.25L112 28.75ZM58.7284 28.68L0.683679 1.68004L1.31632 0.31998L59.3611 27.32L58.7284 28.68Z"
                  fill="url(#paint0_radial_4705_8801)"></path>
                <defs>
                  <radialGradient
                    id="paint0_radial_4705_8801"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(181.763 50.9065) rotate(-163.292) scale(247.402 1133.82)">
                    <stop stopColor="white" stopOpacity="0"></stop>
                    <stop offset="0.496531" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute top-[95px] left-[115px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="129"
                height="75"
                viewBox="0 0 129 75"
                fill="none">
                <path
                  opacity="0.5"
                  d="M129 70.5C129 72.7091 127.209 74.5 125 74.5C122.791 74.5 121 72.7091 121 70.5C121 68.2909 122.791 66.5 125 66.5C127.209 66.5 129 68.2909 129 70.5ZM74.0001 70.5L74.0001 71.25L73.7017 71.25L73.4849 71.045L74.0001 70.5ZM125 71.25L74.0001 71.25L74.0001 69.75L125 69.75L125 71.25ZM73.4849 71.045L0.485011 2.04506L1.51539 0.954958L74.5153 69.9549L73.4849 71.045Z"
                  fill="url(#paint0_radial_4705_8800)"></path>
                <defs>
                  <radialGradient
                    id="paint0_radial_4705_8800"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(155.416 101.845) rotate(-159.31) scale(253.507 1394.56)">
                    <stop stopColor="white" stopOpacity="0"></stop>
                    <stop offset="0.496531" stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="menuItem top-[15px] left-[240px]">
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
            <div className="menuItem top-[60px] left-[240px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none">
                <path
                  d="M7.83333 8.66667H5.16667V11.3333H7.83333V8.66667Z"
                  fill="white"></path>
                <path
                  d="M11.8333 8.66667H9.16667V11.3333H11.8333V8.66667Z"
                  fill="white"></path>
                <path
                  d="M13.1667 2H3.83333C3.1 2 2.5 2.6 2.5 3.33333V12.6667C2.5 13.4 3.1 14 3.83333 14H13.1667C13.9 14 14.5 13.4 14.5 12.6667V3.33333C14.5 2.6 13.9 2 13.1667 2ZM13.1667 12.6667H3.83333V3.33333H13.1667V12.6667Z"
                  fill="white"></path>
                <path
                  d="M7.83333 4.66667H5.16667V7.33333H7.83333V4.66667Z"
                  fill="white"></path>
                <path
                  d="M11.8333 4.66667H9.16667V7.33333H11.8333V4.66667Z"
                  fill="white"></path>
              </svg>
              Decision Agents
            </div>
            <div className="menuItem top-[105px] left-[240px]">
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
            <div className="menuItem top-[150px] left-[240px]">
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
        <div className="relative ml-[0px] h-[1500px]">
          <div className="absolute top-0 left-0">
            <img src="" alt="" className="h-[1250px]" />
          </div>
          <div className="absolute top-[100px]">
            <div
              className="hoverredDiv-bg absolute left-10"
              style={{ top: "0px" }}>
              <div className="border-2 w-[288px] h-[310px] overflow-hidden rounded-2xl border-[#535353] flex flex-col justify-end relative hoverredDiv">
                <img src={ai1} alt="" className="absolute left-6 -top-2" />
                <div className="flex items-center ml-4 mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M9.99199 1.66699C5.39199 1.66699 1.66699 5.40033 1.66699 10.0003C1.66699 14.6003 5.39199 18.3337 9.99199 18.3337C14.6003 18.3337 18.3337 14.6003 18.3337 10.0003C18.3337 5.40033 14.6003 1.66699 9.99199 1.66699ZM7.08366 6.66699C7.77533 6.66699 8.33366 7.22533 8.33366 7.91699C8.33366 8.60866 7.77533 9.16699 7.08366 9.16699C6.39199 9.16699 5.83366 8.60866 5.83366 7.91699C5.83366 7.22533 6.39199 6.66699 7.08366 6.66699ZM10.0003 15.0003C8.10033 15.0003 6.48366 13.617 5.83366 11.667H14.167C13.517 13.617 11.9003 15.0003 10.0003 15.0003ZM12.917 9.16699C12.2253 9.16699 11.667 8.60866 11.667 7.91699C11.667 7.22533 12.2253 6.66699 12.917 6.66699C13.6087 6.66699 14.167 7.22533 14.167 7.91699C14.167 8.60866 13.6087 9.16699 12.917 9.16699Z"
                      fill="white"></path>
                  </svg>
                  <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4">
                    Onboarding Components
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hoverredDiv-bg absolute left-10"
              style={{ top: "330px" }}>
              <div className="border-2 w-[288px] h-[310px] overflow-hidden rounded-2xl border-[#535353] flex flex-col justify-end relative hoverredDiv">
                <img src={ai2} alt="" className="absolute -top-24 left-6" />
                <div className="flex items-center ml-4 mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none">
                    <path
                      d="M16.667 3H3.33366C2.41699 3 1.66699 3.75 1.66699 4.66667V13.8333C1.66699 14.75 2.41699 15.5 3.33366 15.5H8.33366L6.66699 17.1667V18H13.3337V17.1667L11.667 15.5H16.667C17.5837 15.5 18.3337 14.75 18.3337 13.8333V4.66667C18.3337 3.75 17.5837 3 16.667 3Z"
                      fill="white"></path>
                  </svg>
                  <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4">
                    User Data Collection
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hoverredDiv-bg absolute left-10"
              style={{ top: "660px" }}>
              <div className="border-2 w-[288px] h-[310px] overflow-hidden rounded-2xl border-[#535353] flex flex-col justify-end relative hoverredDiv">
                <img src={ai3} alt="" className="absolute -top-4 left-6" />
                <div className="flex items-center ml-4 mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M5.26634 10.8413C6.06634 10.858 6.80801 11.258 7.30801 11.958C7.91634 12.8163 8.92467 13.333 9.99967 13.333C11.0747 13.333 12.083 12.8163 12.6913 11.9497C13.1913 11.2497 13.933 10.8497 14.733 10.833C14.133 9.81634 11.733 9.16634 9.99967 9.16634C8.27467 9.16634 5.86634 9.81634 5.26634 10.8413Z"
                      fill="white"></path>
                    <path
                      d="M3.33301 10.833C4.71634 10.833 5.83301 9.71634 5.83301 8.33301C5.83301 6.94967 4.71634 5.83301 3.33301 5.83301C1.94967 5.83301 0.833008 6.94967 0.833008 8.33301C0.833008 9.71634 1.94967 10.833 3.33301 10.833Z"
                      fill="white"></path>
                    <path
                      d="M16.6663 10.833C18.0497 10.833 19.1663 9.71634 19.1663 8.33301C19.1663 6.94967 18.0497 5.83301 16.6663 5.83301C15.283 5.83301 14.1663 6.94967 14.1663 8.33301C14.1663 9.71634 15.283 10.833 16.6663 10.833Z"
                      fill="white"></path>
                    <path
                      d="M9.99967 8.33301C11.383 8.33301 12.4997 7.21634 12.4997 5.83301C12.4997 4.44967 11.383 3.33301 9.99967 3.33301C8.61634 3.33301 7.49967 4.44967 7.49967 5.83301C7.49967 7.21634 8.61634 8.33301 9.99967 8.33301Z"
                      fill="white"></path>
                    <path
                      d="M17.4997 11.6663H14.7747C14.133 11.6663 13.6497 12.0413 13.3747 12.433C13.3413 12.483 12.2413 14.1663 9.99967 14.1663C8.80801 14.1663 7.47467 13.633 6.62467 12.433C6.29967 11.9747 5.79134 11.6663 5.22467 11.6663H2.49967C1.58301 11.6663 0.833008 12.4163 0.833008 13.333V16.6663H6.66634V14.783C7.62467 15.4497 8.78301 15.833 9.99967 15.833C11.2163 15.833 12.3747 15.4497 13.333 14.783V16.6663H19.1663V13.333C19.1663 12.4163 18.4163 11.6663 17.4997 11.6663Z"
                      fill="white"></path>
                  </svg>
                  <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4">
                    Dynamic Enagagement
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hoverredDiv-bg absolute left-10"
              style={{ top: "990px" }}>
              <div className="border-2 w-[288px] h-[310px] overflow-hidden rounded-2xl border-[#535353] flex flex-col justify-end relative hoverredDiv">
                <img src={ai4} alt="" className="absolute -top-6 left-6" />
                <div className="flex items-center ml-4 mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M9.58301 1.66699L4.99967 9.16699H14.1663L9.58301 1.66699Z"
                      fill="white"></path>
                    <path
                      d="M14.1663 18.3337C16.2374 18.3337 17.9163 16.6547 17.9163 14.5837C17.9163 12.5126 16.2374 10.8337 14.1663 10.8337C12.0953 10.8337 10.4163 12.5126 10.4163 14.5837C10.4163 16.6547 12.0953 18.3337 14.1663 18.3337Z"
                      fill="white"></path>
                    <path
                      d="M2.08301 11.2503H8.74967V17.917H2.08301V11.2503Z"
                      fill="white"></path>
                  </svg>
                  <p className="text-white text-[14px] font-normal leading-[20px] flex gap-2 p-4">
                    Personalized Ui offers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAiDriven;
