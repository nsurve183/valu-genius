import React from "react";
import "../Scss/Business/_businessbanner.scss";
import { business_list, business_valuation, buisness_mergers, rbi_valuations, esop_valuations, why_valuation_service, ind_as_valuations, convetable_instruments_valuations, intangible_assets_valuations, fairness_opinion_valuations} from "./links";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Business = () => {
  const location = useLocation();
  return (
    <>
      {/* business valuation */}
       {location.pathname === '/business-valuation' ? business_valuation.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={"/"} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text">{links.banner_para}</p>
                          <p className="card_text">{links.business_para2}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

      {/* mergers valuatinos */}
          {location.pathname === '/mergers-valuation' ? buisness_mergers.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={"/"} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text">{links.banner_para}</p>
                          <p className="card_text">{links.business_para2}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

      {/* rbi valuaitions */}
      {location.pathname === '/RBI-valuations' ? rbi_valuations.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={"/"} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text">{links.banner_para}</p>
                          <p className="card_text">{links.business_para2}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

         {/* Esop valuaitions */}
         {location.pathname === '/ESOP-valuations' ? esop_valuations.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={"/"} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text">{links.banner_para}</p>
                          <p className="card_text">{links.business_para2}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                          <p className="card_text">{links.business_para3}</p>
                          <p className="card_text">{links.business_para4}</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

         {/* why_valuation_service */}
         {location.pathname === '/Why-Valuation-Services' ? why_valuation_service.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={'/'} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text mb-4">{links.banner_para}</p>
                          <p className="card_text mb-4">{links.banner_para2}</p>
                          <p className="card_text mb-5" >{links.banner_para3}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                          <p className="card_text mt-5 mb-5" >{links.banner_para4}</p>
                          <ul className="report_list">
                            <h2 className="report_title">Our report can be used at</h2>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Registrar of Companies (‘ROC’)</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Reserve Bank Of India (RBI)</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Securities Exchange Board of India (SEBI)</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Stock Exchange</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Companies Act</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Income Tax Deparment</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Insolvency Proceedings</p>
                              </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

         {/* ind-as-valuations */}
         {location.pathname === '/Ind-AS-Valuations' ? ind_as_valuations.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={'/'} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text mb-4">{links.banner_para}</p>
                          <p className="card_text mb-4">{links.banner_para2}</p>
                          <p className="card_text mb-5" >{links.banner_para3}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                          <p className="card_text mt-5 mb-5" >{links.banner_para4}</p>
                          <ul className="report_list">
                            <h2 className="report_title">Our report can be used at</h2>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Registrar of Companies (‘ROC’)</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Reserve Bank Of India (RBI)</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Securities Exchange Board of India (SEBI)</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Stock Exchange</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Companies Act</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Income Tax Deparment</p>
                              </div>
                            </li>
                            <li className="report_link">
                              <div className="d_list">
                              <FontAwesomeIcon icon={faAngleRight} className="report_icon"/>
                              <p className="report_text">Insolvency Proceedings</p>
                              </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

         {/* convertable-instruments-valuations */}
         {location.pathname === '/covertable-instruments-valuations' ? convetable_instruments_valuations.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={'/'} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text mb-4">{links.banner_para}</p>
                          <p className="card_text mb-4">{links.banner_para2}</p>
                          <p className="card_text mb-5" >{links.banner_para3}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

          {/* intangible-assets-valuations */}
          {location.pathname === '/Intangible-Assets-Valuations' ? intangible_assets_valuations.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={'/'} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text mb-4">{links.banner_para}</p>
                          <p className="card_text mb-4">{links.banner_para2}</p>
                          <p className="card_text mb-5" >{links.banner_para3}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}

           {/* Fairness-Opinion-Valuations */}
           {location.pathname === '/Fairness-Opinion-Valuations' ? fairness_opinion_valuations.map((links, index1) => {
        return <div className="main_section" key={index1}>
        <div className="businessBanner my-5">
          <h1 className="business_title">{links.banner_title}</h1>
          <Link to={'/'} className="business_text">
            Home <FontAwesomeIcon icon={faAngleRight} className="businessIcon" />{" "}
            <span className="business_span">{links.banner_title}</span>
          </Link>
        </div>
        <div className="business_section">
          <div className="container">
              <div className="row d-flex align-item-center">
                  <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                      <ul className="business_list">
                         {business_list.map((val, index) => {
                          return <Link to={val.link} className="link">
                          <li className="business_link" key={index}>
                          <div className="lisection">
                              <h6 className="list_title">{val.list_title}</h6>
                              <FontAwesomeIcon icon={faAngleRight} className="list_icon"/>
                          </div>
                      </li>
                          </Link>
                         })}
                      </ul>
                  </div>
                  <div className="col-lg-8 order-lg-2 order-1">
                      <div className="business_card">
                          <h3 className="card_heading">{links.business_title}</h3>
                          <p className="card_text mb-4">{links.banner_para}</p>
                          <p className="card_text mb-4">{links.banner_para2}</p>
                          <p className="card_text mb-5" >{links.banner_para3}</p>
                          <div className="card_image">
                              <img src={links.business_image} className="img-fluid mb-4" alt="pic not found" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      }) : ''}
    </>
  );
};

export default Business;
