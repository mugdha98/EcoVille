import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./RiderProfile.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEdit } from "react-icons/ai";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../SellerProfile/Card.js";
import AddressForm from "../SellerProfile/EditAddress";

const RiderProfile = ({ user }) => {
  // EDITABLE FIELD CODE

  const [isClicked, setIsClicked] = useState(false);
  const [readOnlyRadius, setReadOnlyRadius] = useState(true);
  const [readOnlyRegistration, setReadOnlyRegistration] = useState(true);

  function editAddress() {
    setIsClicked(!isClicked);
  }

  function EnableWriteRegistration() {
    setReadOnlyRegistration(!readOnlyRegistration);
  }

  function EnableWriteRadius() {
    setReadOnlyRadius(!readOnlyRadius);
  }

  return (
    <div>
      <div className={style.container}>
        {/* CARD SECTION */}

        <div>
          <div className={style.cardDiv}>
            <Card
              name={user ? user.name : ""}
              email={user ? "Email: " + user.email : ""}
              // img={user ? user.avatar : ""}
              tel={user ? "Contact: " + user.contact : ""}
              aadhar={user ? "Aadhar No: " + user.aadhar : ""}
              address={user ? "Address: " + user.address.firstLine +
                ", " +
                user.address.landmark +
                ", " +
                user.address.city +
                ", " +
                user.address.state +
                " P.O: " +
                user.address.pin
                : ""
              }
            />
          </div>
          {/* <div className={style.address}>
          </div> */}
          <hr className={style.division} />

          {/* BACK TO DASHBOARD */}

          <div className={style.changeButton}>
            <Link to="/dashboard/rider">
              <Button variant="warning" size="lg" className={style.lastButton}>
                Return to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};
RiderProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(RiderProfile);
