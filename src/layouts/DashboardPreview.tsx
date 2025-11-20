import React from "react";
import Button from "../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

const DashboardPreview: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0856B7]/87 flex justify-center">
      <div className="flex justify-center items-center w-full">
        <img
          src="/images/dashboard-preview-bg.jpg"
          alt=""
          className="absolute h-full w-full object-cover -z-10"
        />
        <div className="max-w-6xl py-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left dashboard mockup */}
          <div className="">
            <img
              src="/images/dashboard-preview-img.png"
              alt=""
              className="h-[769px]"
            />
          </div>
          {/* Right side */}
          <div className="flex flex-col justify-between gap-[219px] h-full py-12 text-white">
            <div className="flex flex-col gap-5">
              <p className="uppercase flex justify-center items-center text-sm bg-[#DCECFF] px-[25px] py-3 rounded-xl text-black w-44 font-medium">
                track process
              </p>
              <h2 className="text-[46px] font-semibold leading-tight">
                Stay in Control With Your Personal Dashboard
              </h2>
              <p className="max-w-md opacity-90">
                Your money and car are protected at every step. Real-time
                updates. Transparent process. 100% traceable.
              </p>
              <Button
                label="Create account now"
                variant="outline"
                className="w-[236px]"
                size="sm"
                icon={<FiArrowUpRight />}
                onClick={() => console.log("clicked")}
              />
            </div>
            <div className="flex flex-col gap-[18px] border-t-2 border-t-[#F4F4F5] w-[440px]">
              <p className="mt-4">
                “CJ Grand Autos helped me pay for my Copart win from Nigeria
                without stress. Everything was documented and confirmed fast.”
              </p>
              <div className="flex gap-2">
                <p className="font-semibold">Prince Chijioke</p>
                <p>Enugu, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
