import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/authentication/component/NavBar";
import Footer from "../pages/shared/authentication/component/Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
