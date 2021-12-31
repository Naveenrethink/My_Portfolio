import React from "react";
import "./Projects.css";
import { ProjectData } from "../data/projects-data";
import ProjectCard from "./projects-card/projects-card";
import Seperator from "../common/seperator/seperator";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      {data.map((item) => {
        return <ProjectCard item={item} />;
      })}
    </div>
  );
}

export default Projects;
