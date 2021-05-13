import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";
const cs={
  paddingLeft : '25%',
  //textAlign: 'center',
}
//import { connect } from "react-redux";
//import PropTypes from "prop-types";
function Footer(props) {
  return (
  //   <footer>
  //   <div className="container">
  //       <center>
  //       <p>Copyright © Control Budget. All Rights Reserved|Contact Us: +91-8448444853.</p>
  //       </center>
  //   </div>
  // </footer>
<div className="fixed-bottom">  
            <Navbar color="dark" dark>
                <div style={cs}>
                    <NavbarBrand>
                      
                      <p style={cs}>Copyright © EcoVille . All Rights Reserved</p>
                      
                      </NavbarBrand>
                </div>
            </Navbar>
        </div>
    // // <div className="footer">
    // //   <div className="container">
    // //     <div className="row justify-content-center">
    // //       <div className="col-4 offset-1 col-sm-2">
    // //         {/* <h5>Services</h5>
    //         <ul className="list-unstyled">
    //           {localStorage.typeofuser === "seller" ? (
    //             <li>
    //               <Link to="/requestPickup">Request Pickup</Link>
    //             </li>
    //           ) : (
    //             ""
    //           )}
    //           {!localStorage.token ? (
    //             <div>
    //               <li>
    //                 <Link to="/signup/vendor">Join as Vendor</Link>
    //               </li>
    //               <li>
    //                 <Link to="/signup/rider">Join as Rider</Link>
    //               </li>
    //             </div>
    //           ) : (
    //             ""
    //           )}
    //           <li>
    //             <Link to="/contactus">Contact Us</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-7 col-sm-3">
    //         <h5>Community</h5>
    //         <ul className="list-unstyled">
    //           <li>
    //             <Link to="/faqs">How it works & FAQs</Link>
    //           </li>
    //           <li>
    //             <Link to="/faqs">About Us</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div> */}
    //     {/* <hr /> */}
    //     {/* <div className="row justify-content-center">
    //       <div className="col-auto">
    //         <p>© Copyright 2021 EcoVille All rights reserved</p>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}
  );
}

export default Footer;
