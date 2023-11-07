import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const InfoCarousel = () => {
  return (
    <>

    <div className="carouselSection">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="../../public/banner-1.webp" className="bannerImage" alt="pic not found" />
      <div className="container">
        <div className="row text-center text-md-start p-0">
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">We are your financial solution</h1>
                <button className="btn">
                  Contact Us
                  <span className="btn_icon"><ArrowRightIcon className="rightIcon"/></span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src="../../public/banner-2.webp" className="bannerImage" alt="pic not found" />
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Be smart when its comes to finances</h1>
                <button className="btn">
                  Contact Us
                  <span className="btn_icon"><ArrowRightIcon className="rightIcon"/></span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <img src="../../public/banner-3.webp" className="bannerImage" alt="pic not found" />
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Be Informed. Be Smart. Be Sure</h1>
                <button className="btn">
                  Contact Us
                  <span className="btn_icon"><ArrowRightIcon className="rightIcon"/></span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
    </div>
        </>
  );
};

export default InfoCarousel;
