import React from "react";
import "../Scss/_team.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Team = () => {
  const team = [
    {name: 'CA Jainam Shah', designation: 'Founder', img: "../../public/jainam-shah.webp"},
    {name: 'CA Pulkit Agarwal', designation: 'Co-Founder', img: "../../public/pulkit-agrawal.webp"},
    {name: 'CA Jimit Kothari', designation: 'CEO', img: "../../public/jimit-kothari.webp"}
  ]
  return (
    <div>
      <div className="teamSection">
        <div className="container">
          <div className="row main_row d-flex justify-content-center">
            <div className="col-lg-3 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="team_title">Our Team</div>
                  <div className="team_text">
                    Still have confusion? Don’t worry. We don’t do rocket
                    science
                  </div>

                  <div className="btnsection">
                    <button className="btn btn_primary">
                      Call Back
                      <span>
                        <ArrowRightIcon className="ms-2 righticon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          { team.map((val,index) => {
            return <div className="col-lg-3 col-md-4 col-12 mt-lg-0 mt-5" key={index}>
            <div className="card1">
              <img src={val.img} className="img-fluid" alt="" />
              <div className="card_body">
                <h1 className="member_name">{val.name}</h1>
                <p className="designation">{val.designation}</p>
              </div>
            </div>
          </div>
          }) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
