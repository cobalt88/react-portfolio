import React from "react";
import { Card } from "react-bootstrap";


const projectProps = [
  // {
  //   title: "Random Password Generator",
  //   description:
  //     "A simple JavaScript based password generator that generates random passwords with varying complexity based on user input.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/cobalt88/random-pass-generator",
  //   live: "https://cobalt88.github.io/random-pass-generator/",
  // },
  {
    title: "Regex Breakdown",
    description:
      "This is the first of a planned series of Regex tutorials intended to help others understand the basics of regular expressions.",
    technologies: ["Git", "Medium", "Markdown"],
    github: "https://gist.github.com/cobalt88/347e3b90dea7f1509b175efe11e77149",
    live: "https://cobalt88.github.io/regex-breakdown/",
    medium: "https://medium.com/p/dbd2095f7c83",
  },
  {
    title: "The Rabbit Hole",
    description:
      'The Rabbit Hole is a tech blog with the purpose of giving developers a place to store/document and share their "Rabbit Holes" or deep dives into a particular subject in search of a particular kernel of information.',
    technologies: ["MySQL", "Node", "Express", "Handlebars"],
    github: "https://github.com/beimy/tech-blog",
    live: "https://therabbithole-blog.herokuapp.com/",
  },
  {
    title: "Employee Tracker",
    description:
      'Employee Tracker is a command line application that allows the user to view, add, and update employees, roles, and departments in a MySQL database.',
    technologies: ["MySQL", "Node", "Express"],
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
  },
  {
    title: "Reference Site",
    description:
      'My personal reference site for HTML, CSS, RegEx, and more. The entire site is intentionally built with pure HTML and CSS, no frameworks.',
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/cobalt88/reference_site",
    live: "https://cobalt88.github.io/reference_site/",
  },
  {
    title: "DEVise",
    description:
      'DEVise is an experimental platform designed to bring developers of all disciplines together to share their ideas, projects, passions, and to build a community around open source collaboration.',
    technologies: ["React", "Bootstrap", "GraphQL", "MongoDB", "Heroku"],
    github: "https://github.com/Brainybrian316/DEVise",
    live: "https://devise-collaboration-platform.herokuapp.com/",
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
                    return <i className="devicon-nodejs-plain" id="node-icon" key={index}></i>
                  case "Express":
                    return <i className="devicon-express-original" id="express-icon" key={index}></i>
                  case "MongoDB":
                    return <i className="devicon-mongodb-plain-wordmark di-4" ></i>       
                  case "MySQL":
                    return <i className="devicon-mysql-plain" id="mysql-icon" key={index}></i>
                  case "C++":
                    return <i className="devicon-cplusplus-line" id="cpp-icon" alt="C++" key={index} />
                  case "C#":
                    return <i className="fab fa-c fa-3x" key={index}></i>
                  case "Python":
                    return <i className="fa-brands fa-python fa-3x" key={index}></i>
                  case "GraphQL":
                    return <i class="devicon-graphql-plain di-4" key={index}></i>
                  case "Git":
                    return <i className="fab fa-github fa-3x" key={index}></i>
                  case "Medium":
                    return <a href={project.medium}><i className="fa-brands fa-medium fa-3x" key={index}></i></a>
                  case "Handlebars":
                    return <i className="devicon-handlebars-plain" id="handlebars-icon" key={index}></i>
                  case "React":
                    return <i className="devicon-react-original" id="react-icon" key={index}></i>
                  case "Markdown":
                    return <i class="devicon-markdown-original di-4" key={index}></i>
                }
              })}
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}

export default ProjectCards;
