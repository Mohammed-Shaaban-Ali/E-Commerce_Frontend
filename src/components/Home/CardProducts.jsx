import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import watch from "../../images/watch.jpg";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import addcart from "../../images/add-cart.svg";
import wish from "../../images/wish.svg";
import watch2 from "../../images/watch2.png";

const CardProducts = ({ grid }) => {
  const { pathname } = useLocation();
  return (
    <div className={pathname === "/products" ? `col-${grid} ` : "col-2 mb-3"}>
      <div
        className={
          grid === 6 || grid === 12
            ? `d-flex product-card m-2 mt-4 `
            : pathname === "/products"
            ? " product-card m-2 mt-4"
            : "product-card  "
        }
      >
        <div className="position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} alt="watch" />
            <img src={watch2} alt="watch2" />
          </div>
          <div className="action-bar position-absolute">
            <div
              className={
                pathname === "/products"
                  ? `full-icon d-flex flex-column gap-15`
                  : "d-flex flex-column gap-15"
              }
            >
              <Link>
                <img src={prodcompare} alt="prodcompare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={grid === 12 ? "product-contant my-3" : "product-contant"}
        >
          <h6>Havels</h6>
          <h5 className={grid === 12 ? `full-h5` : ""}>
            Kids headphones bulk 10 pack multi colored for...
          </h5>
          <p className={grid === 12 ? ` mb-0 full-p` : "d-none"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            eaque dolorem veniam explicabo quibusdam at quaerat facilis
            dignissimos pariatur expedita praesentium.
          </p>
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
  );
};

export default CardProducts;
