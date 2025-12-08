const values = [
  {
    icon: "/images/values-icon.webp",
    header: "Transparency",
    message:
      "Every step — from funding to shipping — is visible in your dashboard. You'll always know where your money and your car are.",
  },
  {
    icon: "/images/values-icon.webp",
    header: "Trust",
    message:
      "We treat every transaction with the seriousness it deserves. Customers send us money for big purchases, and we never take that trust lightly.",
  },
  {
    icon: "/images/values-icon.webp",
    header: "Customer Focus",
    message:
      "We exist for our clients. Our global reach and 24/7 support ensure that no matter where you are, we're only a message away.",
  },
  {
    icon: "/images/values-icon.webp",
    header: "Efficiency",
    message:
      "We streamline the entire process — from sourcing to customs — so your car gets to you faster and stress-free.",
  },
];

const Values = () => {
  return (
    <div className="relative h-[782px] font-plus-jakarta">
      <div className="h-[538px] w-full mx-auto">
        <img
          src="/images/values-bg.webp"
          alt=""
          className="object-cover h-full w-full"
        />
      </div>

      {/* values */}
      <div className="absolute flex flex-col gap-[37px] top-[293px] left-0 right-0 w-full max-w-[1148px] mx-auto h-[489px] px-10 py-[46px] rounded-md bg-white shadow-2xl">
        <h3 className="capitalize text-[#101828] text-[36px] font-semibold">
          what we stand for
        </h3>
        <div className="grid grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col gap-4 w-[243px]">
                <div className="flex justify-center items-center w-[69px] h-[69px] shadow-md rounded-md">
                  <img src={item.icon} alt={item.header} className="w-[33px]" />
                </div>
                <p className="text-[20px] text-[#3F3F3F] font-bold">
                  {item.header}
                </p>
                <p className="text-[18px] text-[#6B6B6B] leading-[30px]">
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
