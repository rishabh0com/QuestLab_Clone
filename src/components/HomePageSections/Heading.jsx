import './heading.css';

const Heading = () => {
    return (
      <div className="heading-container">
        <h1 className=" text-[42px] lg:text-[64px] text-[#FFF] text-center leading-[54px] lg:leading-[72px] font-semibold font-figtree w-[3 58px] md:w-[650px] lg:w-[940px] m-auto ">
          Transform Your Product with Intelligent In-App Experiences
        </h1>
        <p className="text-[16px] md:text-lg text-center text-white leading-[26px] mg:leading-7 w-[350px] md:w-[618px] m-auto mt-7 ">
          Empower growth & Marketing Teams to Boost Engagement and Conversion
          10x faster without data or engineering team
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="book-demo flex  lg:w-[405px]   my-5 py-3 pr-3 pl-[16px] justify-between items-center rounded-xl border backdrop-blur-sm border-gray-600">
            <input
              className="bg-transparent focus:outline-none text-[15px] "
              type="text"
              placeholder="Enter your email address"
            />
            <button className="py-[5px] px-2 text-[15px] text-white text-center font-semibold sm:text-sm leading-[10px] font-figtree rounded-[4px] border border-[#8C43EC] cursor-pointer">
              Book Demo
            </button>
          </div>
        </div>
        <p className="heading-footer">No credit card required</p>
      </div>
    );
};

export default Heading;