import React from "react";

import service from "../../images/service.png";
import service_02 from "../../images/service-02.png";
import service_03 from "../../images/service-03.png";
import service_04 from "../../images/service-04.png";
import service_05 from "../../images/service-05.png";

const Servies = () => {
  return (
    <div className="home-wrapper-2 p-5">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src={service} alt="servies" />
                <div>
                  <h6>Free Shipping</h6>
                  <p>Form all orders over $100</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src={service_02} alt="servies" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up 25% off</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src={service_03} alt="servies" />
                <div>
                  <h6>Support 25/7</h6>
                  <p>Shop with an expert</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src={service_04} alt="servies" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p>Get Factory direct price</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15 ">
                <img src={service_05} alt="servies" />
                <div>
                  <h6>Secure Payments</h6>
                  <p>100% Portected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servies;
