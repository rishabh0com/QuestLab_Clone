import React, { useEffect, useRef, useState } from "react";
import dynamicBg from "../assets/dynamicBg.svg";
import useImg1 from "../assets/dynamicImages/useCase1.svg";
import useImg2 from "../assets/dynamicImages/useCase2.svg";
import useImg3 from "../assets/dynamicImages/useCase3.svg";
import useImg4 from "../assets/dynamicImages/useCase4.svg";
import useImg5 from "../assets/dynamicImages/useCase5.svg";
import useImg6 from "../assets/dynamicImages/useCase6.svg";

const DynamicContent = () => {
  const useCaseImages = [useImg1, useImg2, useImg3, useImg4, useImg5, useImg6];
  const [dyBg, setDyBg] = useState(useCaseImages[0]);
  const i = useRef(0);
  const updateImg = () => {
    setDyBg(useCaseImages[i.current]);
    i.current += 1;
    if (i.current == useCaseImages.length) i.current = 0;
    console.log(i.current, useCaseImages[i.current]);
  };
  useEffect(() => {
    const interval = setInterval(updateImg, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="hidden bg-stone-300 lg:flex w-full max-w-[1200px] p-2 flex-col gap-4 align-start rounded-[16px] bg-[rgba(255, 255, 255, 0.08)] border border-[rgba(201,201,201,0.12)] m-auto transition-all duration-300"
      style={{
        background: "rgba(201, 201, 201, 0.12)",
        opacity: "1",
        transform: "none",
      }}>
      <div className="h-[100%] flex justify-between items-center overflow-auto rounded-lg bg-[#2C2C2C] useCase-header relative">
        <div className="w-[100%] p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ease-in-out border-b border-[#2C2C2C]">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <path
                d="M13.332 2H2.66536C1.93203 2 1.33203 2.6 1.33203 3.33333V10.6667C1.33203 11.4 1.93203 12 2.66536 12H6.66536L5.33203 13.3333V14H10.6654V13.3333L9.33203 12H13.332C14.0654 12 14.6654 11.4 14.6654 10.6667V3.33333C14.6654 2.6 14.0654 2 13.332 2Z"
                fill="#979797"
                fill-opacity="0.95"></path>
              <path
                d="M7.01892 12.3536L7.87247 11.5H6.66536H2.66536C2.20817 11.5 1.83203 11.1239 1.83203 10.6667V3.33333C1.83203 2.87614 2.20817 2.5 2.66536 2.5H13.332C13.7892 2.5 14.1654 2.87614 14.1654 3.33333V10.6667C14.1654 11.1239 13.7892 11.5 13.332 11.5H9.33203H8.12492L8.97848 12.3536L10.1249 13.5H5.87247L7.01892 12.3536Z"
                stroke="#979797"
                stroke-opacity="0.95"></path>
            </svg>
          </div>
          <p className="text-center leading-[20px] text-ellipsis overflow-hidden whitespace-nowrap  text-[#B0B0B0] font-medium">
            Onboarding
          </p>
        </div>
        <div className="w-[100%] p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ease-in-out border-b border-[#2C2C2C]">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none">
              <path
                d="M10.7751 6.83301H5.22486L8 2.29187L10.7751 6.83301ZM14.1667 11.6663C14.1667 13.0471 13.0474 14.1663 11.6667 14.1663C10.286 14.1663 9.16667 13.0471 9.16667 11.6663C9.16667 10.2856 10.286 9.16634 11.6667 9.16634C13.0474 9.16634 14.1667 10.2856 14.1667 11.6663ZM2.5 9.49967H6.83333V13.833H2.5V9.49967Z"
                fill="#979797"
                stroke="#979797"></path>
            </svg>
          </div>
          <p className="text-center leading-[20px] text-ellipsis overflow-hidden whitespace-nowrap  text-[#B0B0B0] font-medium">
            Quizzes
          </p>
        </div>
        <div className="w-[100%] p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ease-in-out border-b border-[#2C2C2C]">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none">
              <path
                d="M7.33594 13.3337H10.0026V2.66699H7.33594V13.3337ZM3.33594 13.3337H6.0026V8.00033H3.33594V13.3337ZM11.3359 6.00033V13.3337H14.0026V6.00033H11.3359Z"
                fill="#979797"></path>
            </svg>
          </div>
          <p className="text-center leading-[20px] text-ellipsis overflow-hidden whitespace-nowrap text-[#B0B0B0] font-medium">
            Challenges
          </p>
        </div>
        <div className="w-[100%] p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ease-in-out border-b border-[#2C2C2C]">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <path
                d="M14.272 7.71967L8.27203 1.71967C8.03203 1.47967 7.6987 1.33301 7.33203 1.33301H2.66536C1.93203 1.33301 1.33203 1.93301 1.33203 2.66634V7.33301C1.33203 7.69967 1.4787 8.03301 1.72536 8.27967L7.72536 14.2797C7.96536 14.5197 8.2987 14.6663 8.66536 14.6663C9.03203 14.6663 9.36537 14.5197 9.60536 14.273L14.272 9.60634C14.5187 9.36634 14.6654 9.03301 14.6654 8.66634C14.6654 8.29967 14.512 7.95967 14.272 7.71967ZM3.66536 4.66634C3.11203 4.66634 2.66536 4.21967 2.66536 3.66634C2.66536 3.11301 3.11203 2.66634 3.66536 2.66634C4.2187 2.66634 4.66536 3.11301 4.66536 3.66634C4.66536 4.21967 4.2187 4.66634 3.66536 4.66634Z"
                fill="#979797"></path>
            </svg>
          </div>
          <p className="text-center leading-[20px] text-ellipsis overflow-hidden whitespace-nowrap  text-[#B0B0B0] font-medium">
            Offers
          </p>
        </div>
        <div className="w-[100%] p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ease-in-out border-b border-white">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <path
                d="M7.99203 1.33301C4.31203 1.33301 1.33203 4.31967 1.33203 7.99967C1.33203 11.6797 4.31203 14.6663 7.99203 14.6663C11.6787 14.6663 14.6654 11.6797 14.6654 7.99967C14.6654 4.31967 11.6787 1.33301 7.99203 1.33301ZM5.66536 5.33301C6.2187 5.33301 6.66536 5.77967 6.66536 6.33301C6.66536 6.88634 6.2187 7.33301 5.66536 7.33301C5.11203 7.33301 4.66536 6.88634 4.66536 6.33301C4.66536 5.77967 5.11203 5.33301 5.66536 5.33301ZM7.9987 11.9997C6.4787 11.9997 5.18536 10.893 4.66536 9.33301H11.332C10.812 10.893 9.5187 11.9997 7.9987 11.9997ZM10.332 7.33301C9.7787 7.33301 9.33203 6.88634 9.33203 6.33301C9.33203 5.77967 9.7787 5.33301 10.332 5.33301C10.8854 5.33301 11.332 5.77967 11.332 6.33301C11.332 6.88634 10.8854 7.33301 10.332 7.33301Z"
                fill="#fff"></path>
            </svg>
          </div>
          <p className="text-center leading-[20px] text-ellipsis overflow-hidden whitespace-nowrap  text-white font-bold">
            Survey
          </p>
        </div>
        <div className="w-[100%] p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ease-in-out border-b border-[#2C2C2C]">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none">
              <path
                d="M9.09245 9.10348V14.4368H14.4258V9.10348H9.09245ZM2.42578 14.4368H7.75911V9.10348H2.42578V14.4368ZM2.42578 2.43681V7.77014H7.75911V2.43681H2.42578ZM11.5324 1.56348L7.75911 5.33014L11.5324 9.10348L15.3058 5.33014L11.5324 1.56348Z"
                fill="#979797"></path>
            </svg>
          </div>
          <p className="text-center leading-[20px] text-ellipsis overflow-hidden whitespace-nowrap  text-[#B0B0B0] font-medium">
            Personalized UI
          </p>
        </div>
      </div>
      <div
        className="flex bg-no-repeat bg-center px-10 rounded-lg overflow-hidden h-[550px]  useCase-body"
        style={{ background: `url(${dynamicBg})`, backgroundSize: "cover" }}>
        <div className="flex flex-col items-center justify-center w-[40%] h-[180px] lg:h-full">
          <div className="flex flex-col gap-3 px-[30px] align-start useCase-left-body">
            <p className="text-white text-[18px] font-[600] leading-[28px] font-figtree useCase-head">
              Personalized Offers
            </p>
            <p className="text-[#b9b9b9] text-[14px] font-normal leading-[20px] useCase-desc">
              Customizing offers based on user data can increase conversion
              rates and customer satisfaction.
            </p>
            <p className="text-[#b9b9b9] text-[14px] font-normal leading-[20px] useCase-desc">
              By leveraging insights such as purchase history, browsing
              behavior, and demographics, we can deliver targeted promotions and
              discounts that resonate with each user.
            </p>
            <p className="text-[#b9b9b9] text-[14px] font-normal leading-[20px] useCase-desc">
              This enhances the overall shopping experience and builds loyalty.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[60%] h-[350px] lg:h-full">
          <div className="w-full h-full flex justify-center items-center img-div relative">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center "></div>
            <img
              src={dyBg}
              className="w-full h-full lg:h-[calc(100%-100px)] "
              style={{
                transition: "opacity 300ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                opacity: "1",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContent;
