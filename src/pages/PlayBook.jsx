import React from "react";
import Navbar from "../components/Navbar";
import NewNav from "../components/NewNav";
import BookACall from "../components/HomePageSections/BookACall";
import Footer from "../components/Footer";

const PlayBook = () => {
  return (
      <>
          <Navbar />
          <NewNav/>
      <div className="pt-[90px]  pb-[80px]  px-6 md:px-12 m-auto">
        <div className=" mt-[80px]">
          <p className="text-white text-center font-figtree text-[42px] lg:text-[64px] font-semibold leading-[48px] lg:leading-[72px] tracking-[-1.12px] max-w-[700px] m-auto">
            Quest Product Activation Playbook
          </p>
          <p className="text-neutral-400 text-lg text-center font-figtree text-[base] font-normal leading-5 lg:leading-7 mt-4 max-w-[484px] m-auto">
            Learn how to optimized your product's funnel by taking users from
            adoption to engagement to conversion
          </p>
        </div>
        <div className="max-w-[580px] mt-4 m-auto ">
          <form
            className="w-full rounded-2xl flex flex-col items-start gap-[20px] p-6 self-stretch text-[#979797] m-auto"
            style={{
              background:
                "linear-gradient(rgb(32, 32, 32), rgb(32, 32, 32)) padding-box, linear-gradient(60deg, rgba(201, 201, 201, 0.5) 0%, rgba(201, 201, 201, 0.12) 45%, rgb(29, 29, 29) 100%) border-box",
              border: "1px solid rgba(0, 0, 0, 0)",
            }}>
            <div className="flex items-center gap-6 w-full">
              <div className=" flex flex-col w-full gap-1  ">
                <div className="flex gap-1">
                  <p className="font-figtree text-sm font-medium not-italic leading-[16px]">
                    Full Name*
                  </p>
                </div>
                <div className="flex p-3 bg-[#181818] border rounded-lg border-[#3E3E3E]">
                  <input
                    type="text"
                    placeholder="eg. Shubham Nigam"
                    name="full_name"
                    id=""
                    className="text-[12px]  w-full outline-none text-white  bg-[#181818]"
                    value=""
                  />
                </div>
              </div>
              <div className=" flex flex-col w-full gap-1 ">
                <div className="flex gap-1">
                  <p className="font-figtree text-sm font-medium not-italic leading-[16px]">
                    Email address*
                  </p>
                </div>
                <div className="flex text-[12px] p-3 bg-[#181818] border rounded-lg border-[#3E3E3E]">
                  <input
                    type="text"
                    placeholder="example@company.com"
                    name="email"
                    id=""
                    className=" text-[12px] w-full outline-none  text-white bg-[#181818]"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full">
              <div className=" flex flex-col w-full gap-1 ">
                <div className="flex gap-1">
                  <p className="font-figtree text-sm font-medium not-italic leading-[16px]">
                    Company Name*
                  </p>
                </div>
                <div className="flex p-3 bg-[#181818] border border-[#3E3E3E] rounded-lg">
                  <input
                    type="text"
                    placeholder="eg. Quest Labs"
                    name="company_name"
                    id=""
                    className="text-[12px] bg-[#181818] w-full outline-none  text-white"
                    value=""
                  />
                </div>
              </div>
              <div className=" flex flex-col w-full gap-1 ">
                <div className="flex gap-1">
                  <p className="font-figtree text-sm font-medium not-italic leading-[16px]">
                    Job Title*
                  </p>
                </div>
                <div className="flex p-3 bg-[#181818] border border-[#3E3E3E] rounded-lg">
                  <input
                    type="text"
                    placeholder="eg. CEO"
                    name="job_title"
                    id=""
                    className="text-[12px] bg-[#181818] w-full outline-none  text-white"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col w-full gap-1 ">
              <div className="flex gap-1">
                <p className="font-figtree text-sm font-medium not-italic leading-[16px]">
                  How did you hear about the Quest?*
                </p>
              </div>
              <div className="flex p-3 bg-[#181818] border border-[#3E3E3E] rounded-lg">
                <input
                  type="text"
                  placeholder="eg. From Linkedin"
                  name="where_to_hear"
                  id=""
                  className="text-[12px] bg-[#181818] w-full outline-none  text-white"
                  value=""
                />
              </div>
            </div>
            <div className=" flex flex-col w-full gap-1 ">
              <div className="flex gap-1">
                <p className="font-figtree text-sm font-medium not-italic leading-[16px]">
                  What Use Cases are you looking for?*
                </p>
              </div>
              <div className="flex p-3 bg-[#181818] border border-[#3E3E3E] rounded-lg">
                <input
                  type="text"
                  placeholder="eg. Growth in User Engagement"
                  name="use_cases"
                  id=""
                  className="text-[12px]  bg-[#181818] w-full outline-none  text-white"
                  value=""
                />
              </div>
            </div>
            <div className=" w-full   flex justify-end">
              <button className="py-2 px-3 w-full text-white font-figtree text-[14px] font-semibold  leading-20px bg-gradient-to-r from-[#9035FF] to-[#6144FF] flex self-center justify-center rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                Submit
              </button>
            </div>
          </form>
        </div>
          </div>
          <BookACall />
          <Footer/>
    </>
  );
};

export default PlayBook;
