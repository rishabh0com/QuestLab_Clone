import "./login.css";
import logo from "../assets/questFullLogo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewNav from "../components/NewNav";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Link to="/">
        <div className="lg:hidden m-4 image w-[135px] ">
          <img src={logo} alt="" />
        </div>
      </Link>

      <div className="flex justify-center h-[100vh]  text-white max-w-[100vw]">
        <div className="left hidden lg:block  w-[36%] h-full px-5 py-16">
          <Link to="/">
            <div className="image w-[135px]">
              <img src={logo} alt="" />
            </div>
          </Link>{" "}
          <p className="text-[2rem] lg:text-[3rem] font-light break-words leading-snug mb-8 mt-20">
            Supercharge your User Experience
          </p>
          <p>
            Start your journey to unlocking product-driven growth with Quest 💫
          </p>
          <div className="mt-20 lg:mt-40">
            <p>
              By registering you agree to our{" "}
              <a
                className="text-[12px] text-white font-medium underline"
                href="https://fantasy-straw-747.notion.site/Terms-and-Conditions-8c70d24a63a6419781475ca8325f2c60"
                target="_blank">
                Terms of use
              </a>{" "}
              and{" "}
              <a
                className="text-[12px] text-white font-medium underline"
                href="https://fantasy-straw-747.notion.site/Privacy-Policy-35181181657242afbdd2a9af69e37dfe"
                target="_blank">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="right lg:w-[64%] h-full p-10 ml-10 lg:p-36 font-medium">
          <p className="text-[2.5rem]">Login to Quest</p>
          <div className="mt-10">
            <p className="text-[14px] text-[#8a8a8a]">Email Address</p>
            <div className="input mt-3  w-[22rem] border rounded-lg py-[.6rem] px-3  flex justify-between items-center">
              <input
                type="text"
                placeholder="example@gmail.com "
                className="bg-transparent  outline-none"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M5.17312 2.6665H10.8282C11.3648 2.6665 11.8077 2.66649 12.1685 2.69597C12.5433 2.72658 12.8877 2.79229 13.2113 2.95715C13.7131 3.21282 14.121 3.62076 14.3767 4.12253C14.5415 4.44609 14.6072 4.79056 14.6379 5.16529C14.6673 5.52608 14.6673 5.96898 14.6673 6.50562V9.49405C14.6673 10.0307 14.6673 10.4736 14.6379 10.8344C14.6072 11.2091 14.5415 11.5536 14.3767 11.8771C14.121 12.3789 13.7131 12.7869 13.2113 13.0425C12.8877 13.2074 12.5433 13.2731 12.1685 13.3037C11.8077 13.3332 11.3648 13.3332 10.8282 13.3332H5.17313C4.63648 13.3332 4.19357 13.3332 3.83277 13.3037C3.45804 13.2731 3.11357 13.2074 2.79001 13.0425C2.28824 12.7869 1.8803 12.3789 1.62463 11.8771C1.45977 11.5536 1.39406 11.2091 1.36345 10.8344C1.33397 10.4736 1.33398 10.0307 1.33398 9.49404V6.50564C1.33398 5.96899 1.33397 5.52608 1.36345 5.16529C1.39406 4.79056 1.45977 4.44609 1.62463 4.12253C1.8803 3.62076 2.28824 3.21282 2.79001 2.95715C3.11357 2.79229 3.45804 2.72658 3.83277 2.69597C4.19356 2.66649 4.63647 2.6665 5.17312 2.6665ZM3.94134 4.02487C3.64907 4.04875 3.4996 4.09204 3.39533 4.14516C3.14445 4.27299 2.94047 4.47697 2.81264 4.72785C2.75952 4.83212 2.71623 4.98159 2.69235 5.27386C2.66784 5.57392 2.66732 5.96212 2.66732 6.53317V9.4665C2.66732 10.0376 2.66784 10.4258 2.69235 10.7258C2.71623 11.0181 2.75952 11.1676 2.81264 11.2718C2.94047 11.5227 3.14445 11.7267 3.39533 11.8545C3.4996 11.9076 3.64907 11.9509 3.94134 11.9748C4.2414 11.9993 4.6296 11.9998 5.20065 11.9998H10.8007C11.3717 11.9998 11.7599 11.9993 12.06 11.9748C12.3522 11.9509 12.5017 11.9076 12.606 11.8545C12.8569 11.7267 13.0608 11.5227 13.1887 11.2718C13.2418 11.1676 13.2851 11.0181 13.3089 10.7258C13.3335 10.4258 13.334 10.0376 13.334 9.4665V6.53317C13.334 5.96212 13.3335 5.57392 13.3089 5.27386C13.2851 4.98159 13.2418 4.83212 13.1887 4.72785C13.0608 4.47697 12.8569 4.27299 12.606 4.14516C12.5017 4.09204 12.3522 4.04875 12.06 4.02487C11.7599 4.00036 11.3717 3.99984 10.8007 3.99984H5.20065C4.6296 3.99984 4.2414 4.00036 3.94134 4.02487Z"
                  fill="#8A8A8A"></path>
                <path
                  d="M4.11698 5.6231C4.32526 5.31948 4.74024 5.2422 5.04386 5.45048L7.62294 7.21973C7.85019 7.37562 8.14994 7.37562 8.37719 7.21973L10.9563 5.45048C11.2599 5.2422 11.6749 5.31948 11.8831 5.6231C12.0914 5.92672 12.0141 6.34169 11.7105 6.54997L9.13144 8.31922C8.44969 8.7869 7.55044 8.7869 6.86869 8.31922L4.2896 6.54997C3.98599 6.34169 3.9087 5.92672 4.11698 5.6231Z"
                  fill="#8A8A8A"></path>
              </svg>
            </div>
            <div className="google w-[22rem] bg-neutral-800 rounded-lg py-3 px-3 mt-5 flex justify-between items-center">
              <div>
                <p className="text-[.9rem]">Login with Google</p>
                <p className="text-[12px] text-[#8a8a8a]">
                  Use your Google account to sign in
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M14.6494 2.64408C16.3403 2.00565 17.9942 3.65958 17.3558 5.35049L13.3776 15.8867C12.5291 18.1339 9.30862 18.008 8.63812 15.7015L7.78853 12.7789C7.70892 12.5051 7.4948 12.2909 7.22094 12.2113L4.29832 11.3617C1.9918 10.6912 1.86595 7.47071 4.1131 6.62225L14.6494 2.64408ZM15.7965 4.76177C15.9283 4.41286 15.587 4.07156 15.2381 4.20331L4.70182 8.18148C3.95276 8.4643 3.99472 9.5378 4.76356 9.7613L7.68618 10.6109C8.50775 10.8497 9.15012 11.4921 9.38895 12.3137L10.2385 15.2363C10.462 16.0051 11.5355 16.047 11.8184 15.298L15.7965 4.76177Z"
                  fill="#8A8A8A"></path>
              </svg>
            </div>
          </div>
          <button className="w-[5rem] px-3 py-2 mt-5 rounded-lg bg-gradient-to-l border-none from-indigo-600 to-purple-600 to  ">
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
