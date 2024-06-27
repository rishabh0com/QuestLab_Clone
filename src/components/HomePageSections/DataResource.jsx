import "./dataResource.css";
import inner1 from "../../assets/dataResourceIcon/inner1.svg";
import inner2 from "../../assets/dataResourceIcon/inner2.svg";
import inner3 from "../../assets/dataResourceIcon/inner3.svg";
import inner4 from "../../assets/dataResourceIcon/inner4.svg";
import inner5 from "../../assets/dataResourceIcon/inner5.png";
import inner6 from "../../assets/dataResourceIcon/inner6.svg";
import inner7 from "../../assets/dataResourceIcon/inner7.svg";
import inner8 from "../../assets/dataResourceIcon/inner8.svg";
import outer1 from "../../assets/dataResourceIcon/outer1.svg";
import outer2 from "../../assets/dataResourceIcon/outer2.svg";
import outer3 from "../../assets/dataResourceIcon/outer3.svg";
import outer4 from "../../assets/dataResourceIcon/outer4.svg";
import outer5 from "../../assets/dataResourceIcon/outer5.svg";
import outer6 from "../../assets/dataResourceIcon/outer6.svg";
import outer7 from "../../assets/dataResourceIcon/outer7.svg";
import outer8 from "../../assets/dataResourceIcon/outer8.svg";
import outer9 from "../../assets/dataResourceIcon/outer9.svg";
import outer10 from "../../assets/dataResourceIcon/outer10.svg";
import outer11 from "../../assets/dataResourceIcon/outer11.svg";
import outer12 from "../../assets/dataResourceIcon/outer12.svg";

const DataResource = () => {
  return (
    <div className="py-24 mt-20 text-white overflow-hidden ">
      <div className="relative py-40">
        <div className="relative flex flex-col items-center gap-6 z-10 min-h-[300px] px-6 md:px-12">
          <p className="rounded-full px-3 py-[6px]  m-auto text-home-1a text-sm"></p>
          <div>
            <p className="text-2xl md:text-4xl w-full text-home-1a text-center">
              Connects to your
            </p>
            <p className="text-2xl md:text-4xl text-home-1a text-center">
              Existing Data Sources
            </p>
          </div>
          <div className="">
            <p className="text-sm md:text-lg text-center text-home-1 leading-4 md:leading-5">
              Product usage data is collected from{" "}
            </p>
            <p className="text-sm md:text-lg text-center text-home-1 mt-1 leading-4 md:leading-5">
              your exsiting Product &amp; Data stack.
            </p>
          </div>
          <div className="h-10"></div>
        </div>
        <div className="absolute -top-[50px] w-full flex items-center justify-center overflow-hidden">
          <div className="inner relative w-[540px] h-[540px] mt-[100px] antirotate360deg">
            <div className="w-[492px] h-[492px] rounded-full translate-y-6 md:translate-x-6 translate-x-0 border border-home-4"></div>
            <div className="w-[540px] flex justify-between absolute rotate-45 top-[46%] -left-[24px] md:left-0 ">
              <div className="w-12 h-12 -rotate-45">
                <img
                  src={inner1}
                  className="innerDiv w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt="Iterable logo"
                />
              </div>
              <div className="w-12 h-12 -rotate-45">
                <img
                  src={inner2}
                  className="innerDiv w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt="Iterable logo"
                />
              </div>
            </div>
            <div className="w-[540px] flex justify-between absolute rotate-90 top-[46%] -left-[24px] md:left-0 ">
              <div className="innerDiv w-12 h-12 -rotate-90 ">
                <img
                  src={inner3}
                  alt=""
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                />
              </div>
              <div className="innerDiv w-12 h-12 -rotate-90 ">
                <img
                  src={inner4}
                  alt=""
                  className="innerDiv w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                />
              </div>
            </div>
            <div className=" w-[540px] flex justify-between absolute rotate-[135deg] top-[46%] -left-[24px] md:left-0 ">
              <div className="innerDiv w-12 h-12 -rotate-[135deg] ">
                <img
                  src={inner5}
                  alt=""
                  className="innerDiv w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                />
              </div>
              <div className="innerDiv w-12 h-12 -rotate-[135deg] ">
                <img
                  src={inner6}
                  alt=""
                  className="innerDiv w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                />
              </div>
            </div>
            <div className="innerDiv w-[540px] flex justify-between absolute top-[46%] -left-[24px] md:left-0 ">
              <div className="w-12 h-12">
                <img
                  src={inner7}
                  className="innerDiv w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
              <div className="innerDiv w-12 h-12">
                <img
                  src={inner8}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt="Amazon Redshift"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="outer absolute -top-[50px] w-full flex items-center justify-center  ">
          <div className="relative w-[740px] h-[740px] rotate360deg">
            <div className="w-[692px] h-[692px] rounded-full translate-y-6 md:translate-x-6 translate-x-0 border border-home-4"></div>
            <div className="w-[740px] flex justify-between absolute rotate-[30deg] top-[47%] md:left-0 -left-[24px]">
              <div className="outerDiv w-12 h-12 -rotate-[30deg] ">
                <img
                  src={outer1}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
              <div className="outerDiv w-12 h-12 -rotate-[30deg]">
                <img
                  src={outer2}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt="Amazon Redshift"
                />
              </div>
            </div>
            <div className="w-[740px] flex justify-between absolute rotate-[60deg] top-[47%] md:left-0 -left-[24px] ">
              <div className="outerDiv w-12 h-12 -rotate-[60deg]">
                <img
                  src={outer3}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
              <div className=" outerDiv w-12 h-12 -rotate-[60deg]">
                <img
                  src={outer4}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[740px] flex justify-between absolute rotate-[90deg] top-[47%] md:left-0 -left-[24px]  ">
              <div className="outerDiv w-12 h-12 -rotate-[90deg]">
                <img
                  src={outer5}
                  className=" outerDiv w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
              <div className=" outerDiv w-12 h-12 -rotate-[90deg]">
                <img
                  src={outer6}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[740px] flex justify-between absolute rotate-[120deg] top-[47%] md:left-0 -left-[24px] ">
              <div className=" outerDiv w-12 h-12 -rotate-[120deg]">
                <img
                  src={outer7}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
              <div className="outerDiv w-12 h-12 -rotate-[120deg] ">
                <img
                  src={outer8}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt="Iterable logo"
                />
              </div>
            </div>
            <div className="w-[740px] flex justify-between absolute rotate-[150deg] top-[47%] md:left-0 -left-[24px] ">
              <div className="outerDiv w-12 h-12 -rotate-[150deg]">
                <img src={outer9} alt="Iterable logo" />
              </div>
              <div className="outerDiv w-12 h-12 -rotate-[150deg] ">
                <img
                  src={outer10}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt="Iterable logo"
                />
              </div>
            </div>
            <div className=" w-[740px] flex justify-between absolute top-[47%] md:left-0 -left-[24px]">
              <div className="outerDiv w-12 h-12">
                <img
                  src={outer11}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
              <div className="outerDiv w-12 h-12 ">
                <img
                  src={outer12}
                  className="w-full bg-zinc-900 p-3 rounded-full bg-home-5  border-home-4 antirotate360degsup text-white"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:px-12 w-full h-96 absolute md:-bottom-[70px] -bottom-20"
          style={{
            background:
              "linear-gradient(180deg,rgba(13,13,13,0) 0%,var(--token-3c0773e2-e4f9-4bf4-8185-514b67d01490, rgb(13, 13, 13)) 70.3079178885631%)",
          }}></div>
      </div>
    </div>
  );
};

export default DataResource;
