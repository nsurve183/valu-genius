import React from "react";
import "../../Scss/Contact/_contactform.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const form = [
    { input_type: "text", class_Name: 'form-control', placeholder: "Enter Name" },
    { input_type: "number", class_Name: 'form-control', placeholder: "Enter Moblile No." },
    { input_type: "email", class_Name: 'form-control', placeholder: "Enter Email" },
  ]
  return (
    <div>
      <div className="contactForm">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h1 className="form_title">Let's Get In Touch</h1>
              <p className="form_para">
                Financial peace isn’t the acquisition of stuff. It’s learning to
                live on less than you make, so you can give money back and have
                money to invest. You can’t win until you do this.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mb-lg-0 mb-5">
              <div className="regiseterSection">
                <h4 className="register_title">Registered Office</h4>
                <ul className="address_list">
                  <li className="list_item d-flex">
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        className="location_icon"
                      />
                    </div>
                    401, Purva Plaza, Opp. Adani Electicity., Shimpoli Road,
                    Borivali (West), Mumbai - 400 092
                  </li>
                  <li className="list_item d-flex">
                    <div>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="location_icon"
                      />
                    </div>
                    jainam@valugenius.in
                  </li>
                  <li className="list_item d-flex">
                    <div>
                      <FontAwesomeIcon
                        icon={faMobileScreenButton}
                        className="location_icon"
                      />
                    </div>
                    8879195030
                  </li>
                </ul>
              </div>
              <div className="branchSection mt-5">
                <h4 className="branch_title">Branch Office</h4>
                <ul className="address_list">
                  <li className="list_item d-flex">
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        className="location_icon"
                      />
                    </div>
                    Office No. FA-27, 1st Floor, Lake City Mall, Kapurbawdi
                    Junction, Above McDonalds, Thane(W)-400607
                  </li>
                  <li className="list_item d-flex">
                    <div>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="location_icon"
                      />
                    </div>
                    pulkit@valugenius.in
                  </li>
                  <li className="list_item d-flex">
                    <div>
                      <FontAwesomeIcon
                        icon={faMobileScreenButton}
                        className="location_icon"
                      />
                    </div>
                    8698745001
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
                <form action="">
                <div className="formSection">
                {form.map((val, index) => {
                  return <div className="form-group" key={index}>
                    <input type={val.input_type} className={val.class_Name} placeholder={val.placeholder} />
                  </div>
                })}
                <div className="form-group">
                  <textarea className="form-control textarea" rows="100" placeholder="Enter Massage"></textarea>
                </div>
                <div class="d-grid">
                  <button class="btn btn_primary" type="button">Submit</button>
                </div>
              </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
