import React, { useState, useEffect } from "react";
import { login } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import styles from "./logIn.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
//import GoogleLogin from "react-google-login";

const Login = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    loginDetail: "",
    password: "",
    typeOfUser: "",
  });
  const { loginDetail, password, typeOfUser } = formData;

  /*google login response
  const responseGoogle = (response) => {
    console.log(response);
    setFormData({
      ...formData,
      loginDetail: response.profileObj.email,
      password: response.profileObj.googleId,
    });
  };*/

  useEffect(() => {
    login(loginDetail, password, typeOfUser);
  }, [password]);

  localStorage.setItem("typeofuser", typeOfUser);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(loginDetail, password, typeOfUser);
  };

  //redirect if logged in
  if (isAuthenticated) {
    const url = `/dashboard/${localStorage.getItem("typeofuser")}`;
    return <Redirect to={url} />;
  }

  return (
    <center>
      <div className="signup-Rider">
        {/* GOOGLE FONTS */}

        {/* MAIN CONTENT SECTION */}

        <div className="flex-container-rider">
          {/* SIGNIN SECTION */}

          <div className={styles.flexRight}>
            <div className="content">
              <h2 className={styles.form_h2}>
                <center>LOGIN</center>
              </h2>
              <center>
                <form
                  onSubmit={(e) => onSubmit(e)}
                  className={styles.form_component}
                >
                  <input
                    type="text"
                    id="loginDetail"
                    name="loginDetail"
                    placeholder="Email / Phone Number"
                    onChange={(e) => onChange(e)}
                    value={loginDetail}
                    required
                  ></input>

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => onChange(e)}
                    value={password}
                    required
                  ></input>
                  <select
                    name="typeOfUser"
                    value={typeOfUser}
                    className={styles.select}
                    onChange={(e) => onChange(e)}
                  >
                    <option>*Select Type of User!</option>
                    <option value="seller">Seller</option>
                    <option value="rider">Rider</option>
                    <option value="vendor">Vendor</option>
                  </select>

                  <button className={styles.signin_btn}>Sign In</button>
                </form>
              </center>
              <center>
                <h4 className={styles.form_h4}>
                  {" "}
                New User?{" "}
                  <Link to="/signup/seller" className={styles.form_link}>
                    {" "}
                  Sign Up Here
                </Link>
                </h4>
              </center>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
  setAlert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
