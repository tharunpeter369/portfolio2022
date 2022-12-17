import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Tharun</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiance</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button n-button">
                contact
            </button>
        </div>

    </div>
  )
}

export default Navbar