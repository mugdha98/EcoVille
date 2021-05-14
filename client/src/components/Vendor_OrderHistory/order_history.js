import React from "react";
import { Link } from "react-router-dom";
import OHstyles from "./order_history.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import Moment from "react-moment";

export const OrderHistory = ({ requests, user }) => {
  function OrderDetails(props) {
    return (
      <tr>
        <td>{props.OrderNo}</td>
        <td>{props.PickupSlot}</td>
        <td>{props.SellerName}</td>
        <td>{props.DropSlot}</td>
        <td className={OHstyles.invoice}>{props.Invoice}</td>
      </tr>
    );
  }

  return (
    <div className={OHstyles.out_container}>
      <div>
        {/* <div className={OHstyles.greet_vendor}>
          <Link to="/profile/vendor">
            GRADIENT BAR
            <div className={OHstyles.vendor_greeting_text}>
              <h2>Welcome {user ? user.name : ""}!</h2>
              GREET VENDOR
            </div>
          </Link>
        </div> */}

        <div className={OHstyles.vendor_order_history}>
          <div className={OHstyles.list_heading}>
            <h2 style={{ color: "white" }}>ORDER HISTORY</h2>
          </div>

          <div className={OHstyles.bgeffect}>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>ORDER NO.</th>
                  <th>PICKUP SLOT</th>
                  <th>CUSTOMER NAME</th>
                  <th>DROP SLOT</th>
                  <th>INVOICE</th>
                </tr>
              </thead>

              <tbody>
                {/* <OrderDetails
                  OrderNo="#1234"
                  PickupSlot="16/01/2021 19:00"
                  SellerName="Amy"
                  DropSlot="16/01/2021 20:00"
                  Invoice="1234Amy.pdf"
                />

                <OrderDetails
                  OrderNo="#5678"
                  PickupSlot="17/01/2021 09:00"
                  SellerName="Jake"
                  DropSlot="17/01/2021 10:00"
                  Invoice="5678Jake.pdf"
                />

                <OrderDetails
                  OrderNo="#1357"
                  PickupSlot="17/01/2021 16:00"
                  SellerName="Charles"
                  DropSlot="17/01/2021 17:00"
                  Invoice="1357Charles.pdf"
                /> */}
              </tbody>
            </Table>
          </div>

          <div className={OHstyles.return_btn}>
            <Link to="/dashboard/vendor">
              <Button variant="secondary">RETURN TO DASHBOARD</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  requests: state.pickup.request,
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(OrderHistory);