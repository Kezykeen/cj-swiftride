import { HiArrowUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const serviceCard = [
  {
    id: 1,
    header: "Car Sourcing and Auction",
    message:
      "We help you find quality cars from trusted U.S. auction platforms like Copart, IAAI, and Manheim.",
    learn: "Learn more",
    image: "/images/service-card1.png",
  },
  {
    id: 2,
    header: "Zelle / CashApp Payment",
    message:
      "Safely send funds to U.S. truckers or service partners using our trusted payment network.",
    learn: "Learn more",
    image: "/images/service-card2.png",
  },
  {
    id: 3,
    header: "Buy Cars in Nigeria",
    message:
      "Browse verified cars already in Nigeria — inspected, documented, and ready to drive.",
    learn: "Learn more",
    image: "/images/service-card3.png",
  },
  {
    id: 4,
    header: "Shipping and Delivery",
    message:
      "From port handling and customs clearance to documentation and nationwide delivery.",
    learn: "Learn more",
    image: "/images/service-card4.png",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col bg-[#F6F6F6] w-full px-[146px] gap-20 pb-[50px] justify-center items-center cursor-pointer">
      <div className="w-full max-w-[1148px]">
        {/* content */}
        <div className="flex justify-between items-end w-full pt-[50px] pb-12">
          <section className="flex flex-col gap-4 w-[50%]">
            <p className="text-[#157DFF] text-[18px] font-plus-jakarta font-medium">
              Our Services
            </p>
            <p className="w-[553px] font-plus-jakarta font-semibold text-[36px] leading-[120%] tracking-[0%]">
              Seamless Car Import and Purchase Solutions
            </p>
          </section>

          <section className="w-[50%] pl-20 text-[#6B6B6B] text-[18px]">
            <p>
              Whether you’re in Nigeria or anywhere around the world, our
              services ensure you get your dream car safely, transparently, and
              without stress.
            </p>
          </section>
        </div>
        {/* service card */}
        <div className="flex gap-[15px] w-full overflow-x-scroll hide-scrollbar">
          {serviceCard.map((item) => (
            <div
              key={item.id}
              className="group hover:text-white hover:bg-[#157DFF] transition-colors duration-300 relative flex flex-col px-4 py-[25px] gap-4 justify-center h-[465px] w-[347px] bg-white rounded-xl overflow-hidden shrink-0"
            >
              <h3 className="font-medium text-[20px]">{item.header}</h3>
              <p className="text-[16px] h-[93px] leading-[31px] text-[#6B6B6B] group-hover:text-white">
                {item.message}
              </p>
              <Link
                to="/"
                className="underline font-semibold text-[16px] leading-[31px]"
              >
                {item.learn}
              </Link>

              {/* card image */}
              <div className="h-[210px] w-[312px] ">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover h-full w-full rounded-xl"
                />
              </div>

              {/* arrow icon */}
              <div className="absolute text-[#0640AE] rotate-30 group-hover:text-white group-hover:rotate-90 transition-transform duration-500 ease-in-out flex justify-end items-end bottom-[7%] right-7  border border-[#0640AE] group-hover:border-white h-10 w-10 rounded-full p-2">
                <HiArrowUp className="flex justify-center items-center h-[25px] w-[25px] font-normal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
