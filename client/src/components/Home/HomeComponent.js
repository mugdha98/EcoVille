import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const items = [
  {
    src: "./assets/Slide_1.PNG",
    altText: "",
    caption: "",
  },
  {
    src: "./assets/Slide_2.PNG",
    altText: "",
    header: "",
    caption: "",
  },
  {
    src: "./assets/Slide_3.PNG",
    altText: "",
    header: "",
    caption: "",
  },
  {
    src: "./assets/Slide_4.PNG",
    altText: "",
    header: "",
    caption: "",
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <center>
          <img src={item.src} alt={item.altText} />
          <div>
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.header}
            />
          </div>
        </center>
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <div className="background"
        style={{
          backgroundImage: 'url(./assets/home_6.png)',
          resizeMode: 'contain',
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      >
        <div >
          <center>
            <h1 className="title"><em> Welcome to EcoVille </em></h1>
            <p className="subtitle">"Let’s bring together green revolution."</p>
          </center>
        </div>
      </div>
      <hr />
      <Carousel activeIndex={activeIndex} next={next} previous={previous} className="background">
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div data-aos="fade-up">
      </div>
      <div className="container">
        <div className="row">
          <div className="row row-content">
            <div className="col-md-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="./assets/seller1.png" style={{ width: "350px", height: "300px" }} />
                  </div>
                  <div className="flip-card-back">
                    <h1>Who is Seller?</h1>
                    <hr />
                    <p style={{ fontFamily: "New Century Schoolbook, serif" }}>
                      A seller is someone who has recyclable waste which they can sell and gets money in exchange.
                      Seller has to sign up and make a pickup request to sell their waste .
                        The seller can also stay updated with the order status by the same.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="./assets/rider_card.PNG" style={{ width: "350px", height: "300px" }} />
                  </div>
                  <div className="flip-card-back">
                    <h1>Who is Rider?</h1>
                    <hr />
                    <p style={{ fontFamily: "New Century Schoolbook, serif" }} >Riders are volunteers who serve as local ragpickers.
                    The riders provide the facility of pickup at the doorstep.
                    The rider has to sign up and orders details will be shown to them.
                    They approach the seller and collect the waste and also drop it at vendors place.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="./assets/vendor_card.PNG" style={{ width: "350px", height: "300px" }} />
                  </div>
                  <div className="flip-card-back">
                    <h1>Who is Vendor?</h1>
                    <hr />
                    <p style={{ fontFamily: "New Century Schoolbook, serif" }}>Vendors are the local dealers who will process the waste properly.
                    Vendor has to Sign up and EcoVille will notify you your orders.
                    Now no need to spend your time and money for finding the mode of transportation as we have our Riders ready for your service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <center>
                Who is Seller?
              </center>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              A seller is someone who has recyclable waste which they can sell and gets money in exchange. <br />
              Seller has to sign up and make a pickup request to sell their waste .<br />
              The seller can also stay updated with the order status by the same.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <center>
                Who is Rider?
                </center>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Riders are volunteers who serve as local ragpickers. <br />
              The riders provide the facility of pickup at the doorstep.<br />
              The rider has to sign up and orders details will be shown to them. <br />
              They approach the seller and collect the waste and also drop it at vendors place.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <center>
                Who is Vendor?
                </center>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Vendors are the local dealers who will process the waste properly.<br />
              Recycling Companies now get a chance to deal with their customers directly through EcoVille.<br />
              All you have to do is to create an account on EcoVille and hence EcoVille will notify you your orders. <br />
              Now no need to spend your time and money for finding the mode of transportation as we have our Riders ready for your service.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> */}
    </React.Fragment >
  );
};

export default Home;
