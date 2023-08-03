import "./WishList.css";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

import cross from "../../images/cross.svg";
import watch from "../../images/watch.jpg";
const WishList = () => {
  return (
    <>
      <SEO title="Wish List" />
      <BreadCrumb title="Wish List" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 compare-prosuct-card ">
              <div className="compare-prosuct-croos position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute img-fluid"
                />
                <div className="product-card-image">
                  <img src={watch} alt="watch" />
                </div>
              </div>
              <div className="product-card-contant">
                <Link>Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G </Link>
                <h6>$ 100.00</h6>
              </div>
            </div>
            <div className="col-3 compare-prosuct-card ">
              <div className="compare-prosuct-croos position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute img-fluid"
                />
                <div className="product-card-image">
                  <img src={watch} alt="watch" />
                </div>
              </div>
              <div className="product-card-contant">
                <Link>Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G </Link>
                <h6>$ 100.00</h6>
              </div>
            </div>
            <div className="col-3 compare-prosuct-card ">
              <div className="compare-prosuct-croos position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute img-fluid"
                />
                <div className="product-card-image">
                  <img src={watch} alt="watch" />
                </div>
              </div>
              <div className="product-card-contant">
                <Link>Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G </Link>
                <h6>$ 100.00</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
