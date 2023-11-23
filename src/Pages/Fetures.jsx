import React from "react";
import "../Scss/_features.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faClipboardCheck,
  faAddressCard,
  faClipboardList,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";

const Fetures = () => {

  const featurs = [
    {icon: faCalculator, text: 'Combining accounting experience with valuation expertise'},
    {icon: faAddressCard, text: 'IBBI registered services'},
    {icon: faClipboardCheck, text: 'Prioritizing transparency & honesty'},
    {icon: faClipboardList, text: 'Consistent balance of quality and precision'},
    {icon: faUserGear, text: 'Profound Technical Expertise'},
  ]
  return (
    <>
      <div className="featureSection">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 col-12">
              <h1 className="features_title">Why ValuGenius</h1>
            </div>
            <div className="col-md-8 col-12">
              <div className="row">
               {featurs.map((val,index) => {
                return  <div className="col-lg-6 col-12" key={index}>
                <div className="card mb-5 border-0">
                  <div className="row g-0">
                    <div className="col-sm-3 col-2">
                      <div className="fetureIcon">
                        <FontAwesomeIcon icon={val.icon} className="calculator" />
                      </div>
                    </div>
                    <div className="col-sm-9 col-10">
                      <div className="card-body">
                        <p className="card-text">
                      {val.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fetures;
