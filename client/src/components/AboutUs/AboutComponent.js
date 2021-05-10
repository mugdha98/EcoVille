import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Jumbotron,
  Media,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Team(props) {
  return (
    <div classname="container">
      <Media>
        <Image
          src={props.src}
          style={{ maxWidth: 175, maxHeight: 175 }}
          alt="EcoVille"
          roundedCircle
          fluid
        />

        <Media body align-self-center className="ml-1">
          <Media heading>
            <h2 style={{ fontFamily: "Joti one", color: "black" }}>
              {props.name}
            </h2>
          </Media>
          <p>{props.post}</p>
        </Media>
      </Media>
    </div>
  );
}

function About(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <Jumbotron>
            <div className="container">
              <div className="row row-header">
                <div className="col-12">
                  <h1>Our Vision</h1>
                  <p>
                    EcoVille is a platform that always works for a sustainable tomorrow.
                    It aims to <em>DO THE RIGHT THING</em> in <em>THE RIGHT WAY</em> for a better tomorrow.
                    It is as easy as calling and dropping of the phone and <b>SKADOOSH!!!</b>
                    Your old trash is now our treasure and you got freed of them with just a single click.
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>

          <h2>About</h2>
          <p>
            EcoVille started as a web development project
            based on Waste Management as the Final Year Project. We aim to
            create an understanding for the proper waste disposal. Making people recognise
            types of waste and the importance of processing them is a small step
            in that direction. We believe that this initiative will inspire more
            people to opt for proper disposing of waste instead of getting inappropriately
            rid of them. The concept of sustainability is something we need to
            incorporate into our daily lives. It is quintessential in ensuring
            the wellness of future generations and, we at EcoVille are all about
            it!
          </p>
          <p></p>
        </div>
        <div className="col-12 col-md-6">
          <Card border-info mb-3 >
            <CardHeader className="bg-info text-light" img>
              <i class="fa fa-bullhorn"></i> Staggering Facts
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-5">Yearly Disposal</dt>
                <dd className="col-7">Around <strong>50m</strong> tonnes</dd>
                <dt className="col-5">Recycling Rates</dt>
                <dd className="col-7">Only <strong>15-20 percent</strong> of all waste generated</dd>
                <dt className="col-5">Job opportunities</dt>
                <dd className="col-7">96 new jobs each year for every 10,000 tons of computer waste that gets processed</dd>
                <dt className="col-5">Power of Recycling</dt>
                <dd className="col-7">Recycling One Million Laptops saves the same amount of energy that it would take to power 3,657 homes each year</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
