import React from "react";
import "../../Scss/About/_aboutbanner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <div>
      <div className="aboutbanner">
        <h1 className="about_title">About Us</h1>
        <Link to={'/'} className="about_para">
          Home  <FontAwesomeIcon icon={faAngleRight} className="aboutArorwIcon"/> <span className="about_span">About Us</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutBanner;
