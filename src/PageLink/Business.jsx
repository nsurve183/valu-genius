import React from "react";
import "../Scss/Business/_businessbanner.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Business = () => {
    const business_list = [
        {list_title: "Why Valuation Services?"},
        {list_title: "Business Valuations"},
        {list_title: "Mergers and Amalgamation Valuations"},
        {list_title: "RBI Valuations"},
        {list_title: "ESOP Valuations"},
        {list_title: "Ind As Valuations"},
        {list_title: "Convertible instrumnets Valuations"},
        {list_title: "Intangible assets Valuations"},
        {list_title: "Fairness Opinion Valuations"},
    ]
  return (
    <>
      <div className="businessBanner my-5">
        <h1 className="business_title">Business Valuation</h1>
        <Link to={"/"} className="business_text">
          Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
          <span className="business_span">Business Valuation</span>
        </Link>
      </div>
      <div className="business_section">
        <div className="container">
            <div className="row d-flex align-item-center">
                <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                    <ul className="business_list">
                       {business_list.map((val, index) => {
                        return <li className="business_link" key={index}>
                        <div className="lisection">
                            <h6 className="list_title">{val.list_title}</h6>
                            <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                        </div>
                    </li>
                       })}
                    </ul>
                </div>
                <div className="col-lg-8 order-lg-2 order-1">
                    <div className="business_card">
                        <h3 className="card_heading">Business Valuation</h3>
                        <p className="card_text">Business Valuation is a complex, subjective and at times a hotly debated issue. Undertaking valuation assignments require an in-depth understanding of internal and external factors affecting business as also a through knowledge of the legal and regulatory environment in which the business is operating. For a valuation report to be well accepted, one need to thoroughly analyze financial, non financial and other data. This requires highly experienced, dedicated and highly motivated professionals.</p>
                        <div className="card_image">
                            <img src="../../public/business-1.webp" className="img-fluid mb-4" alt="pic not found" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Business;
