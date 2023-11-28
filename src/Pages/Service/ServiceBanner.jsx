

import React from 'react'
import '../../Scss/Service/_servicebanner.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceBanner = () => {
  return (
    <div>
    <div className="servicebanner">
      <h1 className="service_title">Serivces</h1>
      <Link to={'/'} className="service_para">
        Home  <FontAwesomeIcon icon={faAngleRight} className="serviceArorwIcon"/> <span className="service_span">Services</span>
      </Link>
    </div>
  </div>
  )
}

export default ServiceBanner