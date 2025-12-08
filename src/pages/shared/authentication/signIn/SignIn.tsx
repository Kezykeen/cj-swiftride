import { Link, useNavigate } from "react-router-dom";
import { AccountCard } from "../component/Account";
import GoogleAuth from "../component/GoogleAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mx-auto w-full h-full p-24 font-plus-jakarta bg-[url('/images/auth/bg-row.webp')]">
      <AccountCard
        icon={<img src="/images/auth/user-icon.webp" alt="a user icon" />}
        header="Welcome Back to CJ Autos"
        subtitle="Log in to explore cars, manage your account, or book an inspection."
      >
        <div className="flex flex-col gap-6">
          <form className="flex flex-col gap-6">
            <label className="capitalize flex flex-col gap-1 text-[#333333]">
              email address
              <input
                type="email"
                placeholder="Enter your email address."
                className="w-full rounded-xl border border-[#E2E2E2] outline-none px-3 py-[17px]"
              />
            </label>
            <label className="capitalize flex flex-col gap-1 text-[#333333]">
              password
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
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>
            </label>
          </form>

          <div className="flex justify-between items-center text-[14px]">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" className="h-5 w-5" />
              <p className="text-[#747474]">Keep me signed in</p>
            </div>
            <Link
              to="/forgot-password"
              className="font-semibold text-[#072C59]"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            onClick={() => handleSubmit()}
            className="bg-[#072C59] text-white text-[14px] cursor-pointer font-plus-jakarta w-full py-[17px] rounded-xl"
          >
            <p>Sign in</p>
          </button>

          <div className="flex justify-center items-center w-full gap-2">
            <div className="w-[188px] text-[#E2E2E2] border"></div>
            <p>Or</p>
            <div className="w-[188px] text-[#E2E2E2] border"></div>
          </div>

          <GoogleAuth />
        </div>
      </AccountCard>

      <div className="flex justify-center gap-1 w-full mt-[35px]">
        <p className="text-[#898483] font-semibold">Don't have an account?</p>
        <Link to="/sign-up" className="text-[#072C59] font-semibold">
          Create account
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
