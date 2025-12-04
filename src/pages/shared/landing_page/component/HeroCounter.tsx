const HeroCounter = () => {
  return (
    <div className="flex items-center gap-4 bg-white px-2 py-1 rounded-full shadow">
      {/* <!-- Avatars --> */}
      <div className="flex -space-x-2">
        <img
          className="w-7 h-7 rounded-full"
          src="/images/hero-avatar1.png"
          alt="hero-avatar2.png"
        />
        <img
          className="w-7 h-7 rounded-full"
          src="/images/hero-avatar2.png"
          alt="hero-avatar2.png"
        />
        <img
          className="w-7 h-7 rounded-full"
          src="/images/hero-avatar3.png"
          alt="hero-avatar2.png"
        />
        <img
          className="w-7 h-7 rounded-full"
          src="/images/hero-avatar4.png"
          alt="hero-avatar2.png"
        />
        <img
          className="w-7 h-7 rounded-full"
          src="/images/hero-avatar5.png"
          alt="hero-avatar2.png"
        />
        <div className="flex items-center justify-center w-7 h-7 bg-blue-200 text-[12px] font-medium text-[#414141] rounded-full">
          1K+
        </div>
      </div>

      {/* <!-- Text --> */}
      <span className="text-[#012F32] text-xs">
        Over 1,200 happy customers and counting
      </span>
    </div>
  );
};

export default HeroCounter;
