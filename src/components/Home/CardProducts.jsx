import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import watch from "../../images/watch.jpg";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import addcart from "../../images/add-cart.svg";
import wish from "../../images/wish.svg";
import watch2 from "../../images/watch2.png";

const CardProducts = () => {
  return (
    <div className="col-2">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="wish" />
          </Link>
        </div>
        <div className="product-image">
          <img src={watch} alt="watch" />
          <img src={watch2} alt="watch2" />
        </div>
        <div className="product-contant">
          <h6>Havels</h6>
          <h5>Kids headphones bulk 10 pack multi colored for...</h5>
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
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
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
    </div>
  );
};

export default CardProducts;
