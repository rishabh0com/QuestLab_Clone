import "./navbar.css";
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import logo from "../assets/whiteLogo.svg";
import ResourceDD from "./ResourceDD";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, toggleNav } = useContext(NavContext);
  const style = { display: isOpen ? "none" : "block" };

  const screenWidth = window.innerWidth;
  return (
    <div style={style}>
      <nav className=" w-full px-5 lg:px-[100px] h-fit py-6 fixed flex justify-between top-0 z-50  rounded- text-white backdrop-blur-3xl">
        <Link className="flex items-center w-1/3 " to="/">
          <img src={logo} alt="" width={"22px"} />
          <span className="ml-1 font-extrabold text-2xl">Quest</span>
        </Link>
        <>
          <div className="hidden lg:flex items-center justify-center w-1/3">
            <ul className="flex space-x-6 text-white">
              <li>
                <Link to="/playbook" className="hover:underline">
                  Playbook
                </Link>
              </li>
              <li className="resource">
                Resources
                <ResourceDD />
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className=" hidden lg:flex justify-end w-1/3 ">
            <Link to="/login">
              <button
                style={{ border: "1px solid #8C43EC" }}
                className=" p-[8px_12px] rounded-[4px]  text-white font-semibold text-sm leading-[20px] font-figtree cursor-pointer">
                Get Started
              </button>
            </Link>
            <div className="ml-6  space-x-4 flex ">
              <a href="https://calendly.com/shubham-quest/chat" target="_blank">
                <button className="bg-gradient-to-l from-purple-600  to-blue-600 text-white px-4 py-2 rounded-md hover:shadow-md">
                  Book Demo
                </button>
              </a>
            </div>
          </div>
        </>

        <h1
          onClick={() => toggleNav()}
          className="lg:hidden rotate-90 font-extrabold text-2xl cursor-pointer">
          |||
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
