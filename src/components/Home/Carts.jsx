import cart1 from "../../images/cart1.png";
import cart2 from "../../images/cart2.png";
import cart3 from "../../images/cart3.png";
import cart4 from "../../images/cart4.png";

const Carts = () => {
  return (
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <div className="cart d-flex gap-15 flex-wrap justify-content-center align-items-center">
              <div className="active d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <p>BIG SCREEN</p>
                  <h6>Smart Watch Series 7</h6>
                  <p>Form $399 or $16.62/mo.for 24/mo*</p>
                </div>
                <img src={cart1} alt="cart1" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <p>STUDIO DISPLAY</p>
                  <h6>600 nits of brightness.</h6>
                  <p>27-inch 5K Retina display</p>
                </div>
                <img src={cart3} alt="cart3" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <p>HOME SPEAKERS</p>
                  <h6>Room-filling sound.</h6>
                  <p>Form $699 or $116.52/mo.for 12/mo*</p>
                </div>
                <img src={cart2} alt="cart2" />
              </div>

              <div className="d-flex gap-30 align-items-center justify-content-between">
                <div className="">
                  <p>SMARTPHONES</p>
                  <h6>Smartphone 13 Pro.</h6>
                  <p>Now in Green. Form $999.00 or $41.77/mo.</p>
                </div>
                <img src={cart4} alt="cart4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carts;
