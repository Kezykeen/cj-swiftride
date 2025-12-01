import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/component/NavBar";
import Footer from "../pages/shared/component/Footer";

const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
