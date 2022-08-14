import React from "react";
import "./Intro.css";
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';

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
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
      <div className="i-right">i am right side</div>
    </div>
  );
}

export default Intro;
