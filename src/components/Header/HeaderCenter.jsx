import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";

import { BsSearch } from "react-icons/bs";
import compare from "../../images/compare.svg";
import wishlist from "../../images/wishlist.svg";
import userimage from "../../images/user.svg";
import cart from "../../images/cart.svg";
import { getCart } from "../../redux/slices/authSlice";
import { getProducts, getsingleProduct } from "../../redux/slices/productSlice";

const HeaderCenter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productOrders, setproductOrders] = useState([]);
  const [paginate, setPaginate] = useState(true);
  const [totalSum, settotalSum] = useState(null);

  const { userCartPrduct, user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < userCartPrduct?.length; i++) {
      sum =
        sum + Number(userCartPrduct[i]?.quantity) * userCartPrduct[i]?.price;
      settotalSum(sum);
    }
  }, [userCartPrduct]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) dispatch(getCart());
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < products?.length; index++) {
      const element = products[index];
      data.push({ id: index, productId: element?._id, name: element?.title });
    }
    setproductOrders(data);
  }, [products]);

  return (
    <header className="header-upper  pt-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-2">
            <h2>
              <Link className="text-white">Dev Corner</Link>
            </h2>
          </div>

          <div className="col-5 ">
            <div className="input-group mb-3">
              <Typeahead
                id="pagination-example"
                options={productOrders}
                paginate={paginate}
                labelKey="name"
                onChange={(e) => {
                  navigate(`/product/${e[0]?.productId}`);
                  if (e[0]?.productId)
                    dispatch(getsingleProduct(e[0]?.productId));
                }}
                minLength={1}
                placeholder="Search Product Here..."
              />
              <span className="input-group-text " id="basic-addon2">
                <BsSearch />
              </span>
            </div>
          </div>

          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-around">
              <div>
                <Link
                  to="/compare-products"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src={compare} alt="compare" />
                  <p className="mb-0">
                    Compare <br /> Products
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/wishlist"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src={wishlist} alt="wishlist" />
                  <p className="mb-0">
                    Favourite <br /> wishlist
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to={user ? "/my-profile" : "/login"}
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src={userimage} alt="user" />
                  {user ? (
                    user?.firstName
                  ) : (
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  )}
                </Link>
              </div>

              <div>
                <Link
                  to="/cart"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src={cart} alt="cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">
                      {userCartPrduct?.length ? userCartPrduct?.length : 0}
                    </span>
                    <p className="mb-0">$ {totalSum ? totalSum : 0}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCenter;
