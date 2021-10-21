import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png"

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          {/* Footer body */}
          <div className="row">
            <div className="col-md-6">
              <div className="mb-5">
                <img className="w-25" src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <p>About Our Food</p>
              <p>Read our details</p>
              <p>Get best offer</p>
              <p>Chipest food ever</p>
            </div>
            <div className="col-md-3">
              <p>Get help</p>
              <p>Best deal</p>
              <p>View all</p>
              <p>Restaurent for you</p>
            </div>
          </div>

          <div className="d-flex justify-content-lg-between mt-4">
            <div>
              <p className="text-secondary">
                <small>Copyright © .Jaber, All rights reserved.</small>
              </p>
            </div>
            <div className="d-flex">
              <div className="me-5"><p>Privacy policy</p></div>
              <div className="me-5"><p>Terms of user</p></div>
              <div><p>Pricig</p></div>
            </div>
          </div>

          {/* Social media Icon for footer*/}
          <div className="d-flex justify-content-center mt-4">
            <div className="fs-3">
              <i className="fab fa-facebook-square"></i>
            </div>
            <div className="fs-3 twitter ms-4">
              <i className="fab fa-twitter-square"></i>
            </div>
            <div className="fs-3 ms-4">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="fs-3 ms-4">
              <i className="fab fa-reddit-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
