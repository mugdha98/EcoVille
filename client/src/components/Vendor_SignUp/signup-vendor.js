import React, { useState } from "react";
import "./signup-vendor.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { registerVendor } from "../../actions/auth";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "newspaper", label: "Newspaper" },
  { value: "container", label: "Plastic Containers" },
  { value: "bottle", label: "Plastic bottles" },
  { value: "ewaste", label: "E-Waste" },
  { value: "others", label: "Others" },
];

const SignupVendor = ({ setAlert, registerVendor, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    gstin: "",
    pincode: "",
    firstline: "",
    landmark: "",
    aadhar: "",
  });

  const {
    name,
    email,
    password,
    password2,
    phone,
    gstin,
    pincode,
    firstline,
    landmark,
    aadhar,
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerVendor(
        name,
        email,
        password,
        phone,
        gstin,
        pincode,
        firstline,
        landmark,
        //aadhar
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
      <div className="signup-vendor">
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
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>

        <div class="flex-region">
          {/* SIGNUP SECTION */}
          <div class="vendor-flex-right">
            <div className="right-side">
              <div className="signup-area">

                {/* OR DIV */}
                <hr className="division" />
                {/* SIGNUP HERE DIV */}
                <div className="signup">
                  <h3>
                    <strong>Sign Up Here</strong>
                  </h3>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div class="form-floating mb-3 ">
                      <input
                        type="text"
                        class="form-control"
                        id="organisation-name"
                        placeholder="Organisation Name"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="organisation-name">
                        Organisation Name
                        <Req />
                      </label>{" "}
                      {/* ORGANISATION NAME */}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="name@example.com"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="email">
                        Email address
                        <Req />

                      </label>{" "}
                      {/* EMAIL */}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control pass"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="password">
                        Password
                        <Req />
                      </label>{" "}
                      {/* PASSWORD */}
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control pass"
                        id="password2"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="password">
                        Confirm Password
                        <Req />
                      </label>{" "}
                      {/* PASSWORD */}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="Contact"
                        placeholder="Phone No."
                        name="phone"
                        value={phone}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="Contact">
                        Phone No.
                        <Req />
                      </label>{" "}
                      {/* PHONE NO. */}
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="gsti"
                        placeholder="GSTI No."
                        name="gstin"
                        value={gstin}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="gsti">
                        Company Registration Number
                        <Req />
                      </label>{" "}
                      {/* GSTI NO. */}
                    </div>

                    <div class="input-group mb-3">
                      <label class="input-group-text" for="waste_type">
                        Type of Waste
                      </label>
                      <input
                        type="text"
                        placeholder="E-Waste"
                        disabled
                      />
                      {/* <Select
                        options={options}
                        isMulti
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        name="waste_type"
                        className="basic-multi-select form-select"
                        classNamePrefix="select"
                      /> */}
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="firstline"
                        placeholder="First Line"
                        name="firstline"
                        value={firstline}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="firstline">
                        Address
                        <Req />
                      </label>{" "}
                      {/* FIRST LINE OF ADDRESS */}
                    </div>


                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="pincode"
                        placeholder="Pincode"
                        name="pincode"
                        value={pincode}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="pincode">
                        Pincode
                        <Req />
                      </label>{" "}
                      {/* PINCODE */}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="landmark"
                        placeholder="landmark"
                        name="landmark"
                        value={landmark}
                        onChange={(e) => onChange(e)}
                      />
                      <label for="landmark">Landmark <Req /></label> {/* LANDMARK */}
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
                    <div className="signup-key">
                      <button
                        onClick={(e) => onSubmit(e)}
                        type="button"
                        class="btn btn-warning btn-lg"
                        disabled={disabled}
                      >
                        Register {/* SIGN UP BUTTON */}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};
SignupVendor.propTypes = {
  registerVendor: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registerVendor, setAlert })(
  SignupVendor
);
