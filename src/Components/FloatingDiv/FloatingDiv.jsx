import React from 'react'
import './FloatingDiv.css'

function FloatingDiv(props) {
    console.log(props,"its my props");
  return (
    <div className="floatingdiv">
        <img src={props.img} alt="" />
        <span>
            {props.text1}
            <br />
            {props.text2}
        </span>
    </div>
  )
}

export default FloatingDiv