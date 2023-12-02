

import React from "react";
import '../../Scss/Contact/_contactbanner.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <div>
      <div className="contactBanner">
        <h1 className="contact_title">Contact Us</h1>
        <Link to={'/'} className="contact_para">
          Home  <FontAwesomeIcon icon={faAngleRight} className="contactArorwIcon"/> <span className="contact_span">Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutBanner;
