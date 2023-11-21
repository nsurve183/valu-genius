import React from "react";
import "../Scss/_upperNavbar.scss";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const UpperNavbar = () => {
  return (
    <div>
     <div className="upperSection">
     <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6 col-12">
           <div className="contentSection d-md-flex d-">
           <div className="content">
            <PhoneAndroidIcon className="icon"/>
            <p className="ms-2 numberField">+91 8879195030</p>
            </div>
            <div className="content ms-md-5 mt-md-0 mt-3">
            <MailOutlineIcon className="icon"/>
            <p className="ms-3 numberField">jainam@valugenius.in</p>
            </div>
           </div>
          </div>
          <div className="col-lg-6 col-12 text-lg-end mt-lg-0 mt-4">
            <div className="iconlist ">
            <FacebookIcon className="icons"/>
            <InstagramIcon className="icons ms-4 me-4"/>
            <LinkedInIcon className="icons"/>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default UpperNavbar;
