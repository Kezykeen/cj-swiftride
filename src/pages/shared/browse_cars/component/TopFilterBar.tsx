import { FiSearch } from "react-icons/fi";

const TopFilterBar = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-start gap-8 w-full max-w-[1440px] mx-auto px-[146px] pt-[19px] mb-8 font-plus-jakarta">
        <div className="flex justify-between items-end w-full">
          {/* car make/brand */}
          <div className="flex flex-col gap-2">
            <p className="capitalize text-[#595959]">car make/brand</p>
            <div className="flex gap-4 w-[343px] px-4 py-[21px] rounded-xl bg-[#F5F7FE]">
              <img src="/images/car-make-icon.png" alt="" className="w-6" />
              <select className="flex-1 bg-transparent text-sm text-[#595959] outline-none cursor-pointer">
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
              </select>
            </div>
          </div>
          {/* car model */}
          <div className="flex flex-col gap-2">
            <p className="capitalize text-[#595959]">car model</p>
            <div className="flex gap-4 w-[343px] px-4 py-[21px] rounded-xl bg-[#F5F7FE]">
              <img
                src="/images/car-model-icon.png"
                alt=""
                className="w-5 h-4"
              />
              <select className="flex-1 bg-transparent text-sm text-[#595959] outline-none cursor-pointer">
                <option>Corolla</option>
                <option>Camry</option>
                <option>Ford</option>
              </select>
            </div>
          </div>
          {/* location preference */}
          <div className="flex flex-col gap-2">
            <p className="capitalize text-[#595959]">location preference</p>
            <div className="flex gap-4 w-[343px] px-4 py-[21px] rounded-xl bg-[#F5F7FE]">
              <img src="/images/location-icon.png" alt="" className="w-6" />
              <select className="flex-1 bg-transparent text-sm text-[#595959] outline-none cursor-pointer">
                <option>United State</option>
                <option>Africa</option>
                <option>Belgium</option>
              </select>
            </div>
          </div>
          {/* search */}
          <div className="flex justify-center items-center rounded-full bg-[#072C59] text-white h-[66px] w-[67px]">
            <FiSearch className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFilterBar;
