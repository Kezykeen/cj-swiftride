const brand = [
  {
    image: "/images/brand/mercedes-icon.png",
    carName: "Mercedes",
  },
  {
    image: "/images/brand/lamborghini-icon.png",
    carName: "Lamborghini",
  },
  {
    image: "/images/brand/kia-icon.png",
    carName: "Kia",
  },
  {
    image: "/images/brand/nissan-icon.png",
    carName: "Nissan",
  },
  {
    image: "/images/brand/volvo-icon.png",
    carName: "Volvo",
  },
  {
    image: "/images/brand/audi-icon.png",
    carName: "Audi",
  },
  {
    image: "/images/brand/mazda-icon.png",
    carName: "Mazda",
  },
  {
    image: "/images/brand/lexus-icon.png",
    carName: "Lexus",
  },
  {
    image: "/images/brand/chevrolet-icon.png",
    carName: "Chevrolet",
  },
  {
    image: "/images/brand/bmw-icon.png",
    carName: "BMW",
  },
  {
    image: "/images/brand/ferrari-icon.png",
    carName: "Ferrari",
  },
  {
    image: "/images/brand/nissan-icon.png",
    carName: "Honda",
  },
  {
    image: "/images/brand/tesla-icon.png",
    carName: "Tesla",
  },
  {
    image: "/images/brand/porsche-icon.png",
    carName: "Porsche",
  },
  {
    image: "/images/brand/subaru-icon.png",
    carName: "Subaru",
  },
  {
    image: "/images/brand/toyota-icon.png",
    carName: "Toyota",
  },
  {
    image: "/images/brand/hyundai-icon.png",
    carName: "Hyundai",
  },
  {
    image: "/images/brand/jeep-icon.png",
    carName: "Jeep",
  },
];

const CarBrand = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#F6F6F6] font-plus-jakarta w-full px-[146px] py-[61px]">
      <div className="flex flex-col gap-8 w-full max-w-[1148px] mx-auto">
        <div>
          <h3 className="font-plus-jakarta text-[36px] font-semibold text-[#101828]">
            Browse by Car Brands
          </h3>
        </div>
        <div className="grid grid-cols-6 gap-10">
          {brand.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-xl gap-2 w-40 h-[153px] bg-white shadow hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex justify-center items-center bg-[#F6F6F6] h-[67px] w-[67px] rounded-full p-2">
                <img src={item.image} alt="" />
              </div>
              <p className="font-plus-jakarta font-semibold">{item.carName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarBrand;
