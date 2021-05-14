import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

const Display = ({ onClick }) => {
  return (
    <div className="container">
      <Link to="/signup/seller" onClick={onClick}>
        Sign-Up as Seller
      </Link>
      <hr />

      <Link to="/signup/rider" onClick={onClick}>
        Sign-Up as Rider
      </Link>
      <hr />

      <Link to="/signup/vendor" onClick={onClick}>
        Sign-Up as Vendor
      </Link>
    </div>
  );
};

const Header = ({ logout, auth }) => {
  const [formData, setFormData] = useState({
    isNavOpen: false,
    isModalOpen: false,
  });
  const { isNavOpen, isModalOpen } = formData;
  const toggleNav = (e) => setFormData({ ...formData, isNavOpen: !isNavOpen });

  const toggleModal = (e) =>
    setFormData({ ...formData, isModalOpen: !isModalOpen });

  return (
    <React.Fragment>
      <Navbar scrolling dark expand="md" sticky="top">
        <div className="container">
          <NavbarToggler onClick={() => toggleNav()} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/logo.jpg"
              height="50"
              width="50"
              alt="EcoVille_logo"
            ></img>{" "}
            <b style={{ fontFamily: "Joti one", color: "white" }}>EcoVille</b>
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/faqs">
                  <span className="fa fa-question-circle fa-lg"></span> How it Works
                </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/ratelist">
                  <span className="fa fa-inr fa-lg"></span> Item's Price Tag
                  </NavLink>
                </NavItem>

              {/* {auth.typeofuser === "vendor" ? (
                <NavItem>
                  <NavLink className="nav-link" to="/ratelist">
                    Item's Price Tag
                  </NavLink>
                </NavItem>
              ) : (
                <span></span>
              )} */}

              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  {auth.isAuthenticated ? (
                    <DropdownToggle nav caret>
                      <span className="fa fa-list fa-lg"></span> Menu
                    </DropdownToggle>
                  ) : (
                    <span></span>
                  )}
                  {auth.isAuthenticated ? (
                    <DropdownMenu className="DropdownMenu" right>
                      {auth.typeofuser === "seller" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink className="nav-link" to="/dashboard/seller">
                            DashBoard
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "seller" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink
                            className="nav-link"
                            to="/sellerDashboardProgress"
                          >
                            Order Status
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "vendor" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink className="nav-link" to="/dashboard/vendor">
                            DashBoard
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "rider" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink className="nav-link" to="/dashboard/rider">
                            DashBoard
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "seller" ? (
                        <DropdownItem className="DropdownMenu">
                          <DropdownItem divider />
                          <NavLink className="nav-link" to="/requestPickup">
                            Request pickup
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                    </DropdownMenu>
                  ) : (
                    <span></span>
                  )}
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
              {/* This Section has to be like depending upon the authenticated state of the user */}

              {auth.isAuthenticated ? (
                <Fragment>
                  <NavItem>
                    <NavLink to="/login" onClick={logout}>
                      <Button outline>
                        <span className="fa fa-sign-in fa-lg"></span> Logout
                      </Button>
                    </NavLink>
                  </NavItem>{" "}
                </Fragment>
              ) : (
                <Fragment>
                  <NavItem>
                    <NavLink to="/login">
                      <Button outline>
                        <span className="fa fa-sign-in fa-lg"></span> Login
                      </Button>
                    </NavLink>
                  </NavItem>{" "}
                  <NavItem>
                    <Button outline onClick={() => toggleModal()}>
                      <span className="fa fa-user-plus"></span> Sign-Up
                    </Button>
                  </NavItem>
                </Fragment>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
        <ModalHeader toggle={() => toggleModal()}>
          <h1> Sign up as </h1>
        </ModalHeader>
        <ModalBody>
          <Display onClick={() => toggleModal()} />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Header);
