import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import addcart from "../../images/add-cart.svg";
import wish from "../../images/wish.svg";
import watch from "../../images/watch.jpg";
import watch2 from "../../images/watch2.png";
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
        <div className="position-relative">
          <div className="wishlist-icon position-absolute">
            <Link onClick={() => addWishList(product?._id)}>
              <img src={wish} alt="wish" />
            </Link>
          </div>
          <dev className="product-image">
            <img src={product?.images[0]?.url} alt="watch" />
            <img src={watch2} alt="watch2" />
          </dev>
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
          <h5 className={grid === 12 ? `full-h5` : ""}>
            {product?.title.substr(0, 40) + "..."}
          </h5>
          <p
            className={grid === 12 ? ` mb-0 full-p` : "d-none"}
            dangerouslySetInnerHTML={{ __html: product?.description }}
          ></p>
          <ReactStars
            count={5}
            onChange={() => {}}
            value={product?.totalrating.toString()}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p>$ {product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
