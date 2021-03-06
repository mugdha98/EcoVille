import React, { useState } from "react";
import "./signup-rider.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { registerRider } from "../../actions/auth";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import { RadioGroup, RadioButton } from "react-radio-buttons";


const SignupRider = ({ setAlert, registerRider, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    pincode: "",
    firstline: "",
    typeofvehicle: "cycle",
    regnumber: "",
    landmark: "",
    aadhar: "",
    dob: "",
  });



  const {
    name,
    email,
    password,
    password2,
    phone,
    pincode,
    firstline,
    landmark,
    typeofvehicle,
    regnumber,
    aadhar,
    dob,
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerRider(
        name,
        email,
        password,
        password2,
        phone,
        pincode,
        firstline,
        landmark,
        typeofvehicle,
        regnumber,
        aadhar,
        dob
      );
    }
  };
  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [disabled, setDisabled] = useState(true);

  function activate() {
    setDisabled(!disabled);
  }

  //redirect after successfull signup
  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }
  function Req() {
    return <span className="req">*</span>;
  }
  return (
    <center>
      <div className="signup-Rider">
        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap"
          rel="stylesheet"
        />

        {/* BOOTSTRAP */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        ></link>

        {/* MAIN CONTENT SECTION */}

        <div className="flex-container-rider">
          {/* SIGNUP SECTION */}

          <div className="flex-item-right">
            <div className="content">
              <hr className="hr1" />

              {/* SIGNUP HERE DIV */}

              <div className="signup-here">
                <h3>
                  <strong>Sign Up Here</strong>
                </h3>

                {/* FORM SECTION */}

                <form>
                  <div class="form-floating mb-3 ">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => onChange(e)}
                    />
                    <label for="floatingInput" className="floating-txt">
                      Name
                      <Req />
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <label for="floatingInput" className="floating-txt">
                      Email address <Req />
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control pass"
                      id="floatingInput"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <label for="floatingInput" className="floating-txt">
                      Password <Req />
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control pass"
                      id="floatingInput"
                      placeholder="Password"
                      name="password2"
                      value={password2}
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <label for="floatingInput" className="floating-txt">
                      Confirm Password <Req />
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Phone no."
                      name="phone"
                      value={phone}
                      onChange={(e) => onChange(e)}
                    />
                    <label for="floatingInput" className="floating-txt">
                      Phone No.
                      <Req />
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Address"
                      name="firstline"
                      value={firstline}
                      onChange={(e) => onChange(e)}
                    />
                    <label for="floatingInput" className="floating-txt">
                      Address <Req />
                    </label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Aadhar No."
                      name="aadhar"
                      value={aadhar}
                      onChange={(e) => onChange(e)}
                    />
                    <label for="floatingInput" className="floating-txt">
                      Aadhar No.
                      <Req />
                    </label>
                  </div>

                  <div className="age-radio">
                    <div class="form-floating mb-3 age">
                      <Input
                        type="date"
                        id="date"
                        placeholder="Pickup date"
                        name="dob"
                        value={dob}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="floatingInput" className="floating-txt">
                        DOB <Req />
                      </label>
                    </div>
                  </div>

                  <div className="reg-pin">
                    <div class="form-floating mb-3  reg-pin-items1">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="landmark"
                        placeholder="Land Mark"
                        name="landmark"
                        value={landmark}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="pincode" className="floating-txt">
                        Landmark
                        <Req />
                      </label>
                    </div>
                    <div class="form-floating mb-3  reg-pin-items2">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="pincode"
                        placeholder="Pin Code"
                        name="pincode"
                        value={pincode}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="pincode" className="floating-txt">
                        Pin Code<Req />
                      </label>
                    </div>
                  </div>


                  {/* RADIO BUTTONS FOR GENDER */}

                  <div>
                    <RadioGroup /*onChange={this.onChange}*/ className="radios" horizontal>
                      <RadioButton value="apple">Male</RadioButton>

                      <RadioButton value="orange">Female</RadioButton>

                      <RadioButton value="melon">Other</RadioButton>

                      {/* <ReversedRadioButton value="melon">Melon</ReversedRadioButton> */}
                    </RadioGroup>
                  </div>

                  <input type="checkbox" id="chkYes" name="typeofvehicle" />{" "}
                  <label for="chkYes">
                    Do you use a vehicle other than bicycle?
                  </label>
                  <div class="form-floating mb-3 reg-pin-items2" id="dvtext">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="txtBox"
                      placeholder="Registration no."
                      name="regnumber"
                      value={regnumber}
                      onChange={(e) => onChange(e)}
                    />
                    <label for="txtBox" className="floating-txt">
                      Registration no. of vehicle(other than bicycle)
                      <Req />
                    </label>
                  </div>


                  <div className="operation-radius">
                    <p>
                      Select the radius in which you can operate:  <br />
                    </p>

                    {/* RADIO BUTTONS FOR THE SELECTION OF OPERATION RADIUS */}
                    <div className="radios">
                      <RadioGroup /*onChange={this.onChange}*/ horizontal>
                        <RadioButton value="apple">2km</RadioButton>
                        <RadioButton value="orange">5km</RadioButton>
                        <RadioButton value="melon">10km</RadioButton>
                        <RadioButton value="melon">15km</RadioButton>

                        {/* <ReversedRadioButton value="melon">Melon</ReversedRadioButton> */}
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="tnc">
                    <input
                      type="checkbox"
                      id="TnC"
                      required
                      onChange={activate}
                    />
                    <label for="TnC">
                      {" "}
                      I agree to the{" "}
                      <a href="/tnc" alt="terms and conditions" className="tnc">
                        terms and conditions and the privacy policy
                      </a>
                    </label>
                  </div>
                  {/* TESTING AREA */}
                  <div className="signup-button">
                    <button
                      type="button"
                      onClick={(e) => onSubmit(e)}
                      class="btn btn-warning btn-lg registar"
                      disabled={disabled}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

SignupRider.propTypes = {
  registerRider: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registerRider, setAlert })(
  SignupRider
);
