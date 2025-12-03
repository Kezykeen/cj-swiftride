type RangeFilterProps = {
  title: string;
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  onApply: () => void;
  onReset: () => void;
};

const RangeFilter = ({
  title,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  onApply,
  onReset,
}: RangeFilterProps) => (
  <div className="w-full">
    <h3 className="text-lg font-medium text-gray-700 mb-[23px]">{title}</h3>

    {/* Slider */}
    <div className="mb-6">
      <div className="relative h-1.5 bg-[#E8F2FF] rounded-full">
        <div
          className="absolute h-1.5 bg-[#072C59] rounded-full"
          style={{ left: "25%", right: "40%" }}
        ></div>
        <div
          className="absolute w-5 h-5 bg-white border border-[#E8F2FF] rounded-full -mt-1.5"
          style={{ left: "25%", marginLeft: "-10px" }}
        ></div>
        <div
          className="absolute w-5 h-5 bg-white border border-[#E8F2FF] rounded-full -mt-1.5"
          style={{ right: "25%", marginRight: "20px" }}
        ></div>
      </div>
    </div>

    {/* Min Max Labels */}
    <div className="flex justify-between mb-2 gap-8 w-[210px]">
      <span className="text-sm text-[#595959] font-semibold w-1/2">Min</span>
      <span className="text-sm text-[#595959] font-semibold w-1/2">Max</span>
    </div>

    {/* Input Fields */}
    <div className="flex items-center justify-between pr-4 gap-3 w-[210px] mb-[31px]">
      <input
        type="number"
        value={minValue}
        onChange={(e) => onMinChange(e.target.value)}
        className="w-[77px] h-11 bg-[#E8F2FF] rounded-lg px-4 py-3 font-sans text-[14px] text-center text-[#072C59]"
      />
      <span className="text-gray-400">-</span>
      <input
        type="number"
        value={maxValue}
        onChange={(e) => onMaxChange(e.target.value)}
        className="w-[77px] h-11 bg-[#E8F2FF]  rounded-lg px-4 py-3 font-sans text-[14px] text-center text-[#072C59]"
      />
    </div>

    {/* Buttons */}
    <div className="flex gap-11">
      <button
        onClick={onApply}
        className="bg-[#072C59] text-white text-[15px] font-bold rounded-xl w-[78px] py-3 transition-colors"
      >
        Apply
      </button>
      <button
        onClick={onReset}
        className="text-[#072C59] text-[15px] font-bold hover:underline"
      >
        Reset
      </button>
    </div>
  </div>
);

export default RangeFilter;
