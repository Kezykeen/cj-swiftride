import Bidding from "../component/Bidding";
import CarBrand from "../component/CarBrand";
import HowItWorks from "./component/HowItWorks";
import Services from "./component/Services";
import Stats from "../component/Stats";
import Testimonial from "../component/Testimonial";
import TestimonialSubsection from "../component/TestimonialSubsection";
import FAQs from "../component/FAQs";
import DashboardPreview from "../component/DashboardPreview";
import GetInTouch from "../component/GetInTouch";
import HeroSection from "../component/HeroSection";

const LandingPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <HowItWorks />
      <Services />
      <Bidding />
      <Stats />
      <DashboardPreview />
      <Testimonial />
      <TestimonialSubsection />
      <CarBrand />
      <FAQs />
      <GetInTouch />
    </div>
  );
};

export default LandingPage;
