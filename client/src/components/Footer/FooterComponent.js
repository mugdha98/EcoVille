import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

//import { connect } from "react-redux";
//import PropTypes from "prop-types";
const customstyle={
  paddingTop:"5px",
  color:"Grey",
  textAlign:"center"
}
function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        {/* <div className="row justify-content-center"> */}
          {/* <div className="col-4 offset-1 col-sm-2">
            <h5>Services</h5>
            <ul className="list-unstyled">
              {localStorage.typeofuser === "seller" ? (
                <li>
                  <Link to="/requestPickup">Request Pickup</Link>
                </li>
              ) : (
                ""
              )}
              {!localStorage.token ? (
                <div>
                  <li>
                    <Link to="/signup/vendor">Join as Vendor</Link>
                  </li>
                  <li>
                    <Link to="/signup/rider">Join as Rider</Link>
                  </li>
                </div>
              ) : (
                ""
              )}
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div> */}
          {/* <div className="col-7 col-sm-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/faqs">How it works & FAQs</Link>
              </li>
              <li>
                <Link to="/faqs">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr /> */}
        <div className="row justify-content-center">
          <div className="col-6 offset-1 ">
            <p style={customstyle}> Copyright © 2021 EcoVille All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
