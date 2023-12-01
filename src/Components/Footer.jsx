import React from "react";
import "../Scss/_footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    console.log(year)

    const location = useLocation()
  return (
    <>
        {location.pathname === '/blog' ?   <div className="blogfooterContent d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
              <h4 className="blogfooterText">&#169; {year}  ValuGenius Advisor LLP | Managed by WebKaam Computing Technology</h4>
          </div>
        </div>
      </div> :  <div className="footerSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-lg-0 mb-5">
              <div className="card about_card">
                <div className="about_title">ABOUT US</div>
                <p className="about_text">
                  ValuGenius is a IBBI Registered Valuation firm situated in
                  Mumbai, India. We are actively engaged in offering Valuation
                  and advisory support to Indian and foreign companies.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-12 mb-lg-0 mb-5">
              <div className="service_title">SERVICES</div>
              <ul className="service_list">
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text"> Business Valuation</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text"> RBI Valuations</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text"> ESOP Valuations</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text"> Ind As Valuations</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text">Intangible assets Valuations</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text"> Fairness Opinion Valuations</div>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-12 mb-lg-0 mb-5">
              <div className="service_title">Links</div>
              <ul className="service_list">
              <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text"> Home</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text">About Us</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text">Services</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text">Our Team</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text">Blog</div>
                </li>
                <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text">Contact Us</div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-12 mb-lg-0 mb-5">
              <div className="service_title">Contact Us</div>
              <ul className="service_list">
              <li className="service_link">
                  <div>
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      className="list_icon me-3"
                    />
                  </div>
                  <div className="service_text">+91 8879195030</div>
                </li>
                <li className="service_link">
                  <div><FontAwesomeIcon
                    icon={faEnvelope}
                    className="list_icon me-3"
                  /></div>
                  <div className="service_text">jainam@valugenius.in</div>
                </li>
                <li className="service_link mt-2">
                  <FacebookIcon className="ficons" />
                  <InstagramIcon className="iicons ms-3 me-3" />
                  <LinkedInIcon className="licons" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>}
     
      {location.pathname === '/blog' ? '' : <div className="footerContent d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
              <h4 className="footerText">&#169; {year} ValuGenius Advisors LLP, All rights reserved.</h4>
          </div>
        </div>
      </div>}
    </>
  );
};


export default Footer;
