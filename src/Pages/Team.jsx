import React from "react";
import "../Scss/_team.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

const Team = () => {
  const team = [
    {
      name: "CA Jainam Shah",
      designation: "Founder",
      img: "../../public/jainam-shah.webp",
      link: "/",
    },
    {
      name: "CA Pulkit Agarwal",
      designation: "Co-Founder",
      img: "../../public/pulkit-agrawal.webp",
    },
    {
      name: "CA Jimit Kothari",
      designation: "CEO",
      img: "../../public/jimit-kothari.webp",
    },
  ];
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
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#callBackModal"
                      className="btn btn_primary"
                    >
                      Call Back
                      <span>
                        <ArrowRightIcon className="ms-2 righticon" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {team.map((val, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-12 mt-lg-0 mt-5"
                  key={index}
                >
                  <div className="card1">
                    <img src={val.img} className="img-fluid" alt="" />
                    <Link to={"team"} className="card_body">
                      <h1 className="member_name">{val.name}</h1>
                      <p className="designation">{val.designation}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="modal show"
          id="callBackModal"
          tabindex="-1"
          aria-labelledby="callBackModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalLabel">
                  Request a call back
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="username"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="username"
                      placeholder="Enter Mobile No."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      name="username"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                     className="form-control textarea"
                      id="message-text"
                      placeholder="Enter Massage"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn_primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
