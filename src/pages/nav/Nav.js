import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"


function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <ul className='ul-li'>
        <li>
                <Link to="/" className="nav-link">
                  <big style={{ color: "m green " }}>About me</big>
                </Link>
    </li> 
    <li>
                <Link to="work" className="nav-link">
                  <big style={{ color: "m green " }}>Works</big>
                </Link>
    </li> 
    
    <li>
                <Link to="resume" className="nav-link">
                  <big style={{ color: "m green " }}>Resume</big>
                </Link>
    </li> 
    <li>
                <Link to="contact" className="nav-link">
                  <big style={{ color: "m green " }}>Get In Touch</big>
                </Link>
    </li> 

        </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Nav