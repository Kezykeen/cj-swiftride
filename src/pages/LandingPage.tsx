import Bidding from "../layouts/Bidding"
import CarBrand from "../layouts/CarBrand"
import DashboardPreview from "../layouts/DashboardPreview"
import FAQs from "../layouts/FAQs"
import Footer from "../layouts/Footer"
import GetInTouch from "../layouts/GetInTouch"
import HeroSection from "../layouts/HeroSection"
import HowItWorks from "../layouts/HowItWorks"
import NavBar from "../layouts/NavBar"
import Services from "../layouts/Services"
import Stats from "../layouts/Stats"
import Testimonial from "../layouts/Testimonial"
import TestimonialSubsection from "../layouts/TestimonialSubsection"

const LandingPage = () => {
  return (
    <div className="w-full">
        <NavBar />
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
        <Footer />
    </div>
  )
}

export default LandingPage
