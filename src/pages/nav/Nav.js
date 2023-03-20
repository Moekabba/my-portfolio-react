// this folder is  deprecated everthing in app.js
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark static-top "
      id="div-nav"
    >
      {/* <a class="navbar-brand" href="#">Navbar</a> */}
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            {/* <ul className="ul-li"> */}
            <ul class="navbar-nav ms-auto justify-content-end" id="ul-li">
              <li>
                <Link to="/" className="nav-link " aria-current="page">
                  <big style={{ color: "m green " }}>About me</big>
                </Link>
              </li>
              <li>
                <Link to="work" className="nav-link">
                  <big style={{ color: "m green " }}>Work</big>
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
      </div>
    </nav>
  );
}

export default Nav;
