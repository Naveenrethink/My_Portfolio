import React from "react";
import "./web.css";
function web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-diploma option-icon"></i>skills
        </a>
      </div>
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-layers option-icon"></i> Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-address-book option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default web;
