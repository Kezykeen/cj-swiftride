import { FiArrowUpRight } from "react-icons/fi";
import Button from "../components/Button";

const TestimonialSubsection = () => {
  return (
    <div className="flex items-center pt-[108px] pb-[139px] gap-20">
      <div className="relative flex justify-end items-end gap-[60px] w-full max-w-[1148px] mx-auto">
        {/* car section */}
        <img
          src="/images/testimonial-car.png"
          alt=""
          className="w-[671px] absolute left-[-12%]"
        />

        {/* content section */}
        <section className="flex flex-col w-[561px] gap-6">
          <h3 className="font-plus-jakarta text-[40px] font-semibold">
            Why Thousands of Buyers Trust CJ SwiftRide
          </h3>
          <p className="font-plus-jakarta text-[18px] text-[#6B6B6B] font-medium leading-[42px]">
            We understand that sending money for car purchases abroad requires
            trust. That’s why our process is 100% transparent. You fund your
            wallet, we set up your bidding account, place bids on your behalf,
            and keep you updated every step of the way — from payment
            confirmation to car delivery.
          </p>
          {/* check */}
          <div className="flex flex-col gap-[17px]">
            <div className="flex gap-2 items-center font-plus-jakarta text-[#595959] font-semibold">
              <img src="/images/check-circle.png" alt="" />
              <p>Licensed & CAC-Registered Dealer</p>
            </div>
            <div className="flex gap-2 items-center font-plus-jakarta text-[#595959] font-semibold">
              <img src="/images/check-circle.png" alt="" />
              <p>Real-Time Bidding Updates</p>
            </div>
            <div className="flex gap-2 items-center font-plus-jakarta text-[#595959] font-semibold">
              <img src="/images/check-circle.png" alt="" />
              <p>Customer Support 24/7</p>
            </div>
            <div className="">
              <Button
                label="Learn more"
                variant="outline"
                className="text-black border-black mt-[7px]"
                icon={<FiArrowUpRight />}
                onClick={() => console.log("clicked")}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialSubsection;
