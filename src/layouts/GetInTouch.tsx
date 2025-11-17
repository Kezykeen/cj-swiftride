import Button from "../components/Button";

const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-10 bg-[#F9FAFB] mt-15 rounded-xl font-plus-jakarta mb-20 w-[1216px] mx-auto">
      {/* avatar */}
      <div className="relative flex items-center gap-5">
        <img src="/images/get-in-touch-avatar1.png" alt="" />
        <img
          src="/images/get-in-touch-avatar2.png"
          alt=""
          className="absolute left-[25%] bottom-0"
        />
        <img src="/images/get-in-touch-avatar3.png" alt="" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="font-semibold text-[20px] text-[#101828]">
          Still have questions?
        </h3>
        <p className="text-[18px] text-[#667085]">
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </p>
      </div>

      <Button
        label="Get in touch"
        variant="secondary"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
};

export default GetInTouch;
