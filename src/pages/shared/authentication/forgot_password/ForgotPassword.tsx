import { Link, useNavigate } from "react-router-dom";
import { AccountCard } from "../component/Account";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleResetCode = () => {
    navigate("/reset-password");
    console.log("clicked");
  };

  return (
    <div className="mx-auto w-full h-full p-24 font-plus-jakarta bg-[url('/images/auth/bg-row.webp')]">
      <AccountCard
        icon={
          <img
            src="/images/auth/forgot-password-icon.webp"
            alt="a user with a key icon"
          />
        }
        header="Forgot Your Password"
        subtitle="Enter your registered email address, and we'll send you a reset code."
      >
        <div className="flex flex-col gap-6">
          <form>
            <label className="capitalize flex flex-col gap-1 text-[#333333]">
              email address
              <input
                type="email"
                placeholder="We'll send a 6-digit reset code to this address."
                className="w-full rounded-xl border border-[#E2E2E2] outline-none px-3 py-[17px]"
              />
            </label>
          </form>

          <button
            onClick={() => handleResetCode()}
            className="bg-[#072C59] text-white text-[14px] font-plus-jakarta w-full py-[17px] rounded-xl"
          >
            <p>Send Reset Code</p>
          </button>
        </div>
      </AccountCard>

      <div className="flex justify-center gap-1 w-full mt-[35px]">
        <Link to="/sign-in" className="text-[#072C59] font-bold">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
