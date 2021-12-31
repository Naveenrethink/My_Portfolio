import React from "react";
import Seperator from "../common/seperator/seperator";
import Socialcontact from "../common/social-contact/socialcontact";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <Socialcontact />
        </div>
        <div className="download">
          <a download href={require("../../image/resume.pdf").default}>
            <i class="fi fi-rr-download optional" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
