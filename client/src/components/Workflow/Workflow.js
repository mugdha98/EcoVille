import React from "react";
import { Jumbotron } from "reactstrap";
import bg from './bg.jpg';
import {
  Card,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
const customstyle = {
  paddingLeft: "35%",
  backgroundPosition: 'center',
  backgroundRepeat: 'norepeat',
  backgroundSize: 'cover',
  height: '800px',
}

const Workflow = () => {
  return (
    // <div>
    //   <Jumbotron className="jumbobg">
    //     <div></div>
    //   </Jumbotron>
    //   <hr />
    // </div>

    <div className="container" >
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>How it Works</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div >
        <img src={bg} style={customstyle}>
        </img>
      </div>
    </div>
  );
};

export default Workflow;
