import React from "react";
import "../Scss/_client.scss";

const Client = () => {
  return (
    <div>
      <div className="clientSection mt-5">
        <div className="container">
          <div className="row g-5 d-flex align-items-center justify-content-center text-md-start text-center">
            <div className="col-md-7 col-12 mb-md-0 mb-3">
                <h1 className="clientTitle text-start">We deliver client satisfaction by maintaining high standard of performance</h1>
                <div className="client_text">ValuGenius is a IBBI Registered Valuation firm situated in Mumbai, India. We are actively engaged in offering Valuation and advisory support to Indian and foreign companies.</div>
                <div className="client_text">
                Our end goal is to help businesses to tackle the complexities of valuation & financial advisory with minimum brain scratching and maximum accuracy. ValuGenius has centered its operations in the Financial capital of India.
                </div>
            </div>
            <div className="col-md-5 col-12">
                <img src="../../public/chart.webp" className="img-fluid" alt="pic not found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
