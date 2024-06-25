import React from "react";

const Navbar = () => {
    const screenWidth = window.innerWidth;
    return (
        <nav className=" w-full px-5 lg:px-[100px] h-fit py-6 fixed flex justify-between top-0 z-50  rounded- text-white backdrop-blur-3xl">
            <div className="flex items-center w-1/3">
                {/* <img src="your-logo-path" alt="Logo" className="h-8" /> */}
                <svg className="h-8" width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='Frame 578'><g id='Vector'><path d='M19.3503 0.666016V6.88824L13.128 13.1105V6.88824H6.90582V10.9962C6.90582 12.1642 7.85211 13.1105 9.02008 13.1105H13.128L6.90582 19.3327C3.46933 19.3327 0.683594 16.5469 0.683594 13.1105V0.666016H19.3503Z' fill='white' /><path d='M19.3503 13.1105L13.128 13.1105L13.128 19.3327H19.3503V13.1105Z' fill='white' /></g></g></svg>
                <span className="ml-1 font-extrabold text-2xl">Quest</span>
                <div className="ml-4 text-white font-bold text-xl">
                    {/* Your website name or title */}
                </div>
            </div>
            {screenWidth >= "1024" ? <>
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
                        <button className="bg-gradient-to-l from-purple-600  to-blue-600 text-white px-4 py-2 rounded-md hover:shadow-md">
                            Book Demo
                        </button>
                    </div>
                </div>


            </> : <h1 className="rotate-90 font-extrabold text-2xl">|||</h1>}
        </nav>
    );
};

export default Navbar;
