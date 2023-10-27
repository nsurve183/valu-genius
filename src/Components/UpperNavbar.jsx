import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const UpperNavbar = () => {
  return (
    <div>
      <div className="uppernav">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-12">
              <div className="d-md-flex">
                <div className="d-flex">
                  <PhoneIphoneIcon className="phoneIcon" />
                  <h5 className="mb-0 ms-1 numberField">
                    +91 8879195030
                  </h5>
                </div>
                <div className="d-flex ms-md-4 mt-md-0 mt-3">
                  <MailOutlineIcon className="phoneIcon" />
                  <h5 className="mb-0 ms-2 numberField">
                    jainam@valugenius.com
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="icons_list text-lg-end text-start mt-lg-0 mt-md-2 mt-3">
                <FacebookIcon className=" icons" />
                <InstagramIcon className=" ms-3 icons" />
                <LinkedInIcon className=" ms-3 icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
