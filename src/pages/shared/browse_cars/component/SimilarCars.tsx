const listingCard = [
  {
    image: "/images/bidding-car.png",
    title: "Toyota Camry 2018 SE",
    location: "Houston, USA",
    mileage: "68,000 Mileage",
    amount: "$8,200",
  },
  {
    image: "/images/bidding-car.png",
    title: "Honda Camry 2018 SE",
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

const SimilarCars = () => {
  return (
    <div className="w-full max-w-[1148px] mx-auto h-full font-plus-jakarta mb-11">
      <div className="flex justify-between mb-8">
        <h3 className="capitalize text-[#101828] text-[24px] font-semibold">
          similar cars
        </h3>
        <div className="flex items-center">
          <p>Sort by:</p>
          <select className="bg-transparent outline-none cursor-pointer">
            <option>New Arrivals</option>
            <option>Old</option>
          </select>
        </div>
      </div>

      {/* listing card */}
      <div className="grid grid-cols-4 gap-8 w-full mx-auto">
        {listingCard.map((item, index) => (
          <div
            key={index}
            className="group relative h-[350px] w-[260px] rounded-[20px] border border-gray-400 overflow-hidden"
          >
            <div className="absolute bg-white text-[#595959] text-[12px] font-medium py-1 px-[7px] rounded top-3 left-3">
              <p>Brand New</p>
            </div>
            <div className="h-[215px] w-[260px]">
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

      <div className="flex justify-center w-full mt-8">
        <button className="flex gap-2.5 items-center bg-[#072C59] text-white px-8 py-[21px] rounded-full">
          <p className="text-[14px] font-semibold">Load more</p>
          <img
            src="/images/load-more-arrow-down.png"
            alt=""
            className="w-[17px] h-[17px]"
          />
        </button>
      </div>
    </div>
  );
};

export default SimilarCars;
