import "./WishList.css";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import cross from "../../images/cross.svg";
import watch from "../../images/watch.jpg";
import { addToWishList } from "../../redux/slices/productSlice";
import { useEffect } from "react";
import { getWishList } from "../../redux/slices/authSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const { WishList } = useSelector((state) => state.auth);
  const userWishList = WishList?.wishlist;

  useEffect(() => {
    dispatch(getWishList());
  }, []);
  const removeWishList = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
      dispatch(getWishList());
    }, 200);
  };
  return (
    <>
      <SEO title="Wish List" />
      <BreadCrumb title="Wish List" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {userWishList.length == 0 && (
              <h2 className="text-center text-danger">No Data</h2>
            )}
            {userWishList?.map((item, index) => (
              <div className="col-3 " key={index}>
                <div className="compare-prosuct-card  ">
                  <div
                    onClick={() => removeWishList(item?._id)}
                    className="compare-prosuct-croos position-relative"
                  >
                    <img
                      src={cross}
                      alt="cross"
                      className="position-absolute img-fluid"
                    />
                    <div className="product-card-image">
                      <img src={item?.images[0]?.url} alt="watch" />
                    </div>
                  </div>
                  <div className="product-card-contant">
                    <Link to={`/product/${item?._id}`}>
                      {item?.title.substr(0, 50) + " ..."}
                    </Link>
                    <h6 style={{ color: "green" }}>$ {item?.price}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
