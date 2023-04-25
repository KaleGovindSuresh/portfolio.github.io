import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1> My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;