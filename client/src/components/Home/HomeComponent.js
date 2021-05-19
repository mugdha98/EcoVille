import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const items = [
  {
    src: "./assets/add1.jpg",
    altText: "",
    header: "If They can, so can we!!",
  },
  {
    src: "./assets/seller_buyer.jpg",
    altText: "",
    header: "SELLER",
    caption: "People who want to sell the waste",
  },
  {
    src: "./assets/rider.PNG",
    altText: "",
    header: "RIDER",
    caption: "People who will collect the waste at the doorstep",
  },
  {
    src: "./assets/vendor1.jpg",
    altText: "",
    header: "VENDOR",
    caption: "The local dealers who will process the waste",
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
              // captionText={<p style={{ color: "#801336", fontSize: "1.5em", paddingRight: "15%" }} > {item.caption}</p>}
              captionHeader={<h1 style={{ color: "#07031a", fontSize: "2em", paddingRight: "7%" }}>{item.header}</h1>}
            />
          </div>
        </center>
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <div style={{
        backgroundImage: 'url(./assets/1.jpg)',
        resizeMode: 'contain',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        height: "700px"
      }}>
        <div style={{ color: "white", paddingTop: "10%", paddingLeft: "5%", fontFamily: "cursive" }}>
          <h1 style={{ fontSize: "4em", color: "#abbaab" }}><em> Welcome to EcoVille </em></h1>
          <p>Better Recycling means better tomorrow</p>
          <p>Be RICH be GREEN </p>
          <p>Your Trash is Our Treasure</p>
        </div>
      </div>
      <hr />
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
      <Accordion defaultActiveKey="0">
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
      <Accordion defaultActiveKey="0">
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
      <Accordion defaultActiveKey="0">
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
              The local dealers who will process the waste properly.<br />
              Recycling Companies now get a chance to deal with their customers directly through EcoVille.<br />
              All you have to do is to create an account on EcoVille and hence EcoVille will notify you your orders. <br />
              Now no need to spend your time and money for finding the mode of transportation as we have our Riders ready for your service.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment >
  );
};

export default Home;
