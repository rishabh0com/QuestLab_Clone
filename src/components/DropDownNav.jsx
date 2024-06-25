const DropDownNav = () => {
  return (
    <div className="dropdown-contents flex-col justify-center gap-6 items-center menuOpen">
      <a class="px-3 py-[6px] text-white w-full text-center block" href="/playbook">
        Playbook
      </a>
      <div className="dropdown-container w-full">
        <div className="px-3 py-[6px] text-white cursor-pointer w-full text-center relative flex justify-center items-center gap-2">
          <p>
            Resource <i class="ri-arrow-drop-down-line"></i>
          </p>
        </div>
      </div>
      <a class="px-3 py-[6px] text-white w-full text-center block" href="/blog">
        Blogs
      </a>
      <button class="rounded-md py-3 px-5 text-white font-semibold w-full duration-300 bg-gradient-to-l from-blue-600 via-purple-600 to-purple-600 ">
        Book Demo
      </button>
    </div>
  );
};

export default DropDownNav;
