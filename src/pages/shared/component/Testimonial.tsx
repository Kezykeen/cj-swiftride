import { useRef } from "react";

const testimonialCard = [
  {
    icon: "/images/testimonial-quote.png",
    message:
      "Lorem ipsum dolor sit amet consectetur. Lectus felis enim blandit a pretium magna. Nunc pellentesque etiam fames habitant.",
    image: "/images/testimonial-image.webp",
    title: "Prince Chijioke",
    location: "Enugu",
  },
  {
    icon: "/images/testimonial-quote.png",
    message: "Lorem ipsum dolor sit amet consectetur.",
    image: "/images/testimonial-image.webp",
    title: "Prince Chijioke",
    location: "Enugu",
  },
  {
    icon: "/images/testimonial-quote.png",
    message:
      "Lorem ipsum dolor sit amet consectetur. Lectus felis enim blandit a pretium magna. Nunc pellentesque etiam fames habitant.",
    image: "/images/testimonial-image.webp",
    title: "Prince Chijioke",
    location: "Enugu",
  },
  {
    icon: "/images/testimonial-quote.png",
    message:
      "Lorem ipsum dolor sit amet consectetur. Lectus felis enim blandit a pretium magna.",
    image: "/images/testimonial-image.webp",
    title: "Prince Chijioke",
    location: "Enugu",
  },
  {
    icon: "/images/testimonial-quote.png",
    message:
      "Lorem ipsum dolor sit amet consectetur. Lectus felis enim blandit a pretium magna. Nunc pellentesque etiam fames habitant.",
    image: "/images/testimonial-image.webp",
    title: "Prince Chijioke",
    location: "Enugu",
  },
];

const Testimonial = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center gap-12 pt-[199px] py-20 pb-[91px] overflow-x-hidden font-plus-jakarta">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <span className="text-blue-500 text-xl font-semibold">
            <p>Testimonials</p>
          </span>
        </div>
        <h2 className="text-[36px] font-semibold text-center">
          Over 1000+people trust us
        </h2>
        <p className="text-[#6B6B6B] text-[18px] text-center w-3xl font-medium">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>
      </div>

      {/* card */}
      <div className="w-full gap-5 px-4 md:px-0">
        <div
          ref={scrollContainerRef}
          className="flex items-start w-full max-w-[1440px] mx-auto gap-[31px] overflow-x-scroll overflow-y-hidden scrollbar-hide px-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonialCard.map((item, index) => (
            <div
              key={index}
              className="bg-[#E8F2FF] group w-[334px] h-auto min-h-0 rounded-[20px] relative flex flex-col justify-between gap-[76px] text-[#6B6B6B] px-3.5 py-6 shrink-0"
            >
              {/* first section */}
              <div className="flex flex-col gap-5">
                <img
                  src={item.icon}
                  alt="a quote icon"
                  className="aspect-square w-[53px]"
                />
                <p className="text-[16px] font-medium leading-[31px]">
                  {item.message}
                </p>
              </div>

              {/* second section */}
              <div className="flex items-center gap-2 w-full">
                <div className="w-[59px] aspect-square rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold font-">{item.title}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* made the scrollbar hidden*/}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
