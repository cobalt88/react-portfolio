import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/index";
import AboutMe from "./Components/AboutMe/index";
import Hero from "./Components/Hero/index";
import FeaturedCards from "./Components/FeaturedCards";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <BackgroundAnimation />
      </div>
      <Hero className="hero-card" />
      <AboutMe className="full-height" />
      <FeaturedCards className="featured-section" />
    </>
  );
}

export default App;
