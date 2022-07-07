import "./App.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import BackgroundAnimation from "./Components/BackgroundAnimation/index";
import AboutMe from "./Components/AboutMe/index";
import Hero from "./Components/Hero/index";
import FeaturedCards from "./Components/FeaturedCards";
import ProjectCards from "./Components/ProjectCards";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Coverflow from "./Components/Carousel";
import Nav from "./Nav";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <BackgroundAnimation />
      </div>
      <Nav />
      <Hero className="hero-card" />
      <AboutMe className="full-height" />
      <FeaturedCards className="featured-section" />
      <ProjectCards />
      <Coverflow className="contact-section" />
      <Footer className="footer" />
    </>
  );
}

export default App;
