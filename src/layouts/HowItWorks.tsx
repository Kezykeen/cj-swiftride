import { HowItWorksCard } from "../components/Card";

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 pt-24 pb-[130px] gap-15">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-[#157DFF] text-[18px] font-semibold">How it works</p>
        <p
          className="w-[553px] font-plus-jakarta font-medium text-[36px] tracking-[0%] text-center"
          style={{
            lineHeight: "44px",
          }}
        >
          We make buying and shipping your car easy.
        </p>
      </div>

      {/* card */}
      <div className="flex relative">
        <div className="h-25 bg-[#E8F2FF] w-20 absolute left-[28%] top-[34%]"></div>
        <div className="h-25 bg-[#E8F2FF] w-20 absolute right-[28%] top-[34%]"></div>
        <HowItWorksCard
          size="lg"
          color="blue"
          image="/images/how-it-works-icon1.png"
          header="Request a Service"
          message="Pick your preferred service — auction, purchase, preorder, or third-party payment."
        />
        <HowItWorksCard
          size="lg"
          color="blue"
          image="/images/how-it-works-icon2.png"
          header="We handle the Process"
          message="Our verified team manages payments, verification, and documentation securely."
        />
        <HowItWorksCard
          size="lg"
          color="blue"
          image="/images/how-it-works-icon3.png"
          header="Track Every Update"
          message="Monitor each step — from confirmation to shipment — directly from your dashboard."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
