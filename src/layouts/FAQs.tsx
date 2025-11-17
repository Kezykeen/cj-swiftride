import FAQsAccordion from "../components/FAQsAccordion";

const FAQs = () => {
  return (
    <div className="flex flex-col gap-20 w-full max-w-3xl mx-auto px-[] font-plus-jakarta pt-40 ">
      <div className="flex flex-col items-center gap-5">
        <h3 className="capitalize text-[36px] font-semibold">
          frequently asked questions
        </h3>
        <p className="text-[#667085] text-[20px]">
          Everything you need to know about ordering cars through CJ SwiftRide
          Import
        </p>
      </div>

      <div>
        <FAQsAccordion />
      </div>
    </div>
  );
};

export default FAQs;
