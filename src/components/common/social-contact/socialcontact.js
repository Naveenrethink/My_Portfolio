import React from "react";
import "./socialcontact.css";
import { SocialData } from "../../data/social";
function socialcontact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <div>
            <a href={item.link}>
              <div className="social-icon-div">
                <img
                  src={item.icon}
                  className="social-icon"
                  alt={item.platform}
                />
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default socialcontact;
