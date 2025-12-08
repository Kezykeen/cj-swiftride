const HeroSection = () => {
  return (
    <div className="px-[146px] w-full max-w-[1440px] mx-auto font-plus-jakarta">
      <div className="flex flex-col gap-4 text-[#3D3D3D] py-[65px]">
        <h3 className="text-[40px] w-full max-w-[811px] font-bold">
          Your Trusted Partner for Car Imports and Global Auto Sourcing
        </h3>
        <p className="text-[18px] font-medium w-full max-w-[695px]">
          At CJ Autos, we make it easy for anyone; in Nigeria and beyond to buy,
          bid, and ship cars from trusted U.S. auction platforms like Copart,
          IAAI, and Manheim.
        </p>
      </div>

      <div className="h-[527px] w-full">
        <img src="/images/hero-bg.webp" alt="" />
      </div>

      <div className="flex items-start justify-between my-[76px] h-[371px]">
        {/* story section */}
        <section className="flex flex-col items-start gap-4 w-[469px]">
          <h4 className="text-[#157DFF] font-semibold text-[18px]">
            Our Story
          </h4>
          <h5 className="text-[#101828] text-[22px] font-medium leading-11">
            CJ Autos began with one goal which is to bridge the gap between
            international car auctions and everyday buyers in Africa.
          </h5>
          <p className="text-[#A2A0A0] text-[22px] font-medium leading-11">
            Today, hundreds of customers around the world trust CJ Autos to
            source, ship, and deliver vehicles seamlessly.
          </p>
        </section>

        <div className="flex gap-6 h-full">
          {/* mission */}
          <section className="flex flex-col justify-between px-[23px] py-7 w-[303px] h-full bg-[#F6F6F6]">
            <p className="text-[#9F9C9C] text-[18px] font-semibold">
              Our Mission
            </p>
            <p className="text-[#595959]">
              To make global car buying simple, secure, and accessible, helping
              individuals and businesses own quality vehicles through a trusted
              and transparent process.
            </p>
          </section>
          {/* vision */}
          <section className="flex flex-col justify-between px-[23px] py-7 w-[303px] h-full bg-[#E8F2FF]">
            <p className="text-[#9F9C9C] text-[18px] font-semibold">
              Our Vision
            </p>
            <p className="text-[#595959]">
              To become the most trusted car import and auction support brand in
              Africa — known for reliability, innovation, and customer
              satisfaction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
