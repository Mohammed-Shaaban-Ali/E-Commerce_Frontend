import Carousel from "react-bootstrap/Carousel";
import React from "react";
import main_banner_1 from "../../images/main-banner-1.jpg";
import main_banner_2 from "../../images/main-banner.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="main-banner position-relative ">
          <img
            src={main_banner_1}
            alt="main_banner_1"
            className="img-fluid rounded-3"
          />
          <div className="main-banner-content position-absolute">
            <h5>SUPERCHARGED FOR PROS.</h5>
            <h6>iPad S13+ Pro.</h6>
            <p>
              From $999.00 or $41.62/mo. <br />
              for 24 mo. Footnote*
            </p>
            <Link className="button">BUY NOW</Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className="main-banner position-relative ">
          <img
            src={main_banner_2}
            alt="main_banner_2"
            className="img-fluid rounded-3"
          />
          <div className="main-banner-content position-absolute">
            <h5>SUPERCHARGED FOR PROS.</h5>
            <h6>Special Sale</h6>
            <p>
              From $999.00 or $41.62/mo. <br />
              for 24 mo. Footnote*
            </p>
            <Link className="button">BUY NOW</Link>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
