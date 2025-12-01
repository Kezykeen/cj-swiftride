import DashboardPreview from "../component/DashboardPreview";
import FAQs from "../component/FAQs";
import GetInTouch from "../component/GetInTouch";
import Stats from "../component/Stats";
import Testimonial from "../component/Testimonial";

const AboutUs = () => {
  return (
    <div>
      <Stats />
      <DashboardPreview />
      <Testimonial />
      <FAQs />
      <GetInTouch />
    </div>
  );
};

export default AboutUs;
