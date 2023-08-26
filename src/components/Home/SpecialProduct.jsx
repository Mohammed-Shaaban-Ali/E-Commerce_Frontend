import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import watch from "../../images/watch.jpg";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = ({ product }) => {
  return (
    <div className="col-6 mb-3">
      <div className="spacial-product-card">
        <div className="d-flex justify-content-between">
          <div className="spacial-product-image">
            <img
              src={product?.images[0]?.url}
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div className="spacial-product-contant">
            <h5 className="brand">{product?.brand}</h5>
            <h6 className="title">{product?.title.substr(0, 40) + "..."}</h6>
            <ReactStars
              classNames="stars"
              count={5}
              onChange={() => {}}
              value={product?.totalrating?.toString()}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p>
              <span>$ {product?.price}</span> <strike>$200</strike>
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
              <p>Products: {product?.quantity}</p>
              <ProgressBar
                now={
                  ((product?.quantity - product?.sold) / product?.quantity) *
                  100
                }
              />
            </div>
            <Link className="button">Add To Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
