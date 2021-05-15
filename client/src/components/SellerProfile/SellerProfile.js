import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SellerProfile.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEdit } from "react-icons/ai";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "./Card";
import AddressForm from "./EditAddress";

const SellerProfile = ({ user }) => {
  //  FOR EDITABLE ADDRESS FORM FUNCTIONALITY

  const [isClicked, setIsClicked] = useState(false);

  function editAddress() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <div className={style.container}>
        {/* CARD SECTION */}

        <div>
          <div className={style.cardDiv}>
            <Card
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
              name={user ? user.name : ""}
              // img={user ? user.avatar : ""}
              tel={user ? "Contact: " + user.contact : ""}
              email={user ? "Email: " + user.email : ""}
            />
          </div>

          {/* ADDRESS SECTION */}
          {/* <h1 className={style.setting}>Settings</h1>
          <hr className={style.division} /> */}
          {/* <div className={style.address}> */}
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
            </div>
          </div> */}
          <hr className={style.division} />

          {/* BACK TO DASHBOARD */}

          <div style={{ marginTop: "2%" }}>
            <Link to="/dashboard/seller">
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

SellerProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(SellerProfile);
