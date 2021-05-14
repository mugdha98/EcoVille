import React, { useState, useEffect } from "react";
import "./home.module.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Media,
  Row,
  Col,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { url } from "gravatar";

// const items = [
//   {
//     src: "./assets/trial.jpg",
//     altText: "",
//     caption: "CLEAN ENERGY IS GREEN ENERGY",
//   }
// ];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  // const slides = items.map((item) => {
  //   return (
  //     <CarouselItem
  //       onExiting={() => setAnimating(false)}
  //       onExited={() => setAnimating(false)}
  //       key={item.src}
  //     >
  //       {/* <center> */}
  //       <img src={item.src} alt={item.altText} />
  //       <CarouselCaption
  //         // captionText={item.caption}
  //         captionHeader={item.caption}
  //       />
  //       {/* </center> */}
  //     </CarouselItem>
  //   );
  // });

  return (
    <React.Fragment>
      {/* <div className="banner_image">
        <div className="content" >
          <center>
            <div className="banner_content">
              <h3>CLEAN ENERGY IS GREEN ENERGY</h3>
            </div>
          </center>
        </div>
      </div> */}
      <div class="banner-image">
        <img src="./assets/trial.png" style={{
          flex: 1,
          width: '100%',
          height: '100 %',
          resizeMode: 'contain',
          // backgroundSize: 'cover',
        }} />
      </div>
      {/* <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
      </Carousel> */}
      {/* <div data-aos="fade-up">
      </div> */}
    </React.Fragment >
  );
};

export default Home;
