import { React } from "react";

function Nav() {
  return (
    <nav id="navbar" className="navbar">
      <ul className="nav-menu">
        <li>
          <a data-scroll="home" href="#home" className="dot">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a data-scroll="about" href="#about" className="dot">
            <span>About</span>
          </a>
        </li>
        <li>
          <a data-scroll="featured" href="#featured" className="dot">
            <span>Spotlight</span>
          </a>
        </li>
        <li>
          <a data-scroll="work" href="#projects" className="dot">
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a data-scroll="contact" href="#contact" className="dot">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
