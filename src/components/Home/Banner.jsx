import catbanner_01 from "../../images/catbanner-01.jpg";
import catbanner_02 from "../../images/catbanner-02.jpg";
import catbanner_03 from "../../images/catbanner-03.jpg";
import catbanner_04 from "../../images/catbanner-04.jpg";
import Slider from "./Slider";

const Banner = () => {
  return (
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row banarres">
          <div className="col-6 banardev">
            <Slider />
          </div>

          <div className="col-6 banardev">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src={catbanner_01}
                  alt="catbanner_01"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>BEST SALE.</h5>
                  <h6>Laptops Max</h6>
                  <p>
                    From $1699.00 or <br />
                    $64.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  src={catbanner_03}
                  alt="catbanner_03"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>New arrival</h5>
                  <h6>Buy IPad Air</h6>
                  <p>
                    From $599.00 or <br />
                    $49.62/mo, for 12 mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  src={catbanner_02}
                  alt="catbanner_02"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>15% OFF</h5>
                  <h6>Smartwatch 7</h6>
                  <p>
                    shop the lastest band <br />
                    styles and colors.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  src={catbanner_04}
                  alt="catbanner_04"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>free engraving</h5>
                  <h6>AirPods MAx</h6>
                  <p>
                    High-fidelity playback&
                    <br />
                    ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
