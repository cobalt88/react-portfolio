import React from "react";
import { Card } from "react-bootstrap";

const projectProps = [
  {
    title: "Random Password Generator",
    Description:
      "A simple JavaScript based password generator that generates random passwords with varying complexity based on user input.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    github: "https://github.com/cobalt88/random-pass-generator",
    live: "https://cobalt88.github.io/random-pass-generator/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

function ProjectCards() {
  return (
    <section className="project-section" id="projects">
      <Card className="section-header">
        <h2>Projects</h2>
      </Card>
      <Card className="project-card grow">
        <div className="card-header">Test Project Card Header</div>
        <div className="card-body">
          Test body section for the standard project card. A brief description
          of the project will go here.
        </div>
        <div className="card-footer">Card Footer - Icons Go Here</div>
      </Card>
      {projectProps.map((project, index) => (
        <Card className="project-card grow" key={index}>
          <div className="card-header">{project.title}</div>
          <div className="card-body">
            <p>{project.Description}</p>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <a href={project.github}>
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="card-footer-item">
              <a href={project.live}>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div className="project-tech">
              {project.technologies.map((tech, index) => {
                switch (tech) {
                  case "HTML":
                    return <i className="fab fa-html5" key={index}></i>;
                  case "CSS":
                    return <i className="fab fa-css3-alt" key={index}></i>;
                  case "JavaScript":
                    return <i className="fab fa-js" key={index}></i>;
                  case "jQuery":
                    return <i className="fab fa-jquery" key={index}></i>;
                  case "React":
                    return <i className="fab fa-react" key={index}></i>;
                  case "Node":
                    return <i className="fab fa-node" key={index}></i>;
                  case "Express":
                    return <i className="fab fa-express" key={index}></i>;
                  case "MongoDB":
                    return <i className="fab fa-mongodb" key={index}></i>;
                  case "MySQL":
                    return <i className="fab fa-mysql" key={index}></i>;
                  case "C++":
                    return <i className="fab fa-cpp" key={index}></i>;
                  case "C#":
                    return <i className="fab fa-csharp" key={index}></i>;
                  case "Python":
                    return <i className="fa-brands fa-python" key={index}></i>;
                  case "GraphQL":
                    return <i className="fab fa-graphql" key={index}></i>;
                }
              })}
              ;
            </div>
          </div>
        </Card>
      ))}
      ;
    </section>
  );
}

export default ProjectCards;
