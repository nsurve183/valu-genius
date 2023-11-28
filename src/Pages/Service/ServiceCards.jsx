

import React from 'react';
import '../../Scss/Service/_servicescards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faHandshake, faGlobe, faArrowUpRightFromSquare, faPenSquare, faCoins, faCompass, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  const services = [
    {
      icon: faBusinessTime, 
      title: 'Business Valuation', 
      content: "Business Valuation is a complex, subjective and at times a hotly debated issue. Undertaking valuation assignments require an in-depth...",
      serviceLink: ''
    },
    {
      icon: faHandshake, 
      title: 'Mergers and Amalgamation Valuations', 
      content: "Valuation is essential in mergers and acquisitions as it helps determine the fair price to be paid for a target company...",
      serviceLink: ''
    },
    {
      icon: faGlobe, 
      title: 'RBI Valuations', 
      content: "Under the Foreign Exchange Management Act (FEMA) in India, valuation reports may be required for various purposes...",
      serviceLink: ''
    },
    {
      icon: faArrowUpRightFromSquare, 
      title: 'ESOP Valuations', 
      content: "Valuation of Employee Stock Ownership Plans (ESOPs) involves determining the fair market value of the company's shares that are offered...",
      serviceLink: ''
    },
    {
      icon: faPenSquare, 
      title: 'Ind AS Valuations', 
      content: "Valuation under Indian Accounting Standards (Ind AS) involves determining the fair value of various assets, liabilities, and financial...",
      serviceLink: ''
    },
    {
      icon: faCoins, 
      title: 'Convertible instruments Valuations', 
      content: "Valuation of convertible instruments involves determining the fair value of financial instruments that have both debt and equity...",
      serviceLink: ''
    },
    {
      icon: faCompass, 
      title: 'Intangible assets Valuations', 
      content: "Valuation of intangible assets involves determining the fair value of non-physical assets that are identifiable, non-monetary, and lack...",
      serviceLink: ''
    },
    {
      icon: faPaperPlane, 
      title: 'Fairness opinion Valuations', 
      content: "In case of Merger and Amalgamation / demerger fairness opinion is required to be submitted to NCLT as per the requirements of..",
      serviceLink: ''
    },
  ]
  return (
    <>
    <div className="serviceSection">
      <div className="container">
        <div className="row">
          {services.map((val, index) => {
            return <div className="col-lg-4 col-md-6 col-12 mb-5" key={index}>
            <div className="card">
              <div className="icon_wrapper">
              <FontAwesomeIcon icon={val.icon} className='service_icon'/>
              </div>
              <div className="card-body text-center">
                  <h2 className='service_title'>{val.title}</h2>
                  <p className='service_para'>{val.content}</p>
                  <Link className='service_link'>Read More</Link>
              </div>
              <div className="card_overlay">
                <span className='span'></span>
                <span className='span1'></span>
                <span className='span2'></span>
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default ServiceCards