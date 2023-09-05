import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import addcart from "../../images/add-cart.svg";
import wish from "../../images/wish.svg";

import { addToWishList } from "../../redux/slices/productSlice";

const CardProducts = ({ grid, product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const addWishList = (id) => {
    dispatch(addToWishList(id));
  };
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
        <div
          style={{ width: grid === 6 || grid === 12 ? "40%" : "100%" }}
          className=" position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link onClick={() => addWishList(product?._id)}>
              <img src={wish} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src={product?.images[0]?.url} alt="watch" />
            <img
              src={
                product?.images[1]?.url
                  ? product?.images[1]?.url
                  : product?.images[0]?.url
              }
              alt="watch2"
            />
          </div>
          <div className="action-bar position-absolute">
            <div
              className={
                pathname === "/products"
                  ? `full-icon d-flex flex-column gap-15`
                  : "d-flex flex-column gap-15"
              }
            >
              <Link to="">
                <img src={prodcompare} alt="prodcompare" />
              </Link>
              <Link to={`/product/${product?._id}`}>
                <img src={view} alt="view" />
              </Link>
              <Link to="">
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={grid === 12 ? "product-contant my-3" : "product-contant"}
        >
          <h6>{product?.brand}</h6>
          <Link to={`/product/${product?._id}`}>
            <h5 className={grid === 12 ? `full-h5` : ""}>
              {product?.title.length >= 40
                ? product?.title.substr(0, 40) + "..."
                : product?.title}
            </h5>
          </Link>
          <p
            className={grid === 12 || grid === 6 ? ` mb-0 full-p` : "d-none"}
            dangerouslySetInnerHTML={{
              __html:
                product?.description.length >= 250
                  ? product?.description.substr(0, 250) + "..."
                  : product?.description,
            }}
          ></p>
          <ReactStars
            count={5}
            onChange={() => {}}
            value={product?.totalrating}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p style={{ color: "green", fontWeight: "bold" }}>
            $ {product?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
