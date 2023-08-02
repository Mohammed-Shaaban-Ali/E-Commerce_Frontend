import ReactStars from "react-rating-stars-component";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import camera from "../../images/camera.jpg";
import speaker from "../../images/speaker.jpg";
const SideBar = () => {
  return (
    <div className="col-3">
      <div className="filter-card mb-3">
        <h5>Shop By Categories</h5>
        <div className="d-flex flex-column gap-15 ">
          <Link to="/">Home</Link>
          <Link to="/store">Our Store</Link>
          <Link to="/Blogs">Blogs</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      <div className="filter-card mb-3">
        <h5>Filter By</h5>

        <div className="d-flex flex-column gap-15 ">
          <div className="availabilty">
            <h6>Availabilty</h6>
            <Form>
              <div className="">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="In stock (1)"
                />

                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Out stock (0)"
                />
              </div>
            </Form>
          </div>
        </div>

        <div className="d-flex flex-column gap-15 ">
          <div className="Price">
            <h6>Price</h6>
            <div className="form d-flex gap-10 align-items-center ">
              <Form className="d-flex gap-15 align-items-center justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Form" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="To" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column gap-15 ">
          <div className="color">
            <h6>Color</h6>
            <div className="">
              <div>
                <ul className="colors ps-0">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column gap-15 ">
          <div className="size">
            <h6>Size</h6>
            <Form>
              <div className="">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Sm(1)"
                />

                <Form.Check
                  disabled
                  type="checkbox"
                  id="default-checkbox"
                  label="M(0)"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="filter-card mb-3">
        <h5>Product Tags</h5>
        <div className="d-flex flex-wrap gap-15 ">
          <span className="product-tag-span">Headphones</span>
          <span className="product-tag-span">Laptop</span>
          <span className="product-tag-span">Oppo</span>
          <span className="product-tag-span">monile</span>
          <span className="product-tag-span">Vivo</span>
          <span className="product-tag-span">Writ</span>
        </div>
      </div>
      <div className="filter-card mb-3">
        <h5>Random Product</h5>
        <div className="d-flex flex-wrap flex-column ">
          <div className="product d-flex  align-items-center row">
            <img src={camera} className=" col-5" alt="camera" />
            <div className="d-flex flex-column  col-7">
              <h6>Kids headphones bulk 10 pack multi colored for...</h6>
              <ReactStars
                count={5}
                onChange={() => {}}
                value={3}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p>$100.00</p>
            </div>
          </div>

          <div className="product d-flex  align-items-center row">
            <img src={speaker} className=" col-5" alt="speaker" />
            <div className="d-flex flex-column  col-7">
              <h6>Kids headphones bulk 10 pack multi colored for...</h6>
              <ReactStars
                count={5}
                onChange={() => {}}
                value={3}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p>$100.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
