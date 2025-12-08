import CountUpOnView from "../landingPage/component/CountUpOnView";

interface StatItem {
  value: number;
  label: string;
}

const stats: StatItem[] = [
  { value: 1200, label: "Cars Successfully Delivered" },
  { value: 950, label: "Happy Clients Served" },
  { value: 99, label: "Customer Satisfaction Rate" },
];

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-20 pb-50">
      {/* Icon */}
      <div className="h-14 w-14 flex items-center justify-center bg-blue-100 rounded-full">
        <span className="text-blue-500 text-xl">
          <img src="/images/stats-icon.png" alt="" />
        </span>
      </div>

      {/* Headings */}
      <div className=" flex flex-col gap-4">
        <h2 className="text-[36px] font-semibold text-center ">
          Driven by Trust. Proven by Numbers.
        </h2>
        <p className="text-[#667085]  text-[20px] leading-[30px] text-center w-3xl">
          Every car we source, ship, and deliver adds to our growing record of
          trust and customer satisfaction.
        </p>
      </div>

      {/* card */}
      <div className="relative flex justify-between w-full max-w-[850px] mt-9">
        {/* border line */}
        <div className="absolute left-[31%] border border-gray-100 h-28"></div>
        <div className="absolute left-[68%] border border-gray-100 h-28"></div>

        {stats.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center"
          >
            <p className="text-blue-600 text-[60px] font-semibold">
              <CountUpOnView end={item.value} />
              {item.value === 99 ? "%" : "+"}
            </p>
            <p className="text-gray-600 text-[18px]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
