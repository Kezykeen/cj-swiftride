import DashboardPreview from "../component/DashboardPreview";
import FAQs from "../component/FAQs";
import GetInTouch from "../component/GetInTouch";
import Stats from "../component/Stats";
import Testimonial from "../component/Testimonial";
import HeroSection from "./component/HeroSection";
import Values from "./component/Values";

const AboutUs = () => {
  return (
    <div>
      <HeroSection />
      <Values />
      <Stats />
      <DashboardPreview />
      <Testimonial />
      <FAQs />
      <GetInTouch />
    </div>
  );
};

export default AboutUs;
