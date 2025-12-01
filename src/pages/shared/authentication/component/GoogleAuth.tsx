const GoogleAuth = () => {
  return (
    <button className="flex justify-center items-center gap-2.5 w-full py-4 border border-[#E2E2E2] rounded-xl font-plus-jakarta">
      <img
        src="/images/auth/google-icon.webp"
        alt="a google icon"
        className="w-[25px] h-[25px]"
      />
      <p className="text-[#747474]">Continue using Google</p>
    </button>
  );
};

export default GoogleAuth;
