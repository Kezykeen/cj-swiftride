// import { ServicesCard } from "../components/Card";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const serviceCard = [
  {
    id: 1,
    header: "Car Sourcing and Auction",
    message:
      "We help you find quality cars from trusted U.S. auction platforms like Copart, IAAI, and Manheim.",
    learn: "Learn more",
    image: "/images/service-card1.jpg",
  },
  {
    id: 2,
    header: "Car Sourcing and Auction",
    message:
      "We help you find quality cars from trusted U.S. auction platforms like Copart, IAAI, and Manheim.",
    learn: "Learn more",
    image: "/images/service-card2.jpg",
  },
  {
    id: 3,
    header: "Car Sourcing and Auction",
    message:
      "We help you find quality cars from trusted U.S. auction platforms like Copart, IAAI, and Manheim.",
    learn: "Learn more",
    image: "/images/service-card3.png",
  },
  {
    id: 4,
    header: "Car Sourcing and Auction",
    message:
      "We help you find quality cars from trusted U.S. auction platforms like Copart, IAAI, and Manheim.",
    learn: "Learn more",
    image: "/images/service-card4.jpg",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col bg-[#F6F6F6] gap-20 pb-20 justify-center items-center cursor-pointer">
      {/* content */}
      <div className="flex justify-between items-end container-padding">
        <section className="w-1/2">
          <p className="text-[#157DFF] text-[18px] font-plus-jakarta font-semibold">
            Our Services
          </p>
          <p className="w-[553px] font-plus-jakarta font-semibold text-[36px] leading-[100%] tracking-[0%]">
            Seamless Car Import and Purchase Solutions
          </p>
        </section>
        <section className="w-1/2 pr-30">
          <p>
            Whether you’re in Nigeria or anywhere around the world, our services
            ensure you get your dream car safely, transparently, and without
            stress.
          </p>
        </section>
      </div>

      {/* service card */}
      <div className="flex gap-[30px] w-full overflow-x-scroll px-10 hide-scrollbar">
        {serviceCard.map((item) => (
          <div
            key={item.id}
            className="group hover:text-white hover:bg-[#157DFF] relative flex flex-col p-5 gap-6 justify-center h-[465px] w-[347px] bg-white rounded-xl overflow-hidden shrink-0"
          >
            {/* positioned rectangle */}
            <div className="absolute w-[312px] h-[210px] bg-white group-hover:bg-[#157DFF] rotate-[-46.98deg] top-[75%] left-38"></div>
            <h3 className="font-medium text-[20px]">{item.header}</h3>
            <p className="text-[16px] text-[#6B6B6B] group-hover:text-white group-hover: font-medium">
              {item.message}
            </p>
            <Link to="/" className="underline font-semibold text-[16px]">
              {item.learn}
            </Link>
            <div className="h-[210px] w-[312px] ">
              <img
                src={item.image}
                alt=""
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
            <div className="absolute text-[#0640AE] group-hover:text-white group-hover:rotate-90 transition-transform duration-500 ease-in-out flex justify-end items-end bottom-[12%] right-10">
              <FaArrowUpLong className="flex justify-center items-center border border-[#0640AE] group-hover:border-white rounded-full h-9 w-9 p-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
