import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/index";
import AboutMe from "./Components/AboutMe/index";
import Hero from "./Components/Hero/index";
import FeaturedCards from "./Components/FeaturedCards";
import ProjectCards from "./Components/ProjectCards";

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
    </>
  );
}

export default App;
