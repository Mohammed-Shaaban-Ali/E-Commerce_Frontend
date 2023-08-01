import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import watch from "../../images/watch.jpg";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="spacial-product-card">
        <div className="d-flex justify-content-between">
          <div className="spacial-product-image">
            <img src={watch} className="img-fluid" alt="watch" />
          </div>
          <div className="spacial-product-contant">
            <h5 className="brand">Havels</h5>
            <h6 className="title">
              Samsung Galaxy Note10+ Mobile Phone; sim...
            </h6>
            <ReactStars
              classNames="stars"
              count={5}
              onChange={() => {}}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p>
              <span>$100</span> <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>Days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle  ">1</span>:
                <span className="badge rounded-circle  ">1</span>:
                <span className="badge rounded-circle  ">1</span>
              </div>
            </div>
            <div className="product-count my-3">
              <p>Products: 5</p>
              <ProgressBar now={60} />
            </div>
            <Link className="button">Add To Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
