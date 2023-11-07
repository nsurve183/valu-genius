import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to='/'>
            <img src="../../public/logo.webp" className="img_fluid" alt="pic not found" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mt-lg-0 mt-3">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">OUR TEAM</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">BLOG</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
