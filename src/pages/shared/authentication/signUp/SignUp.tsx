import { Link, useNavigate } from "react-router-dom";
import { AccountCard } from "../component/Account";
import GoogleAuth from "../component/GoogleAuth";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/verify-email");
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
            <form>
              <label className="capitalize flex flex-col gap-1 text-[#333333]">
                email address
                <input
                  type="email"
                  placeholder="We'll send your verification code here."
                  className="w-full rounded-xl border border-[#E2E2E2] outline-none px-3 py-[17px]"
                />
              </label>
            </form>
            <button
              onClick={() => handleSubmit()}
              className="bg-[#072C59] text-white text-[14px] cursor-pointer font-plus-jakarta w-full py-[17px] rounded-xl"
            >
              <p>Proceed</p>
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
          <p className="text-[#898483] font-semibold">
            Already have an account?
          </p>
          <Link to="/sign-in" className="text-[#072C59] font-semibold">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
