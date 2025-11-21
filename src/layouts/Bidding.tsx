import { FiArrowUpRight } from "react-icons/fi";
import Button from "../components/Button";

const biddingCard = [
  {
    image: "/images/bidding-car.png",
    title: "Toyota Camry 2018 SE",
    location: "Houston, USA",
    mileage: "68,000 Mileage",
    amount: "$8,200",
  },
  {
    image: "/images/bidding-car.png",
    title: "Toyota Camry 2018 SE",
    location: "Houston, USA",
    mileage: "68,000 Mileage",
    amount: "$8,200",
  },
  {
    image: "/images/bidding-car.png",
    title: "Toyota Camry 2018 SE",
    location: "Houston, USA",
    mileage: "68,000 Mileage",
    amount: "$8,200",
  },
  {
    image: "/images/bidding-car.png",
    title: "Toyota Camry 2018 SE",
    location: "Houston, USA",
    mileage: "68,000 Mileage",
    amount: "$8,200",
  },
];

const Bidding = () => {
  return (
    <div className="w-full px-[146px] py-[108px] font-plus-jakarta max-w-[1440px] mx-auto">
      {/* content */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center w-full">
          <section className="flex flex-col w-2/3 gap-3">
            <h3 className="w-full font-medium text-[36px] tracking-[0%]">
              Discover Cars Ready for Bidding
            </h3>
            <p className="text-[#6B6B6B] text-lg">
              Browse our curated collection of top-rated auction listings.
            </p>
          </section>
          <section>
            <Button
              label="View all our cars"
              variant="secondary"
              className="text-[#072C59] bg-[#072C59]"
              icon={<FiArrowUpRight />}
              onClick={() => console.log("clicked")}
            />
          </section>
        </div>

        {/* bidding card */}
        <div className="flex justify-between w-[1148px] mx-auto">
          {biddingCard.map((item, index) => (
            <div
              key={index}
              className="group relative h-[350px] w-[269px] rounded-[20px] border border-gray-400 overflow-hidden"
            >
              <div className="absolute bg-white text-[#595959] text-[12px] py-[5px] px-[9px] rounded top-3 left-3">
                <p>Brand New</p>
              </div>
              <div className="h-[215px] w-[269px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="flex flex-col justify-between h-33 p-2">
                <div className="font-semibold">{item.title}</div>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/bidding-location-icon.png"
                    alt=""
                    className=""
                  />
                  <p className="text-[12px]">{item.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images/bidding-mileage-icon.png" alt="" />
                  <p className="text-[12px]">{item.mileage}</p>
                </div>
                <div className="text-[#6B6B6B] text-[14px] font-semibold">
                  {item.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bidding;
