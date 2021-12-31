import React from "react";
import Seperator from "../common/seperator/seperator";
import "./Skill.css";
import { SkillData } from "../data/SkillData";
import SkillCard from "./skillCard";

function Skill() {
  const data = SkillData;
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">Skills</label>
      {data.map((item) => {
        return (
          <div className="skills-section">
            <label className="skills-section-title">{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skill;
