import React from "react";
import "./skillCard.css";

function skillCard({ skill }) {
  return (
    <div>
      <div className="skill-card">
        <div className="skill-icon">{skill.icon}</div>
        <div className="skill-name">{skill.name}</div>
      </div>
    </div>
  );
}

export default skillCard;
