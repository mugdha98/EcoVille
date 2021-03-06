import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./VendorProfile.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEdit } from "react-icons/ai";
import Card from "../SellerProfile/Card.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MultiSelect from "react-multi-select-component";
import AddressForm from "../SellerProfile/EditAddress";

const options = [
  { value: "newspaper", label: "Newspaper" },
  { value: "container", label: "Plastic Containers" },
  { value: "bottle", label: "Plastic bottles" },
  { value: "ewaste", label: "E-Waste" },
  { value: "others", label: "Others" },
];

export const VendorProfile = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [readOnlyAbout, setReadOnlyAbout] = useState(true);
  const [WasteType, setWasteType] = useState(false);
  const [selected, setSelected] = useState([]);

  function editAddress() {
    setIsClicked(!isClicked);
  }
  function EnableWriteAbout() {
    setReadOnlyAbout(!readOnlyAbout);
  }

  function selectWaste() {
    setWasteType(!WasteType);
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
              gsti={user ? "Registration Number: " + user.gstin : ""}
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
          {/* <h1 className={style.setting}>Settings</h1>
          <hr className={style.division} /> */}
          <div className={style.address}>
            {/* <h3 className={style.heading}>
              {" "}
              Address
              <AiFillEdit className={style.editable} onClick={editAddress} />
            </h3> */}
            {/* <div className={style.addressField}> */}
            {/* <Form.Group controlId="address">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
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
              </Form.Group> */}
            {/* </div> */}
            {/* HIDDEN ADDRESS FORM */}
            {/* <div style={{ display: isClicked ? "block" : "none" }}>
              <AddressForm />
            </div> */}

            {/* ABOUT YOU SECTION*/}
            {/* <h3 className={style.heading}>
              {" "}
              About You
              <AiFillEdit className={style.editable} onClick={EnableWriteAbout} />
            </h3>
            <div className={style.addressField}>
              <Form.Group controlId="bio">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={style.addressField}
                  placeholder="You sell, We buy!"
                  readOnly={readOnlyAbout}
                /> */}
            {/* HIDDEN SAVE BUTTON */}
            {/* <Button
                  variant="primary"
                  style={{
                    display: !readOnlyAbout ? "block" : "none",
                  }}
                  className={style.button123}
                >
                  Save
                </Button>{" "}
              </Form.Group> */}
            {/* </div> */}

            {/* CHANGE YOUR PASSWORD SECTION*/}

            {/* <h2 className={style.heading}>Change Your Password</h2>
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
            </div> */}
          </div>
          <hr className={style.division} />

          {/* BACK TO DASHBOARD */}

          <div>
            <Link to="/dashboard/vendor">
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
VendorProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(VendorProfile);
