import img1 from "../../assets/mainCardIcons/oneI.svg";
import img2 from "../../assets/mainCardIcons/twoI.svg";
import img3 from "../../assets/mainCardIcons/threeI.svg";
import img4 from "../../assets/mainCardIcons/fourI.svg";
import img5 from "../../assets/mainCardIcons/fiveI.svg";
import img6 from "../../assets/mainCardIcons/sixI.svg";

const MainCards = () => {
  return (
    <div
      className="py-10 md:py-20 px-4 md:px-20"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}>
      <div className=" w-full max-w-[1200px] m-auto ">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}>
          <div className="p-6 border border-home-4 rounded-3xl relative overflow-hidden text-center bg-[#151515]">
            <img className="w-12 relative z-10 m-auto" src={img1} alt="" />
            <p className="text-white text-2xl mt-6 relative z-10">
              AI Personalization
            </p>
            <p className=" text-[#939393] text-sm lg:text-[16px] mt-3 relative z-10">
              AI-driven personalization enhances user engagement with unique
              experiences.
            </p>
            <div
              className="w-[200%] h-80 bg-[#a1aee505] -rotate-[60deg] rounded-lg absolute top-1/2 -right-2/3 z-0"
              style={{
                opacity: "1",
                transform: "rotate(-60deg) translateZ(0px)",
              }}></div>
          </div>
          <div className="p-6 border border-home-4 rounded-3xl relative overflow-hidden text-center bg-[#151515]">
            <img className="w-12 relative z-10 m-auto" src={img2} alt="" />
            <p className="text-white text-2xl mt-6 relative z-10">
              Real-Time Insights
            </p>
            <p className=" text-[#939393] text-sm lg:text-[16px] mt-3 relative z-10">
              Utilize our analytics for instant insights on user behavior and
              app performance.{" "}
            </p>
            <div
              className="w-[200%] h-80 bg-[#a1aee505] -rotate-[60deg] rounded-lg absolute top-1/2 -right-2/3 z-0"
              style={{
                opacity: "1",
                transform: "rotate(-60deg) translateZ(0px)",
              }}></div>
          </div>
          <div className="p-6 border border-home-4 rounded-3xl relative overflow-hidden text-center bg-[#151515]">
            <img className="w-12 relative z-10 m-auto" src={img3} alt="" />
            <p className="text-white text-2xl mt-6 relative z-10">
              Seamless SDK Integration{" "}
            </p>
            <p className=" text-[#939393] text-sm lg:text-[16px] mt-3 relative z-10">
              Effortlessly integrate with our robust, cross-platform SDKs for
              maximum compatibility.{" "}
            </p>
            <div
              className="w-[200%] h-80 bg-[#a1aee505] -rotate-[60deg] rounded-lg absolute top-1/2 -right-2/3 z-0"
              style={{
                opacity: "1",
                transform: "rotate(-60deg) translateZ(0px)",
              }}></div>
          </div>
          <div className="p-6 border border-home-4 rounded-3xl relative overflow-hidden text-center bg-[#151515]">
            <img className="w-12 relative z-10 m-auto" src={img4} alt="" />
            <p className="text-white text-2xl mt-6 relative z-10">
              Dynamic Content
            </p>
            <p className=" text-[#939393] text-sm lg:text-[16px] mt-3 relative z-10">
              Keep content engaging with AI-powered optimization, adapting to
              user preferences.
            </p>
            <div
              className="w-[200%] h-80 bg-[#a1aee505] -rotate-[60deg] rounded-lg absolute top-1/2 -right-2/3 z-0"
              style={{
                opacity: "1",
                transform: "rotate(-60deg) translateZ(0px)",
              }}></div>
          </div>
          <div className="p-6 border border-home-4 rounded-3xl relative overflow-hidden text-center bg-[#151515]">
            <img className="w-12 relative z-10 m-auto" src={img5} alt="" />
            <p className="text-white text-2xl mt-6 relative z-10">
              Highly Scalable
            </p>
            <p className=" text-[#939393] text-sm lg:text-[16px] mt-3 relative z-10">
              Quest's scalable solutions ensure seamless growth without
              performance compromise.{" "}
            </p>
            <div
              className="w-[200%] h-80 bg-[#a1aee505] -rotate-[60deg] rounded-lg absolute top-1/2 -right-2/3 z-0"
              style={{
                opacity: "1",
                transform: "rotate(-60deg) translateZ(0px)",
              }}></div>
          </div>
          <div className="p-6 border border-home-4 rounded-3xl relative overflow-hidden text-center bg-[#151515]">
            <img className="w-12 relative z-10 m-auto" src={img6} alt="" />
            <p className="text-white text-2xl mt-6 relative z-10">
              Robust Security
            </p>
            <p className=" text-[#939393] text-sm lg:text-[16px] mt-3 relative z-10">
              Quest ensures security with data protection, compliance, and
              secure transactions.
            </p>
            <div
              className="w-[200%] h-80 bg-[#a1aee505] -rotate-[60deg] rounded-lg absolute top-1/2 -right-2/3 z-0"
              style={{
                opacity: "1",
                transform: "rotate(-60deg) translateZ(0px)",
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
