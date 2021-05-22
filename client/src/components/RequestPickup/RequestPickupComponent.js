import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Col, DropdownToggle, DropdownItem } from "reactstrap";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadNearbyVendors, vendorOrderList } from "../../actions/pickup";
import Spinner from "../layout/Spinner";
import { createRequest } from "../../actions/pickup";
import { loadUser } from "../../actions/auth";

const RequestPickup = ({
  user,
  loadNearbyVendors,
  vendors,
  createRequest,
  pickupRequest,
}) => {
  const [formData, setFormData] = useState({});
  //Updating vendors when there is a change in vendors
  useEffect(() => {
    setFormData({
      ...formData,
      wasteType:
        vendors !== undefined && vendors[0] !== undefined
          ? vendors[0].wasteType
          : [],
      vendorid:
        vendors !== undefined && vendors[0] !== undefined ? vendors[0]._id : "",
    });
  }, [vendors]);

  //updating the form data with user details which are required for creating the orders
  useEffect(() => {
    setFormData({
      city: user ? user.address.city : "",
      pincode: user ? user.address.pin : "",
      state: user ? user.address.state : "",
      firstLine: user ? user.address.firstLine : "",
      landmark: user ? user.address.landmark : "",
      orderList: [],
      dateOfPickup: "",
      timeOfPickup: "",
      recent: true,
    });
  }, [user]);

  //Destructuring the FormData
  var {
    city,
    pincode,
    state,
    firstLine,
    landmark,
    wasteType,
    orderList,
    dateOfPickup,
    timeOfPickup,
    recent,
  } = formData;

  //Creating the list of the waste type selected by the user of the vendor
  var options = [
    {
      value: "TV Appliance",
      label: "TV Appliance",
    },
    {
      value: "Computers",
      label: "Computers",
    },
    {
      value: "Laptops",
      label: "Laptops",
    },
    {
      value: "Tablets",
      label: "Tablets",
    },
    {
      value: "Mobile Phones",
      label: "Mobile Phones",
    },
    {
      value: "Fridge",
      label: "Fridge",
    },
    {
      value: "Washing Machine",
      label: "Washing Machine",
    },
    {
      value: "Home Theatre",
      label: "Home Theatre",
    },
    {
      value: "Stereo System",
      label: "Stereo System",
    },
    {
      value: "E-toys",
      label: "E-toys",
    },
    {
      value: "Kettle",
      label: "Kettle",
    },
    {
      value: "Heat Pump",
      label: "Heat Pump",
    },
    {
      value: "Air Conditioner",
      label: "Air Conditioner",
    },
    {
      value: "Toaster",
      label: "Toaster",
    },
    {
      value: "Electric Stove",
      label: "Electric Stove",
    },
    {
      value: "Printer",
      label: "Printer",
    },
    {
      value: "Vaccum Cleaner",
      label: "Vaccum Cleaner",
    },
    {
      value: "Microwave",
      label: "Microwave",
    },
    {
      value: "Camera",
      label: "Camera",
    },
    {
      value: "Griller",
      label: "Griller",
    },

  ];
  useEffect(() => {
    wasteType !== undefined
      ? wasteType.map((waste) => {
        var data = { label: waste.name, value: waste.name };
        options.push(data);
        return 1;
      })
      : options.push({ label: "Newspaper", value: "Newspaper" })
  }, [wasteType, orderList]);

  const [selectedOption, setState] = useState({
    selectedOption: null,
    qty: "",
  });

  const { qty } = selectedOption;
  const { type } = selectedOption;

  const handleChange = (selectedOption) => {
    setState({ selectedOption });
  };

  const handleQtyChange = (e) => {
    setState({ ...selectedOption, [e.target.name]: e.target.value });
  };

  const onAdd = (e) => {
    e.preventDefault();
    const dataToPush = {
      nameOfWaste: selectedOption.selectedOption.value,
      qty,
    };
    if (dataToPush.selectedOption === "" || dataToPush.qty === "")
      return alert("Please fill the form");
    orderList.push(dataToPush);
    setState({ selectedOption: null, qty: "" });
  };

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadNearbyVendors(pincode, city);
  }, [pincode, city, loadNearbyVendors]);

  const [toDateDisabled, toggleDisabled] = useState(recent);

  const request = (e) => {
    e.preventDefault();
    createRequest(formData);
    window.location.reload();
  };

  if (pickupRequest.length > 0) {
    return <Redirect to="/sellerDashboardProgress" />;
  }

  function Vendors(props) {
    return (
      <div className="vendor-list">
        <label class="container404">
          {props.vendor}
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }

  return (
    <div>
      <div className="seller-dashboard3">
        {/* HEADER SECTION */}
        <div className="gradient-section1">
          <Link to="/profile/seller">
            <div className="Profile-image-container">
              <div className="intro">
                <h4 style={{ color: "crimson" }}>
                  Hi!{" "}
                  {user ? (
                    <span>{user.name}</span>
                  ) : (
                    <span>Please Login again!</span>
                  )}
                </h4>
              </div>
              {/* PROFILE IMAGE OF SELLER */}
              {/* <div className="profile-image">
                <FcBusinessman className="seller-profile-pic" />
              </div> */}
            </div>
          </Link>
        </div>
        {/* REQUEST TO PICKUP SECTION */}
        <hr className="division1" />
        <h2>
          <center>Generate PickUp Request</center>
        </h2>{" "}
        <hr className="division1" />
        <div className="container">
          <Form>
            <FormGroup>
              <Label row htmlFor="address">
                <h4>
                  Address<span className="btn btn-large fa fa-edit"></span>
                </h4>
              </Label>
              <Input
                type="textarea"
                id="address"
                name="firstLine"
                rows="3"
                placeholder={firstLine}
                disabled={true}
                onChange={(e) => onChange(e)}
              />
              <Input
                type="text"
                id="landmark"
                name="landmark"
                placeholder={landmark}
                disabled={true}
                onChange={(e) => {
                  loadNearbyVendors(pincode, city);
                  onChange(e);
                }}
                hidden
              />
              <Input
                type="text"
                id="city"
                name="city"
                placeholder={city + " " + state}
                disabled={true}
                onChange={(e) => {
                  loadNearbyVendors(pincode, city);
                  onChange(e);
                }}
                hidden
              />
              <Input
                type="text"
                id="pincode"
                name="pincode"
                placeholder={pincode}
                disabled={true}
                onChange={(e) => {
                  onChange(e);
                }}
                hidden
              />

              <hr />
              <h4>Choose Vendor</h4>
              <br />
              {/* DISPLAY THE VENDORS NEAR THE LOCATION */}
              {vendors ? (
                vendors.length > 0 ? (
                  vendors.map((ven, index) => (
                    <Vendors vendor={ven.name} index={index} />
                  ))
                ) : (
                  <Spinner />
                )
              ) : (
                <center>"No Vendor Found. Please Try Again after Some Time!"</center>
              )}
            </FormGroup>
            <hr />
            <h4>Enter Waste Details</h4>
            <br />

            <FormGroup row>
              <Label htmlFor="wasteType" md={2}>
                Type of waste
              </Label>
              <Col md={{ size: 3 }}>
                <Select
                  options={options}
                  name="wasteType"
                  value={type}
                  className="basic-single"
                  classNamePrefix="select"
                  onChange={handleChange}
                />
              </Col>
              <Label htmlFor="wasteType" md={{ size: 3, offset: 1 }}>
                Waste Quantity (Pcs)
              </Label>
              <Col md={{ size: 3 }}>
                <Input
                  type="number"
                  id="quantity"
                  name="qty"
                  placeholder="Waste Quantity"
                  value={qty}
                  onChange={(e) => handleQtyChange(e)}
                />
              </Col>
              <Col md={2}>
                <Button color="dark" onClick={(e) => onAdd(e)}>
                  Add
                </Button>
              </Col>
            </FormGroup>
            <div className="table-responsive">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Waste Type</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList !== undefined ? (
                    orderList.map((waste, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{waste.nameOfWaste}</td>
                          <td>{waste.qty}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <span></span>
                  )}
                </tbody>
              </table>
            </div>
            <hr />

            {/* <h3>Select Slot</h3>
            <br />
            {/* Checkbox for recent request selection */}
            {/* <p>
              <input
                type="checkbox"
                name="current"
                checked={recent}
                value={recent}
                onChange={(e) => {
                  setFormData({ ...formData, recent: !recent });
                  toggleDisabled(!toDateDisabled);
                }}
              />{" "}
              Create A Recent Request 
            </p>  */}
            {/*
            {toDateDisabled ? (
              
              <div>
                
                <FormGroup row>
                  <Label htmlFor="date" md={2}>
                    Date of Pickup
                  </Label>
                  <Col md={3}>
                    <input
                      type="date"
                      id="date"
                      name="dateOfPickup"
                      placeholder="ENTER PICKUP DATE"
                      value={dateOfPickup}
                     onChange={(e) => onChange(e)}
                     
                    />
                  </Col>
                  <Label htmlFor="time" md={{ size: 2, offset: 1 }}>
                    Pickup Time
                  </Label>
                  <Col md={3}>
                    <input
                      type="time"
                      id="time"
                      name="timeOfPickup"
                      placeholder="ENTER PICKUP TIME"
                      value={timeOfPickup}
                     onChange={(e) => onChange(e)}
                     
                    />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup>
                  <br />
                </FormGroup>
              </div>
            ) : (
              <span></span>
            )}*/}
            <center>
              <Button type="submit" color="warning" onClick={(e) => request(e)} style={{ marginBottom: "2%" }}>
                Place Request
              </Button>
            </center>
          </Form>
        </div>
      </div>
    </div>
  );
};
RequestPickup.propTypes = {
  user: PropTypes.object.isRequired,
  loadNearbyVendors: PropTypes.func.isRequired,
  createRequest: PropTypes.func.isRequired,
  pickupRequest: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  vendors: state.pickup.vendors,
  pickupRequest: state.pickup.request,
});

export default connect(mapStateToProps, { loadNearbyVendors, createRequest })(
  RequestPickup
);
