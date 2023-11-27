import React from "react";
import '../Scss/Banner/banner.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Banner = () => {
  return (
    <div>
        <div className="bannerSection">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="100000">
      <img src="../../public/banner-1.webp" className="d-block w-100 bannerImg" alt="..."/>
        <div className="card">
            <div className="card-body">
            <h1 className="card-title">We are your financial solution</h1>
           <div className="btnSection">
          <div className="bannerbtn">
          <button className="btn btn-primary">
                  Contact Us
                  <span><ArrowRightIcon className="ms-2 rightIcon"/></span>
            </button>
          </div>
           </div>
            </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src="../../public/banner-2.webp" className="d-block w-100 bannerImg" alt="..."/>
        <div className="card">
            <div className="card-body">
            <h1 className="card-title">Be smart when its comes to finances</h1>
           <div className="btnSection">
           <button className="btn btn-primary">
                  Contact Us
                  <span className="btn_icon"><ArrowRightIcon className="ms-2 rightIcon"/></span>
                  </button>
           </div>
            </div>
      </div>
    </div>
    <div className="carousel-item">
    <img src="../../public/banner-3.webp" className="d-block w-100 bannerImg" alt="..."/>
        <div className="card">
            <div className="card-body">
            <h1 className="card-title">Be Informed. Be Smart. Be Sure</h1>
           <div className="btnSection">
           <button className="btn btn-primary">
                  Contact Us
                  <span className="btn_icon"><ArrowRightIcon className="ms-2 rightIcon"/></span>
                  </button>
           </div>
            </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  );
};

export default Banner;
