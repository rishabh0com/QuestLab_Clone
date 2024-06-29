import upperImg from "../../assets/letAiImages/upper.svg"
import lowerImg from "../../assets/letAiImages/lower.svg"

const LetOurAI = () => {
  return (
    <div className="  py-[80px] px-4 md:px-8 lg:px-[120px] text-white">
      <div className=" m-auto flex flex-col gap-0  ">
        <p className=" px-1 text-white text-center  font-medium text-[30px] lg:text-5xl leading-[40px] lg:leading-[56px] -tracking-[0.96px] font-figtree lg:w-[674px] m-auto">
          Let our AI find the best ways to engage &amp; convert your users
        </p>
        <p className=" text-center text-[14px] lg:text-[18px]  font-normal leading-[28px] text-[#B9B9B9] font-[Figtree]  mt-4 m-auto">
          Generate Personalized In-App Text, Image, UI at Scale for Millions of
          Users without engineering team
        </p>
      </div>
      {}
      <div className="flex lg:hidden justify-center gap-6 flex-col mb-2">
        <div className="w-full p-0 md:p-12 relative overflow-hidden">
          <img src={upperImg} alt="" className="w-full " />
        </div>
      </div>

      {}
      <div className="">
        <div className=" lg:pt-0 pt-10">
          <div
            className="hidden lg:flex justify-center items-center  flex-row  mt-16"
            style={{ opacity: "1", transform: "none" }}>
            <div className="w-[575px] relative ">
              <img
                src={upperImg}
                alt="website showing a segment named"
                className="w-full text-white"
              />
            </div>
            <div className="w-[580px] flex flex-col gap-4 lg:px-[85px] ">
              <p className="text-white font-figtree text-xl lg:text-[30px] font-medium leading-[40px] -tracking-[0.6px]">
                AI generated mini-segments to target in active user
              </p>
              <div className="flex ">
                <p className="text-[#939393] font-figtree text-[14px] lg:text-[18px] font-normal leading-[20px] lg:leading-[28px]">
                  Our analytical models find common traits for users that are
                  not active and creates thousands of segments to activate them
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden justify-center gap-6 flex-col mb-2">
            <div className="w-full p-0 md:p-12 relative overflow-hidden">
              <img
                src="/assets/mini-segment-RCDnplfN.svg"
                alt=""
                className="w-full "
              />
            </div>
            <div className="w-full lg:w-[286px] flex flex-col gap-6 m-auto">
              <p className="text-home-1a text-2xl  lg:text-4xl text-center">
                AI generated mini-segments to target in active user
              </p>
              <div className="flex flex-col gap-6">
                <p className="text-[14px]  lg:text-xl  text-center text-home-1">
                  Our analytical models find common traits for users that are
                  not active and creates thousands of segments to activate them
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:pt-0 pt-10">
          <div
            className="hidden lg:flex justify-center items-center  flex-row-reverse  mt-16"
            style={{ opacity: "1", transform: "none" }}>
            <div className="w-[575px] relative ">
              <img
                src={lowerImg}
                alt="flowchart for creating marketing campaigns"
                className="w-full text-white"
              />
            </div>
            <div className="w-[580px] flex flex-col gap-4 lg:px-[85px] ">
              <p className="text-white font-figtree text-xl lg:text-[30px] font-medium leading-[40px] -tracking-[0.6px]">
                Our models generate AI variants to optimize text, images, and UI
                layouts for each segment.
              </p>
              <div className="flex ">
                <p className="text-[#939393] font-figtree text-[14px] lg:text-[18px] font-normal leading-[20px] lg:leading-[28px]">
                  Easily find winning variants among millions of variants to
                  power users across the customer journey
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden justify-center gap-6 flex-col mb-2">
            <div className="w-full p-0 md:p-12 relative overflow-hidden">
              <img src={lowerImg} alt="" className="w-full " />
            </div>
            <div className="w-full lg:w-[286px] flex flex-col gap-6 m-auto">
              <p className="text-home-1a text-2xl  lg:text-4xl text-center">
                Our models generate AI variants to optimize text, images, and UI
                layouts for each segment.
              </p>
              <div className="flex flex-col gap-6">
                <p className="text-[14px]  lg:text-xl  text-center text-home-1">
                  Easily find winning variants among millions of variants to
                  power users across the customer journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetOurAI;
