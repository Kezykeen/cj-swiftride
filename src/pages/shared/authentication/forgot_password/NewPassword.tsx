import { Link, useNavigate } from "react-router-dom";
import { AccountCard } from "../component/Account";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const NewPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = () => {
    navigate("/success");
  };

  return (
    <div className="flex items-center mx-auto w-full h-full p-24 font-plus-jakarta bg-[url('/images/auth/bg-row.webp')]">
      <div className="w-full">
        <AccountCard
          icon={
            <img
              src="/images/auth/forgot-password-icon.webp"
              alt="a user icon"
            />
          }
          header="Set a New Password"
          subtitle="Choose a strong password you'll easily remember."
        >
          <div className="flex flex-col gap-6">
            <form className="flex flex-col gap-6">
              <label className="capitalize flex flex-col gap-1 text-[#333333]">
                new password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password."
                    className="w-full rounded-xl border border-[#E2E2E2] outline-none px-3 py-[17px]"
                  />
                  <div
                    onClick={handleShowPassword}
                    className="absolute top-[30%] right-3 cursor-pointer text-xl text-[20px] text-[#747474]"
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                </div>
              </label>
              <label className="capitalize flex flex-col gap-1 text-[#333333]">
                confirm new password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Re-enter your password."
                    className="w-full rounded-xl border border-[#E2E2E2] outline-none px-3 py-[17px]"
                  />
                  <div
                    onClick={handleShowPassword}
                    className="absolute top-[30%] right-3 cursor-pointer text-xl text-[20px] text-[#747474]"
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                </div>
              </label>
            </form>
            <button
              onClick={() => handleSubmit()}
              className="bg-[#072C59] text-white text-[14px] cursor-pointer font-plus-jakarta capitalize w-full py-[17px] rounded-xl"
            >
              <p>reset password</p>
            </button>
          </div>
        </AccountCard>
        <div className="flex justify-center gap-1 w-full mt-[35px]">
          <Link to="/reset-password" className="text-[#072C59] font-semibold">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
