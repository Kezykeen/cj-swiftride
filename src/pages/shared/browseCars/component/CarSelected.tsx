import type { Car } from "../BrowseCars";
import CarDetailsTabs from "./CarDetailsTabs";
import CarSelectedSidebar from "./CarSelectedSidebar";

const carPreview = [
  {
    image: "/images/car-preview1.png",
  },
  {
    image: "/images/car-preview2.png",
  },
  {
    image: "/images/car-preview3.png",
  },
  {
    image: "/images/car-preview4.png",
  },
];

const carStats = [
  {
    image: "/images/automatic-icon.png",
    title: "Automatic",
  },
  {
    image: "/images/km-icon.png",
    title: "47,000 km",
  },
  {
    image: "/images/petrol-icon.png",
    title: "Petrol",
  },
  {
    image: "/images/seat-icon.png",
    title: "4 Seats",
  },
];

type CarSelectedProps = {
  car: Car;
};

const CarSelected = ({ car }: CarSelectedProps) => {
  return (
    <div className="flex gap-[19px] w-full mt-[21px] font-plus-jakarta">
      <div className="bg-white overflow-hidden shadow-2xl w-[746px]">
        {/* Car Image */}
        <div className="p-4">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute flex items-center gap-1 bg-white text-[#6B6B6B] text-[14px] font-semibold py-1 px-[7px] rounded-full top-4 left-4">
              <img
                src="/images/verified.png"
                alt="verified icon"
                className="w-6"
              />
              <p>Verified by CJ Autos</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {carPreview.map((item, index) => (
              <div key={index} className="w-[169.56px] h-[111px]">
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-[#E9EBF8] border-t border-b">
          <div className="flex flex-col gap-2">
            <h3>{car.title}</h3>
            <span className="flex items-center gap-0.5 text-[#726C6C] text-sm">
              <img
                src="/images/car-preview-location.png"
                alt="location icon"
                className="w-6 h-6"
              />
              <p>Available in Nigeria</p>
            </span>
          </div>

          <img
            src="/images/car-preview-bookmark.png"
            alt="bookmark icon"
            className="w-6 h-6"
          />
        </div>

        <div className="flex gap-[47px] px-4 py-[30px] border-b border-[#E9EBF8]">
          {carStats.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="flex justify-center items-center bg-[#F6F6F8] rounded-sm w-11 h-11.5">
                <img src={item.image} alt="" className="w-6 h-6" />
              </div>
              <p className="text-[#5C5F62] text-sm">{item.title}</p>
            </div>
          ))}
        </div>

        <CarDetailsTabs />
      </div>

      {/* details */}
      <div className="w-[381px] overflow-hidden">
        <CarSelectedSidebar car={car} />
      </div>
    </div>
  );
};

export default CarSelected;
