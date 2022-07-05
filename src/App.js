import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/index";
import AboutMe from "./Components/AboutMe/index";
import Hero from "./Components/Hero/index";
import FeaturedCards from "./Components/FeaturedCards";
import ProjectCards from "./Components/ProjectCards";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <BackgroundAnimation />
      </div>
      <Hero className="hero-card" />
      <AboutMe className="full-height" />
      <FeaturedCards className="featured-section" />
      <ProjectCards className="project-section" />
      <Contact className="contact-section" />
      <Footer className="footer" />
    </>
  );
}

export default App;
