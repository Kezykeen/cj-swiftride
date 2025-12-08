import type { Car } from "../BrowseCars";

type CarSelectedProps = {
  car: Car;
};

const CarSelectedSidebar = ({ car }: CarSelectedProps) => {
  return (
    <div className="flex flex-col gap-8">
      {/* price */}
      <div className="border border-[#E3E3E3] bg-[#F7F7F7] rounded-xl overflow-hidden">
        <div className="flex flex-col justify-between gap-4 p-[17px]">
          <p>Price</p>
          <p className="font-bold text-[32px]">{car.amount}</p>
          <span className="bg-white w-[145px] rounded-md p-2 text-[#6B6B6B] font-medium text-sm">
            Slightly Negotiable
          </span>
        </div>

        {/* offer */}
        <div className="flex flex-col gap-5 bg-white pt-8 px-4 pb-6">
          <div className="flex justify-between w-full">
            <button className="py-[15px] w-[164px] text-sm rounded-full bg-[#072C59] text-white">
              Make an Offer
            </button>
            <button className="py-[15px] w-[164px] text-sm rounded-full border border-[#072C59] text-[#072C59] font-semibold">
              Book Inspection
            </button>
          </div>
          {/* whatsapp button */}
          <button className="flex items-center justify-center gap-2 w-full border border-[#072C59] bg-[#E8F2FF] px-[37px] py-[15px] rounded-full">
            <img src="/images/whatsapp-icon.png" alt="" className="w-5 h-5" />
            <p className="text-[#072C59] font-semibold text-sm">
              Chat with Sales Rep
            </p>
          </button>
        </div>
      </div>

      {/* share post */}
      <div className="flex flex-col gap-4 p-4 border border-[#E3E3E3] rounded-xl bg-white">
        <h3 className="font-semibold text-[20px]">Share post</h3>

        <ul className="flex items-center gap-2 text-[#157DFF] text-sm font-semibold">
          <a href="https://www.facebook.com/">Facebook</a>
          <span className="bg-[#101828] w-0.5 h-4"></span>
          <a href="https://x.com/">Twitter</a>
          <span className="bg-[#101828] w-0.5 h-4"></span>
          <a href="https://www.whatsapp.com/?lang=en/">Whatsapp</a>
        </ul>

        <div className="flex justify-center items-center gap-6 px-4 bg-[#E8F2FF] rounded-xl h-[54px]">
          <p className="text-sm text-[#737373]">
            www.cjrides.com/lexus-rx-350-2020
          </p>
          <img src="/images/copy-icon.png" alt="" className="w-5" />
        </div>
      </div>

      {/*  other details container */}
      <div className="flex flex-col gap-4 p-4 border border-[#E3E3E3] rounded-xl bg-white ">
        {/*  */}
        <div className="flex justify-center items-center bg-[#B6D7FF] w-[60px] h-[60px] rounded-full">
          <img
            src="/images/isolated-logo.png"
            alt=""
            className="w-[26px] h-[26px]"
          />
        </div>

        {/* section CJ */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-[20px]">CJ Swift Rides Import</h3>
            <img src="/images/verified-icon.png" alt="" className="w-3.5" />
          </div>
          <p className="text-[#726C6C] text-sm border border-transparent border-b-[#E9EBF8] pb-4">
            We help bid, buy, and ship cars from verified U.S. auction sites
            like Copart and IAAI.
          </p>
        </div>

        {/* section location */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Office Location & Contact</h3>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#3D3D3D] font-semibold text-sm">
              Head Office:
            </h4>
            <p className="text-[#726C6C]">
              CJ Autos Hub — 16B Admiralty Way, Lekki Phase 1, Lagos, Nigeria
            </p>
          </div>

          {/*  */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#3D3D3D] font-semibold text-sm">
              Branch Locations:
            </h4>
            <p className="text-[#726C6C] text-[14px] font-semibold flex">
              Abuja Office{" "}
              <p className="font-normal">
                — Wuse 2, Plot 33 Aminu Kano Crescent
              </p>
            </p>
            <p className="text-[#726C6C] text-[14px] font-semibold flex">
              Port Harcourt Office{" "}
              <p className="font-normal"> — 42 Olu-Obasanjo Road</p>
            </p>
          </div>

          {/*  */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#3D3D3D] font-semibold text-sm">
              Office Hours:
            </h4>
            <p className="text-[#726C6C] text-[14px] font-semibold flex gap-1">
              Mon-Sat: <p className="font-normal">9:00 AM - 6:00 PM</p>
            </p>
            <p className="text-[#726C6C] text-[14px] font-semibold flex gap-1">
              Sun: <p className="font-normal">Closed</p>
            </p>
          </div>
        </div>

        {/* map */}
        <button className="flex justify-center items-center gap-2.5 w-full border border-[#072C59] py-[15px] rounded-full mt-6">
          <img src="/images/map-icon.png" alt="" className="w-4 h-6" />
          <p className="text-[#072C59] font-semibold text-sm">
            View on google map
          </p>
        </button>
      </div>
    </div>
  );
};

export default CarSelectedSidebar;
