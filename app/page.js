import HomePage from "@/components/HomePage";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonals";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <HomePage />
      <AboutUs />
      <Services />
      <Calculator />
      <Testimonials/>
      <ContactUs />
      <Footer />
    </>
  );
}
