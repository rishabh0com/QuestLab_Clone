import React from "react";
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import logo from "../assets/whiteLogo.svg";

const Navbar = () => {
  const { isOpen, toggleNav } = useContext(NavContext);
  const style = { display: isOpen ? "none" : "block" };

  const screenWidth = window.innerWidth;
  return (
    <div style={style}>
      <nav className=" w-full px-5 lg:px-[100px] h-fit py-6 fixed flex justify-between top-0 z-50  rounded- text-white backdrop-blur-3xl">
        <div className="flex items-center w-1/3">
          <img src={logo} alt="" width={"22px"} />
          <span className="ml-1 font-extrabold text-2xl">Quest</span>
          <div className="ml-4 text-white font-bold text-xl"></div>
        </div>
        {screenWidth >= "1024" ? (
          <>
            <div className="flex items-center justify-center w-1/3  ">
              <ul className="flex space-x-6 text-white">
                <li>
                  <a href="#" className="hover:underline">
                    Playbook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div className="  flex justify-end w-1/3 ">
              <div className="ml-6 space-x-4 flex ">
                <button className=" bg-transparent border  px-4 py-2 rounded-md hover:bg-gray-200">
                  Get Started
                </button>
                <a
                  href="https://calendly.com/shubham-quest/chat"
                  target="_blank">
                  <button className="bg-gradient-to-l from-purple-600  to-blue-600 text-white px-4 py-2 rounded-md hover:shadow-md">
                    Book Demo
                  </button>
                </a>
              </div>
            </div>
          </>
        ) : (
          <h1
            onClick={() => toggleNav()}
            className="rotate-90 font-extrabold text-2xl cursor-pointer">
            |||
          </h1>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
