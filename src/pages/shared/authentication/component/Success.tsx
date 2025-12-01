import { useNavigate } from "react-router-dom";
import {
  accountCardVariants,
  headerVariants,
  subtitleVariants,
} from "./AccountCVA";
import BeamingCheckmark from "./BeamingCheckmark";

const Success = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center mx-auto w-full h-full p-24 font-plus-jakarta bg-[url('/images/auth/bg-row.webp')]">
      <div className={`${accountCardVariants()} text-center`}>
        <div className="absolute top-0 left-0 right-0 bg-linear-to-b from-[#157DFF36] to-[#157DFF00] h-[170px]"></div>
        <div>
          <BeamingCheckmark />
        </div>

        <h1 className={headerVariants()}>Welcome to CJ Autos, Prince</h1>

        <p className={subtitleVariants()}>
          You can now start browsing verified cars, booking inspections, and
          managing your profile.
        </p>

        <div className="mt-6">
          <button
            onClick={() => handleSubmit()}
            className="bg-[#072C59] text-white text-[14px] font-plus-jakarta capitalize w-full py-[17px] rounded-xl"
          >
            <p>continue to dashboard</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
