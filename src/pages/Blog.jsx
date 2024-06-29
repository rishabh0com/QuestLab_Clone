import img1 from "../assets/blog/one.jpg";
import img2 from "../assets/blog/two.jpg";
import img3 from "../assets/blog/three.jpg";
import img4 from "../assets/blog/four.jpg";
import img5 from "../assets/blog/five.jpg";
import img6 from "../assets/blog/six.jpg";
import Navbar from "../components/Navbar";
import NewNav from "../components/NewNav";
import BookACall from "../components/HomePageSections/BookACall";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <NewNav />
      <div className="px-4 md:px-[120px] pt-[100px] pb-14">
        <p className="flex items-center justify-center text-white text-[56px] font-semibold leading-[68px]">
          Blogs
        </p>
        <p className="max-w-[480px] text-center text-[#E0E0E0] text-lg font-normal leading-7 m-auto mt-4">
          Learn how to optimized your product's funnel by taking users from
          adoption to engagement to conversion
        </p>
        <div className="flex justify-center items-center mx-auto mt-5 rounded-lg border border-[#535353] bg-[#181818] max-w-[580px]  p-3">
          <input
            type="text"
            placeholder="Search for blogs"
            name=""
            id=""
            className="w-full  border-none outline-none bg-transparent text-white text-[16px] font-normal leading-[20px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M13.1291 11.8796H12.4707L12.2374 11.6546C13.0541 10.7046 13.5457 9.47122 13.5457 8.12956C13.5457 5.13789 11.1207 2.71289 8.12907 2.71289C5.1374 2.71289 2.7124 5.13789 2.7124 8.12956C2.7124 11.1212 5.1374 13.5462 8.12907 13.5462C9.47074 13.5462 10.7041 13.0546 11.6541 12.2379L11.8791 12.4712V13.1296L16.0457 17.2879L17.2874 16.0462L13.1291 11.8796ZM8.12907 11.8796C6.05407 11.8796 4.37907 10.2046 4.37907 8.12956C4.37907 6.05456 6.05407 4.37956 8.12907 4.37956C10.2041 4.37956 11.8791 6.05456 11.8791 8.12956C11.8791 10.2046 10.2041 11.8796 8.12907 11.8796Z"
              fill="#808080"></path>
          </svg>
        </div>
        <div className="mt-10 grid gap-6 cursor-pointer justify-center false grid-cols-[repeat(auto-fit,minmax(330px,1fr))]">
          <div className="rounded-3xl bg-[#202020] overflow-hidden">
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgrounPosition: "center center",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "32px 32px 0px",
              }}
              className="relative">
              <img src={img1} alt="" className="w-full rounded-2xl" />
              <img src="" alt="" className="w-full absolute bottom-0" />
            </div>
            <div className="p-8">
              <p className="text-white text-xl font-normal leading-[30px]">
                Build A Highly Converting Free Trial Marketing Strategy With
                Quest Labs
              </p>
              <p className="text-neutral-400 text-sm font-normal leading-tight">
                June 29, 2024
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#202020] overflow-hidden">
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgrounPosition: "center center",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "32px 32px 0px",
              }}
              className="relative">
              <img src={img2} alt="" className="w-full rounded-2xl" />
              <img src="" alt="" className="w-full absolute bottom-0" />
            </div>
            <div className="p-8">
              <p className="text-white text-xl font-normal leading-[30px]">
                Launch A Winning Referral Campaign With Quest Labs
              </p>
              <p className="text-neutral-400 text-sm font-normal leading-tight">
                June 27, 2024
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#202020] overflow-hidden">
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgrounPosition: "center center",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "32px 32px 0px",
              }}
              className="relative">
              <img src={img3} alt="" className="w-full rounded-2xl" />
              <img src="" alt="" className="w-full absolute bottom-0" />
            </div>
            <div className="p-8">
              <p className="text-white text-xl font-normal leading-[30px]">
                Quest’s 6 Expert Tips To Engage Customers In A Flash Sale
              </p>
              <p className="text-neutral-400 text-sm font-normal leading-tight">
                June 26, 2024
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#202020] overflow-hidden">
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgrounPosition: "center center",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "32px 32px 0px",
              }}
              className="relative">
              <img src={img4} alt="" className="w-full rounded-2xl" />
              <img src="" alt="" className="w-full absolute bottom-0" />
            </div>
            <div className="p-8">
              <p className="text-white text-xl font-normal leading-[30px]">
                Quest’s 12 Essential Strategies To Cut Down Shopping Cart
                Abandonment
              </p>
              <p className="text-neutral-400 text-sm font-normal leading-tight">
                June 18, 2024
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#202020] overflow-hidden">
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgrounPosition: "center center",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "32px 32px 0px",
              }}
              className="relative">
              <img src={img5} alt="" className="w-full rounded-2xl" />
              <img src="" alt="" className="w-full absolute bottom-0" />
            </div>
            <div className="p-8">
              <p className="text-white text-xl font-normal leading-[30px]">
                8 Simple Strategies To Improve Free-to-Paid Conversions
              </p>
              <p className="text-neutral-400 text-sm font-normal leading-tight">
                June 13, 2024
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#202020] overflow-hidden">
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgrounPosition: "center center",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "32px 32px 0px",
              }}
              className="relative">
              <img src={img6} alt="" className="w-full rounded-2xl" />
              <img src=" " alt="" className="w-full absolute bottom-0" />
            </div>
            <div className="p-8">
              <p className="text-white text-xl font-normal leading-[30px]">
                The Evolution of Customer Engagement from Traditional to
                AI-Driven Solutions
              </p>
              <p className="text-neutral-400 text-sm font-normal leading-tight">
                June 12, 2024
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            style={{
              background:
                "linear-gradient(transparent, transparent) padding-box, linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843)) border-box",
              border: "1px solid rgba(0, 0, 0, 0)",
            }}
            className="p-[8px_12px] rounded-[4px]  text-white font-semibold text-sm leading-[20px] font-figtree">
            View more Blogs
          </button>
        </div>
          </div>
          <BookACall />
          <Footer/>
    </>
  );
};

export default Blog;
