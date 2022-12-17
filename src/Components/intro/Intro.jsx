import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

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
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src= {glassesimoji} alt=""/>
        <div className="i-floaters-crown">
          <FloatingDiv img = {crown} text1 = 'web' text2 = 'developer'  />
        </div>

        <div style={{top:'18rem', left:'0rem'}}>
          <FloatingDiv img = {thumbup} text1 = 'Elegant Design' text2 = ''  />
        </div>
        {/* blur div */}
        <div className="blur" ></div>
        <div className="blur"
        style={{
          background:'#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'
        }}
         ></div>

      </div>
    </div>
  );
}

export default Intro;
