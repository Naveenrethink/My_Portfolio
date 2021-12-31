import React from "react";
import About from "../about/about";
import Contact from "../contact/contact";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="homePage">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
