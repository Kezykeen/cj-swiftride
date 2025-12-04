import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "../../../components/Button";
import HeroCounter from "../landing_page/component/HeroCounter";

const images = [
  "/images/hero-car-bg1.png",
  "/images/hero-car-bg2.jpg",
  "/images/hero-car-bg3.png",
  "/images/hero-car-bg4.png",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[calc(100vh-94px)] h-[840px] flex flex-col justify-center items-center overflow-hidden font-plus-jakarta">
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-2000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-black/70"></div>

      {/* Overlay content */}
      <div className="relative flex flex-col items-center z-10 max-w-xl mx-auto mt-10 text-center text-white">
        <HeroCounter />

        <div className="flex flex-col gap-5 items-center my-8">
          <p className="w-[821px] h-[100px] font-plus-jakarta font-bold text-[40px] leading-13 tracking-[0%] text-center">
            Your Trusted Partner for Buying, Paying & Shipping Cars from the
            U.S. and Beyond
          </p>
          <p className="w-full px-35 text-center">
            Whether you're a dealer or an individual buyer, we help you handle
            everything from payment to delivery, globally.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            label="Get Started"
            className="text-[#072C59] border-0"
            icon={<FiArrowUpRight />}
            onClick={() => console.log("clicked")}
          />
          <Button
            label="Search for Car"
            variant="outline"
            className=""
            icon={<FiArrowUpRight />}
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
