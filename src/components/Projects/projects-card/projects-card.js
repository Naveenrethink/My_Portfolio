import React from "react";
import "./projects-card.css";

function ProjectCard({ item }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{item.title}</label>
        <div className="project-links">
          {item.demo && (
            <a className="project-link" href={item.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>Website
              </div>
            </a>
          )}
          {item.github && (
            <a className="project-link" href={item.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> Github
              </div>
            </a>
          )}
        </div>
        <p className="para">{item.about}</p>
        <div className="project-tags">
          {item.tag.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={item.image} className="project-image" alt={item.title} />
    </div>
  );
}

export default ProjectCard;
