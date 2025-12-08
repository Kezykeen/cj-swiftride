import { Route, Routes } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";
import LandingPage from "./pages/shared/landingPage/LandingPage";
import DashBoardLayout from "./layouts/DashBoardLayout";
import AuthLayout from "./layouts/AuthLayout";
import AboutUs from "./pages/shared/aboutUs/AboutUs";
import BrowseCars from "./pages/shared/browseCars/BrowseCars";
import SignUp from "./pages/shared/authentication/signUp/SignUp";
import SignIn from "./pages/shared/authentication/signIn/SignIn";
import ForgotPassword from "./pages/shared/authentication/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/shared/authentication/forgotPassword/ResetPassword";
import NewPassword from "./pages/shared/authentication/forgotPassword/NewPassword";
import VerifyEmail from "./pages/shared/authentication/signUp/VerifyEmail";
import SignUpMore from "./pages/shared/authentication/signUp/SignUpDetailed";
import Success from "./pages/shared/authentication/component/Success";
import Dashboard from "./pages/userDashboard/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      {/* shared layout */}
      <Route element={<SharedLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse_cars" element={<BrowseCars />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Route>

      {/* dashboard */}
      <Route element={<DashBoardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/sign-up-detailed" element={<SignUpMore />} />
        <Route path="/success" element={<Success />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
