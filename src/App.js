import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/index";
import AboutMe from "./Components/AboutMe/index";
import Hero from "./Components/Hero/index";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <BackgroundAnimation />
      </div>
      <Hero className="hero-card" />
      <AboutMe className="full-height" />
    </>
  );
}

export default App;
