import React from "react";
import { Card } from "react-bootstrap";


const projectProps = [
  {
    title: "Random Password Generator",
    description:
      "A simple JavaScript based password generator that generates random passwords with varying complexity based on user input.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/cobalt88/random-pass-generator",
    live: "https://cobalt88.github.io/random-pass-generator/",
  },
  {
    title: "Regex Breakdown",
    description:
      "This is the first of a planned series of Regex tutorials intended to help others understand the basics of regular expressions.",
    technologies: ["Git"],
    github: "https://gist.github.com/cobalt88/347e3b90dea7f1509b175efe11e77149",
    live: "https://cobalt88.github.io/regex-breakdown/",
  },
  {
    title: "The Rabbit Hole",
    description:
      'The Rabbit Hole is a tech blog with the purpose of giving developers a place to store/document and share their "Rabbit Holes" or deep dives into a particular subject in search of a particular kernel of information.',
    technologies: ["MySQL", "Node", "Express", "JavaScript"],
    github: "https://github.com/beimy/tech-blog",
    live: "https://therabbithole-blog.herokuapp.com/",
  },
  {
    title: "Employee Tracker",
    description:
      'Employee Tracker is a command line application that allows the user to view, add, and update employees, roles, and departments in a MySQL database.',
    technologies: ["MySQL", "Node", "Express", "JavaScript"],
    github: "https://github.com/beimy/tech-blog",
    live: "https://therabbithole-blog.herokuapp.com/",
  },
  {
    title: "FrankenPrinter",
    description:
      'The FrankenPrinter project was my first foray into C++, Python, and firmware modification. This 3D printer firmware is based off the early Marlin 2.0.x project. ',
    technologies: ["Python", "C++", "C", "Git"],
    github: "https://github.com/cobalt88/Frankenprinter",
    live: "https://github.com/cobalt88/Frankenprinter",
  }
];

function ProjectCards() {
  return (
    <section className="project-section" id="projects">
      <Card className="section-header">
        <h2>Projects</h2>
      </Card>
      {projectProps.map((project, index) => (
        <Card className="project-card grow" key={index}>
          <div className="card-header">{project.title}</div>
          <div className="card-body">
            <p>{project.description}</p>
          </div>
          <div className="project-card-footer">
            <div className="card-footer-links">
              <a href={project.github}>
                <i className="fab fa-github fa-lg"><span className="icon-label">GitHub Repository</span></i>
              </a>{" "}
              <a href={project.live}>
                <i className="fas fa-external-link-alt fa-lg"><span className="icon-label">Take Me There!</span></i>
              </a>
            </div>
            <div className="project-tech">
              {project.technologies.map((tech, index) => {
                switch (tech) {
                  case "HTML":
                    return <i className="fab fa-html5 fa-3x" key={index}></i>
                  case "CSS":
                    return <i className="fab fa-css3-alt fa-3x" key={index}></i>
                  case "JavaScript":
                    return <i className="fab fa-js fa-3x" key={index}></i>
                  case "jQuery":
                    return <i className="fab fa-jquery fa-3x" key={index}></i>
                  case "React":
                    return <i className="fab fa-react fa-3x" key={index}></i>
                  case "Node":
                    return <i className="fab fa-node fa-2x" key={index}></i>
                  case "Express":
                    return <i className="fab fa-express fa-3x" key={index}></i>
                  case "MongoDB":
                    return <i className="fab fa-mongodb fa-3x" key={index}></i>
                  case "MySQL":
                    return <i className="fa-solid fa-server fa-3x" key={index}></i>
                  case "C++":
                    return <i class="devicon-cplusplus-line" id="cpp-icon" alt="C++" key={index} />
                  case "C#":
                    return <i className="fab fa-c fa-3x" key={index}></i>
                  case "Python":
                    return <i className="fa-brands fa-python fa-3x" key={index}></i>
                  case "GraphQL":
                    return <i className="fab fa-graphql fa-3x" key={index}></i>
                  case "Git":
                    return <i className="fab fa-github fa-3x" key={index}></i>
                }
              })}
            </div>
          </div>
        </Card>
      ))}
      ;
    </section>
  );
}

export default ProjectCards;
