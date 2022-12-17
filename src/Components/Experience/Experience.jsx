import React from 'react'
import "./Experience.css";

function Experience() {
    return (
        <div className="experience" id='experience'>
          <div className="achievement">
            {/* darkMode */}
            <div className="circle" style={{}}>8+</div>
            <span  style={{}}>years </span>
            <span>Experience</span>
          </div>
          <div className="achievement">
            <div className="circle" style={{}}>20+</div>
            <span  style={{}}>completed </span>
            <span>Projects</span>
          </div>
          <div className="achievement">
            <div className="circle" style={{}}>5+</div>
            <span  style={{}}>companies </span>
            <span>Work</span>
          </div>
        </div>
      );
}

export default Experience