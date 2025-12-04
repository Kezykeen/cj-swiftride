import { Link, useNavigate } from "react-router-dom";
import { AccountCard } from "../component/Account";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import type { CountryIso2 } from "react-international-phone";
import "react-international-phone/style.css";

const SignUpMore = () => {
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState<CountryIso2>("ng");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/success");
  };

  const phoneInput = usePhoneInput({
    defaultCountry: country,
    value: phone,
    onChange: (data) => {
      setPhone(data.phone);
    },
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCountryChange = (iso2: CountryIso2) => {
    setCountry(iso2);
    phoneInput.setCountry(iso2);
  };

  return (
    <div className="flex items-center mx-auto w-full h-full p-24 font-plus-jakarta bg-[url('/images/auth/bg-row.webp')]">
      <div className="w-full">
        <AccountCard
          icon={<img src="/images/auth/user-icon.webp" alt="a user icon" />}
          header="Create Your CJ Autos Account"
          subtitle="Set up your account in minutes to start browsing and booking inspections."
        >
          <div className="flex flex-col gap-6">
            <form className="flex flex-col gap-6">
              <label className="capitalize flex flex-col gap-1 text-[#333333]">
                full name
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name."
                    className="w-full rounded-xl border border-[#E2E2E2] outline-none px-3 py-[17px]"
                  />
                </div>
              </label>
              {/* Phone Number - Separate Country Selector and Input */}
              <label className="capitalize flex flex-col gap-1 text-[#333333]">
                phone number
                <div className="flex rounded-xl border border-[#E2E2E2] overflow-hidden py-2">
                  {/* Country Selector */}
                  <CountrySelector
                    selectedCountry={country}
                    onSelect={(country) => handleCountryChange(country.iso2)}
                    renderButtonWrapper={({ children, rootProps }) => (
                      <button
                        {...rootProps}
                        type="button"
                        className="flex items-center gap-2 h-12 pl-4 bg-white hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-2">
                          {children}
                        </div>
                      </button>
                    )}
                  />
                  <input
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 h-12 outline-none pr-3"
                  />
                </div>
              </label>
              <label className="capitalize flex flex-col gap-1 text-[#333333]">
                password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
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
            <div className="flex gap-2 items-center text-[14px]">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" className="h-5 w-5" />
                <p className="text-[#747474]">I agree to the</p>
              </div>
              <Link
                to="/forgot-password"
                className="font-semibold text-[#072C59]"
              >
                Privacy Policy
              </Link>
              <p className="text-[#747474]">and</p>
              <Link
                to="/forgot-password"
                className="font-semibold text-[#072C59]"
              >
                Terms of Service
              </Link>
            </div>
            <button
              onClick={() => handleSubmit()}
              className="bg-[#072C59] text-white text-[14px] cursor-pointer font-plus-jakarta w-full py-[17px] rounded-xl"
            >
              <p>Create Account</p>
            </button>
          </div>
        </AccountCard>
        <div className="flex justify-center gap-1 w-full mt-[35px]">
          <p className="text-[#898483] font-semibold">
            Already have an account?
          </p>
          <Link to="/sign-in" className="text-[#072C59] font-bold">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpMore;
