import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Oii! I am</span>
          <span>Tharun Peter</span>
          <span>
            Frontent and Backend Developer with high leverl of experience in web
            desingning and development, producing the Quality work
          </span>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icons">
          <a href="https://www.google.com/">
            <img src={Github} alt="" />
          </a>
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">i am right side</div>
    </div>
  );
}

export default Intro;
