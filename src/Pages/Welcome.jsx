import React from "react";
import "../Scss/Wlecome/welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  const service = [
    {
    img: '../../public/welcome-1.webp',
    title: 'Business Valuation',
    para:  'Business Valuation is complex, subjective and at times hotly debated issue...',
    link: '/business-valuation'
    },
    {
      img: '../../public/service2.webp',
      title: 'Mergers And Amalgamation Valuations',
      para:  'Valuation is essential for mergers and acquisitions as it help determines the fair...',
      link: '/mergers-valuation'
    },
    {
      img: '../../public/service3.webp',
      title: 'RBI Valuations',
      para:  'Under the Foregin Exchange Management Act(FEMA) in india valuations...',
      link: '/RBI-valuations'
    },
    {
      img: '../../public/service4.webp',
      title: 'ESOP Valuations',
      para:  'Valuation of Employee Stock Ownership Plans (ESOPs) invloles determining the fair...',
      link: '/ESOP-valuations'
    },
    

]
  return (
    <div>
      <div className="welcomeSection">
      <div className="container mt-sm-5">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <h1 className="welcome_title">Welcome to ValuGenius</h1>
          <p className="welcome_para">
            Unlocking Hidden Value, Guiding Your Success
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
          { service.map((val, index) => {
           return <div className="col-lg-6 col-12 mb-5" key={index}>
            <div className="card border-0">
              <div className="row g-0 d-flex justify-content-center align-items-center">
                <div className="col-2 d-flex justify-content-center">
                  <Link to={val.link} className="imgSection">
                    <img src={val.img} className="img-fluid" alt="" />
                  </Link>
                </div>
                <div className="col-10">
                  <div className="card-body">
                    <Link to={val.link} className="card-title">{val.title}</Link>
                    <div className="card-text">{val.para}</div>
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
  );
};

export default Welcome;
