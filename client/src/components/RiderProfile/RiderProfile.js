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
          {/* ADDRESS SECTION */}
          <h1 className={style.setting}>Settings</h1>
          <hr className={style.division} />
          <div className={style.address}>
            {/* <h4 className={style.heading}>
              {" "}
              Address
              <AiFillEdit className={style.editable} onClick={editAddress} />
            </h4>
            <div className={style.addressField}>
              <Form.Group controlId="Address">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  className={style.addressField}
                  placeholder={
                    user
                      ? user.address.firstLine +
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
                  readOnly
                />
              </Form.Group>
            </div> */}
            {/* HIDDEN ADDRESS FORM */}

            {/* <div style={{ display: isClicked ? "block" : "none" }}>
              <AddressForm />
            </div> */}

            {/* REGISTRATION NO AND RADIUS SECTION */}

            {/* <div className={style.regContainer}>
              <div className={style.flexItem}>
                <h4 className={style.heading}>
                  {" "}
                  Registration No.
                  <AiFillEdit
                    className={style.editable}
                    onClick={EnableWriteRegistration}
                  />
                </h4>

                <Form.Group controlId="Registration">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="UP64 Z 4123"
                    className=""
                    readOnly={readOnlyRegistration}
                  />
                  HIDDEN SAVE BUTTON
                  <Button
                    variant="primary"
                    style={{
                      display: !readOnlyRegistration ? "block" : "none",
                    }}
                    className={style.button123}
                  >
                    Save
                  </Button>{" "}
                </Form.Group>
              </div>

              OPERATION RADIUS FIELD

              <div className={style.flexItem}>
                <h4 className={style.heading}>
                  {" "}
                  Operation Radius
                  <AiFillEdit
                    className={style.editable}
                    onClick={EnableWriteRadius}
                  />
                </h4>

                <Form.Group controlId="operationRadius">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="5 KM"
                    className=""
                    readOnly={readOnlyRadius}
                  />
                  HIDDEN SAVE BUTTON
                  <Button
                    variant="primary"
                    style={{ display: !readOnlyRadius ? "block" : "none" }}
                    className={style.button123}
                  >
                    Save
                  </Button>{" "}
                </Form.Group>
              </div>
            </div> */}

            {/* CHANGE YOUR PASSWORD SECTION*/}

            <h4 className={style.heading}>Change Your Password</h4>
            <div className={style.changePassword}>
              <Form.Group controlId="newPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  className=""
                />
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  className=""
                />
              </Form.Group>
              <Button variant="dark" className={style.changeButton}>
                Change
              </Button>{" "}
            </div>
          </div>
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
    </div>
  );
};
RiderProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(RiderProfile);
