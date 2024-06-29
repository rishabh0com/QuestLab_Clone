import React from "react";
import { NavContext } from "../contexts/NavContext";
import { useContext } from "react";
import whiteLogo from "../assets/whiteLogo.svg";
import { Link } from "react-router-dom";

const NewNav = () => {
  const { isOpen, toggleNav, resOpen, toggleRes } = useContext(NavContext);
  // console.log(isOpen, toggleNav);
  const style = { display: isOpen ? "block" : "none" };
  const resStyle = {
    display: resOpen ? "block" : "none",
    animation: "0.3s ease-in-out fadeIn",
    background:
      "linear-gradient(rgb(22, 22, 22), rgb(22, 22, 22)) padding-box, linear-gradient(rgb(95, 95, 95) 0%, rgba(255, 255, 255, 0) 100%) border-box",
    border: " 2px solid rgba(0, 0, 0, 0)",
  };

  return (
    <div style={style}>
      <div className=" w-full lg:px-[100px] h-fit py-6 fixed flex align-middle top-0 z-50  bg-[#0D0D0D] rounded-b-2xl   backdrop-blur-3xl">
        <div
          className=" w-[1440px] backdrop-blur-sm nav-box  px-5 rounded-b-xl  m-auto  flex flex-col relative boxOpen"
          id="disabledClick">
          <div className="w-full  flex  self-center justify-between items-center pr-3 md:px-0">
            <a href="/">
              <div className="  flex align-middle  text-home-1 w-[224px]">
                <img
                  src={whiteLogo}
                  alt="Quest Labs logo"
                  className="mr-1 self-center w-[18.6px] h-[18.6px] cursor-pointer text-white"
                />
                <p className="text-white text-center font-gilroy font-bold text-[22px] leading-[24px]">
                  Quest
                </p>
              </div>
            </a>
            <div className="hidden  lg:flex gap-[22px]  justify-between items-center ">
              <div className="dropdown-container">
                <div className="text-white text-center font-medium text-sm leading-[20px] font-figtree">
                  <a href="/playbook">Playbook</a>
                </div>
              </div>
              <div>
                <div className="text-white text-center font-medium text-sm leading-[20px] font-figtree">
                  Resource
                </div>
                <div className="dropdown-content w-48">
                  <a
                    href="https://docs.questlabs.ai/getting-started/welcome-to-quest"
                    target="_blank">
                    Docs
                  </a>
                  <a href="https://questlabs.substack.com/" target="_blank">
                    Newsletter
                  </a>
                  <a
                    href="https://tinyurl.com/questfoundersclub"
                    target="_blank">
                    Join Quest Club
                  </a>
                  <a
                    href="https://www.figma.com/file/xXavvdxUG49BlXwBrYqxIJ/Quest-Product-UI-Components-Figma?type=design&amp;node-id=78-5870&amp;mode=design&amp;t=2SOaQ4blvqb7fq8s-0"
                    target="_blank">
                    UI Components Figma
                  </a>
                </div>
              </div>
              <div className="text-white text-center font-medium text-sm leading-[20px] font-figtree">
                <a href="/blog">Blogs</a>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <button className="p-[8px_12px] rounded-[4px]  text-white font-semibold text-sm leading-[20px] font-figtree border border-[#8C43EC] cursor-pointer">
                Get Started
              </button>
              <button
                style={{
                  background:
                    "linear-gradient(transparent, transparent) padding-box, linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843)) border-box",
                  border: "1px solid rgba(0, 0, 0, 0)",
                }}
                className=" p-[8px_12px] rounded-[4px]  text-white font-semibold text-sm leading-[20px] font-figtree">
                Book Demo
              </button>
            </div>
            <button
              className="rounded-full font-semibold text-white flex lg:hidden"
              onClick={toggleNav}
              id="openPopupButton">
              <i className="ri-close-large-fill"></i>
            </button>
          </div>
          <div className="dropdown-contents flex-col justify-center gap-6 items-center menuOpen">
            <a
              style={{ display: "block" }}
              className="px-3 py-[6px] text-white w-full text-center"
              href="/playbook">
              Playbook
            </a>
            <div className="resourceContainer w-full">
              <div
                onClick={() => toggleRes()}
                className="px-3 py-[6px] text-white cursor-pointer w-full text-center relative flex justify-center items-center gap-2">
                <p>Resources</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div
                className="dropDownContainer w-full p-6 right-0 left-[calc(50%-96px)]  text-white rounded-2xl"
                style={resStyle}>
                <a
                  style={{ display: "block" }}
                  href="https://docs.questlabs.ai/getting-started/welcome-to-quest"
                  target="_blank">
                  Docs
                </a>
                <a
                  style={{ display: "block" }}
                  href="https://questlabs.substack.com/"
                  target="_blank">
                  Newsletter
                </a>
                <a
                  style={{ display: "block" }}
                  href="https://tinyurl.com/questfoundersclub"
                  target="_blank">
                  Join Quest Club
                </a>
                <a
                  style={{ display: "block" }}
                  href="https://www.figma.com/file/xXavvdxUG49BlXwBrYqxIJ/Quest-Product-UI-Components-Figma?type=design&amp;node-id=78-5870&amp;mode=design&amp;t=2SOaQ4blvqb7fq8s-0"
                  target="_blank">
                  UI Components Figma
                </a>
              </div>
            </div>
            <a
              style={{ display: "block" }}
              className="px-3 py-[6px] text-white w-full text-center"
              href="/blog">
              Blogs
            </a>
            <a href="https://calendly.com/shubham-quest/chat" target="_blank">
              <button
                className="bookDemo rounded-md py-2 px-4 text-white font-semibold w-full duration-300"
                style={{
                  background:
                    "linear-gradient(transparent, transparent) padding-box, linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843)) border-box",
                  border: "1px solid rgba(0, 0, 0, 0)",
                }}>
                Book Demo
              </button>
            </a>
            <Link to="/login">
              <button className="bg-transparent border-1 mt-2 text-white border-purple-600  px-4 py-2 rounded-md hover:bg-gray-200 w-full">
                {" "}
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNav;
