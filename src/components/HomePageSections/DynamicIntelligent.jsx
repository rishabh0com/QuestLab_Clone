import DynamicContent from "./DynamicContent";

const DynamicIntelligent = () => {
  return (
    <div className="px-6 lg:px-10 py-20">
      <p className=" text-center text-[14px] lg:text-[18px]  font-normal leading-[28px] text-[#B9B9B9] font-[Figtree]  mt-4 m-auto">
        Dynamic &amp; Intelligent experiences
      </p>
      <p className=" px-1 text-white text-center  font-medium text-[30px] lg:text-5xl leading-[40px] lg:leading-[56px] -tracking-[0.96px] font-figtree lg:w-[1100px] m-auto mt-4">
        Deliver Delightful In-App Experiences that drive Adoption, Engagement
        &amp; Retention
      </p>
      <p className=" text-center text-[14px] lg:text-[18px]  font-normal leading-[28px] text-[#B9B9B9] font-[Figtree]  mt-4 m-auto mb-12">
        50+ Pre-Built In-app Components to get started within minutes
      </p>
      {}
      <DynamicContent />
    </div>
  );
};
export default DynamicIntelligent;
