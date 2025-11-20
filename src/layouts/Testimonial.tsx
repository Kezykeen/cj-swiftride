const testimonialCard = [
  {
    image: "/images/testimonial-image.jpg",
    title: "Albert Flores",
    location: "Lagos",
  },
  {
    image: "/images/testimonial-image2.jpg",
    title: "Lesile Alexander",
    location: "Enugu",
  },
  {
    image: "/images/testimonial-image3.png",
    title: "Courtney Henry",
    location: "Abuja",
  },
  {
    image: "/images/testimonial-image4.jpg",
    title: "Courtney Henry",
    location: "Ibadan",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-[199px] py-20 pb-[91px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <span className="text-blue-500 text-xl font-semibold font-plus-jakarta">
            <p>Testimonials</p>
          </span>
        </div>
        {/* Headings */}
        <h2 className="text-[36px] font-semibold text-center font-plus-jakarta">
          Over 1000+people trust us
        </h2>
        <p className="text-[#6B6B6B] text-[18px] text-center w-3xl font-medium font-plus-jakarta">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>
      </div>

      {/* testimonial card */}
      <div className="flex gap-5">
        {testimonialCard.map((item, index) => (
          <div
            key={index}
            className="group w-[272px] h-[490px] rounded-xl relative overflow-hidden flex items-end text-white cursor-pointer"
          >
            {/* background overlay */}
            <div className="h-full w-full bg-linear-to-b from-transparent via-transparent to-black/80 absolute -z-1"></div>

            <img
              src={item.image}
              alt=""
              className="transition-transform duration-500 ease-in-out group-hover:scale-105 absolute w-full h-full object-cover -z-2"
            />

            <div className="w-full p-6">
              <p className="font-semibold text-[14px]">{item.title}</p>
              <p className="text-[12px] text-[#D4D4D8]">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
