import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/index";
import AboutMe from "./Components/AboutMe/index";
import Hero from "./Components/Hero/index";

function App() {
  return (
    <div className="page-wrapper">
      <BackgroundAnimation />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
