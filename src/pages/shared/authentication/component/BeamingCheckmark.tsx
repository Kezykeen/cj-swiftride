export default function BeamingCheckmark() {
  return (
    <div className="flex items-center justify-center mb-[22px]">
      <div className="relative">
        {/* Outer beam */}
        <div
          className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Middle beam */}
        <div
          className="absolute inset-0 rounded-full bg-blue-400 opacity-25 animate-ping"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        ></div>

        {/* Inner beam */}
        <div
          className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"
          style={{ animationDuration: "3s", animationDelay: "2s" }}
        ></div>

        {/* Core circle with checkmark */}
        <div className="relative w-[82px] h-[82px] bg-[#157DFF] rounded-full flex items-center justify-center shadow-lg">
          <img
            src="/images/auth/check.webp"
            alt=""
            className="w-[35.14px] h-[35.14px]"
          />
        </div>
      </div>
    </div>
  );
}
