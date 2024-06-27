import "./customerReview.css";
import sonxP from "../../assets/customer/sonxProfile.png";
import sonxI from "../../assets/customer/sonxIcon.svg";
import persanaP from "../../assets/customer/persanaProfile.jpg";
import persanaI from "../../assets/customer/persanaIcon.png";
import bitazzaP from "../../assets/customer/bitazzaProfile.jpg";
import bitazzaI from "../../assets/customer/bitazzaIcon.svg";

const CustmoreReview = () => {
  return (
      <div className="sliderCard my-8" style={{ opacity: "1", transform: "none" }}>
      <p className="linearText text-center text-[#F6F6F6] font-Figtree text-[14px] font-bold leading-5 tracking-[0.28px] m-auto mb-3">
        CUSTOMER REVIEWS
      </p>
      <div className="text-center text-white font-figtree text-3xl lg:text-4xl font-medium leading-[46px] tracking-tight lg:w-[468px] w-[350px] m-auto mb-1 ">
        Don’t take our word for it.
      </div>
      <div className="text-center text-white font-figtree text-3xl lg:text-4xl font-medium leading-[46px] tracking-tight lg:w-[468px] w-[350px] m-auto mb-14 ">
        Trust our customers
      </div>
      <div className="sliderCardTrack">
        <div className="w-[626px]   bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px]">
          <div className=" py-[40px] px-[32px] flex flex-col justify-between h-full">
            <div className=" ">
              <p className=" pb-[32px] font-normal text-[18px] text-[#D5D4D6]">
                Quest didn't just connect our data; it gave life to our
                otherwise static platform. Understanding their journey and
                preferences has changed how we approach every feature on Sonx.
                We've seen fans more engaged, artists more connected, and our
                platform thrive like never before.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px]">
                <div>
                  <img
                    className="w-[56px] h-[56px] rounded-full"
                    src={sonxP}
                    alt="Profile"
                  />
                </div>
                <div>
                  <p className="text-[white] text-[20px]  font-normal">Lee Gray</p>
                  <p className="text-[#D5D4D6] text-[16px] font-normal">Founder</p>
                </div>
              </div>
              <div>
                <img src={sonxI} className="w-32 text-white" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[626px]   bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px]">
          <div className=" py-[40px] px-[32px] flex flex-col justify-between h-full">
            <div className=" ">
              <p className=" pb-[32px] font-normal text-[18px] text-[#D5D4D6]">
                Quest transformed our data-driven strategies. What was once a
                challenging process of connecting dots is now a streamlined flow
                of insights to action. Our campaigns are now more targeted, and
                we understand our users better.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px]">
                <div>
                  <img
                    className="w-[56px] h-[56px] rounded-full"
                    src={persanaP}
                    alt="Profile"
                  />
                </div>
                <div>
                  <p className="text-[white] text-[20px]  font-normal">
                    Sriya Maram
                  </p>
                  <p className="text-[#D5D4D6] text-[16px] font-normal">Founder</p>
                </div>
              </div>
              <div>
                <img src={persanaI} className="w-32 text-white" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[626px]   bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px]">
          <div className=" py-[40px] px-[32px] flex flex-col justify-between h-full">
            <div className=" ">
              <p className=" pb-[32px] font-normal text-[18px] text-[#D5D4D6]">
                Quest is a powerful growth engine that powered our entire
                Quest’s experience in our IRL event as well as mobile commerce
                experience. Our engagement &amp; revenue grew as a result of
                seamless integration with Quest.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px]">
                <div>
                  <img
                    className="w-[56px] h-[56px] rounded-full"
                    src={bitazzaP}
                    alt="Profile"
                  />
                </div>
                <div>
                  <p className="text-[white] text-[20px]  font-normal">Kevin</p>
                  <p className="text-[#D5D4D6] text-[16px] font-normal">
                    Co-founder
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={bitazzaI}
                  className="w-32 text-white"
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[626px]   bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px]">
          <div className=" py-[40px] px-[32px] flex flex-col justify-between h-full">
            <div className=" ">
              <p className=" pb-[32px] font-normal text-[18px] text-[#D5D4D6]">
                Quest didn't just connect our data; it gave life to our
                otherwise static platform. Understanding their journey and
                preferences has changed how we approach every feature on Sonx.
                We've seen fans more engaged, artists more connected, and our
                platform thrive like never before.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px]">
                <div>
                  <img
                    className="w-[56px] h-[56px] rounded-full"
                    src={sonxP}
                    alt="Profile"
                  />
                </div>
                <div>
                  <p className="text-[white] text-[20px]  font-normal">Lee Gray</p>
                  <p className="text-[#D5D4D6] text-[16px] font-normal">Founder</p>
                </div>
              </div>
              <div>
                <img src={sonxI} className="w-32 text-white" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[626px]   bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px]">
          <div className=" py-[40px] px-[32px] flex flex-col justify-between h-full">
            <div className=" ">
              <p className=" pb-[32px] font-normal text-[18px] text-[#D5D4D6]">
                Quest transformed our data-driven strategies. What was once a
                challenging process of connecting dots is now a streamlined flow
                of insights to action. Our campaigns are now more targeted, and
                we understand our users better.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px]">
                <div>
                  <img
                    className="w-[56px] h-[56px] rounded-full"
                    src={persanaP}
                    alt="Profile"
                  />
                </div>
                <div>
                  <p className="text-[white] text-[20px]  font-normal">
                    Sriya Maram
                  </p>
                  <p className="text-[#D5D4D6] text-[16px] font-normal">Founder</p>
                </div>
              </div>
              <div>
                <img src={persanaI} className="w-32 text-white" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[626px]   bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px]">
          <div className=" py-[40px] px-[32px] flex flex-col justify-between h-full">
            <div className=" ">
              <p className=" pb-[32px] font-normal text-[18px] text-[#D5D4D6]">
                Quest is a powerful growth engine that powered our entire
                Quest’s experience in our IRL event as well as mobile commerce
                experience. Our engagement &amp; revenue grew as a result of
                seamless integration with Quest.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px]">
                <div>
                  <img
                    className="w-[56px] h-[56px] rounded-full"
                    src={bitazzaP}
                    alt="Profile"
                  />
                </div>
                <div>
                  <p className="text-[white] text-[20px]  font-normal">Kevin</p>
                  <p className="text-[#D5D4D6] text-[16px] font-normal">
                    Co-founder
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={bitazzaI}
                  className="w-32 text-white"
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustmoreReview;
