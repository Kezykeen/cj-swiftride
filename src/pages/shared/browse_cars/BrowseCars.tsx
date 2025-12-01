import CarBrand from "../component/CarBrand";
import FAQs from "../component/FAQs";
import GetInTouch from "../component/GetInTouch";
import Testimonial from "../component/Testimonial";

const BrowseCars = () => {
  return (
    <div>
      <CarBrand />
      <Testimonial />
      <FAQs />
      <GetInTouch />
    </div>
  );
};

export default BrowseCars;
