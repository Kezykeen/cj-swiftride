import { Link, useNavigate } from "react-router-dom";
import { AccountCard } from "../component/Account";
import OtpInput from "../component/OtpInput";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const handleResetCode = () => {
    navigate("/sign-up-detailed");
    console.log("clicked");
  };

  return (
    <div className="flex items-center mx-auto w-full h-full p-24 font-plus-jakarta bg-[url('/images/auth/bg-row.webp')]">
      <div className="w-full">
        <AccountCard
          icon={
            <img
              src="/images/auth/message-icon.webp"
              alt="a user with a key icon"
            />
          }
          header="Enter Reset Code"
          subtitle="Please enter the 6 digit code we sent to prince*****@gmail.com."
        >
          <div className="flex flex-col gap-6">
            <OtpInput />
            <div className="flex justify-between gap-1 w-full">
              <p className="text-[#898483] font-semibold">
                Didn't receive any OTP?
              </p>
              <Link to="/sign-up" className="text-[#072C59] font-semibold">
                Resend in 10:56
              </Link>
            </div>
            <button
              onClick={() => handleResetCode()}
              className="bg-[#072C59] text-white text-[14px] cursor-pointer font-plus-jakarta w-full py-[17px] rounded-xl"
            >
              <p>Verify & Continue</p>
            </button>
          </div>
        </AccountCard>
        <div className="flex justify-center gap-1 w-full mt-[35px]">
          <Link to="/sign-up" className="text-[#072C59] font-bold">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
