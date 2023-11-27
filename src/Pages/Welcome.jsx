import React from "react";
import "../Scss/Wlecome/welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  const service = [
    {
    img: '../../public/welcome-1.webp',
    title: 'Business Valuation',
    para:  'Business Valuation is complex, subjective and at times hotly debated issue...'
    },
    {
      img: '../../public/service2.webp',
      title: 'Mergers And Amalgamation Valuations',
      para:  'Valuation is essential for mergers and acquisitions as it help determines the fair...'
    },
    {
      img: '../../public/service3.webp',
      title: 'RBI Valuations',
      para:  'Under the Foregin Exchange Management Act(FEMA) in india valuations...'
    },
    {
      img: '../../public/service4.webp',
      title: 'ESOP Valuations',
      para:  'Valuation of Employee Stock Ownership Plans (ESOPs) invloles determining the fair...'
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
            <Link className="card border-0">
              <div className="row g-0 d-flex justify-content-center align-items-center">
                <div className="col-2 d-flex justify-content-center">
                  <div className="imgSection">
                    <img src={val.img} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-10">
                  <div className="card-body">
                    <h4 className="card-title">{val.title}</h4>
                    <p className="card-text">{val.para}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Welcome;
