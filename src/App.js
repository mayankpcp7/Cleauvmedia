import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Relevants from "./components/Relevants";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Webflow from "./components/Webflow";
import Footer from "./components/Footer";
import Community from "./components/Community";
import Pricingplans from "./components/Pricingplans";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Preloader from "./components/Preloader";
function App() {
  useEffect(() => {
    Aos.init({ once: true, disable: "mobile" });
    Aos.refresh();
  }, []);
  return (
    <>
      <Preloader />
      <div className="overflow-hidden">
        <Hero />
        <Cards />
        <Relevants />
        <Services />
        <Pricingplans />
        <Webflow />
        <Community />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
