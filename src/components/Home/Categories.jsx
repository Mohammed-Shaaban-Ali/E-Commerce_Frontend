import camera from "../../images/camera.jpg";
import tv from "../../images/tv.jpg";
import acc from "../../images/acc.jpg";
import homeapp from "../../images/homeapp.jpg";
import speaker from "../../images/speaker.jpg";
import headphone from "../../images/headphone.jpg";
import laptop from "../../images/laptop.jpg";

const Categories = () => {
  return (
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-center align-items-center">
              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Smart Tv</h6>
                  <p>12 Items</p>
                </div>
                <img src={tv} alt="tv" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Computers & Laptop</h6>
                  <p>6 Items</p>
                </div>
                <img src={laptop} alt="laptop" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Accessories</h6>
                  <p>8 Items</p>
                </div>
                <img src={headphone} alt="headphone" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Portable Speakers</h6>
                  <p>8 Items</p>
                </div>
                <img src={acc} alt="acc" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Home Appliances</h6>
                  <p>6 Items</p>
                </div>
                <img src={homeapp} alt="homeapp" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Portable Speaker</h6>
                  <p>8 Items</p>
                </div>
                <img src={speaker} alt="speaker" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <h6>Portable Speakers</h6>
                  <p>8 Items</p>
                </div>
                <img src={acc} alt="acc" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
