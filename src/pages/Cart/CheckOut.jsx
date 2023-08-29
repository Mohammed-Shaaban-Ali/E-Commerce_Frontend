import "./Cart.css";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import product1 from "../../images/product1.png";
import product4 from "../../images/product4.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from "../../redux/slices/authSlice";

const CheckOut = () => {
  const [totalSum, settotalSum] = useState(null);

  const dispatch = useDispatch();
  const { userCartPrduct } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < userCartPrduct?.length; i++) {
      sum =
        sum + Number(userCartPrduct[i]?.quantity) * userCartPrduct[i]?.price;
      settotalSum(sum);
    }
  }, [userCartPrduct]);
  return (
    <>
      <SEO title=" Check Out " />
      <BreadCrumb title=" Check Out" />
      <div className="checkout-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="check-left-data">
                <h3 className="website-name">Dev Corner</h3>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link style={{ color: "black", fontWeight: "bold" }} to="/">
                      Home
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link
                      style={{ color: "black", fontWeight: "bold" }}
                      to="/cart"
                    >
                      Cart
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Payment</Breadcrumb.Item>
                </Breadcrumb>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">
                  Mohamed Shaaban (ms7500746@gmail.com)
                </p>
                <h4>Shipping Address</h4>
                <form className=" d-flex flex-wrap gap-4 justify-content-between">
                  <div className="w-100">
                    <select className="form-control form-select">
                      <option selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Addres"
                      className="form-control"
                    />
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartmen, suite, ectc"
                      className="form-control"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option selected disabled>
                        Egypt
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZIP code"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100 d-flex justify-content-between align-items-center">
                    <Link
                      to="/"
                      className="d-flex align-items-center gap-1 text-dark"
                    >
                      <FaAngleLeft style={{ fontSize: "24px" }} />
                      <p className="mb-0">Return to cart</p>
                    </Link>
                    <button className="checkout-btn">
                      Continue to shipping
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-5">
              <div className="check-right-data">
                {userCartPrduct?.map((product, index) => (
                  <div
                    key={index}
                    className="product-details d-flex flex-row gap-30 mb-4"
                  >
                    <div className="d-flex flex-row gap-4 align-items-center justify-content-center">
                      <div className="product-details-image position-relative">
                        <img
                          src={product?.productId?.images[0]?.url}
                          className="img-fluid"
                          alt="product1"
                        />
                        <div className="number">
                          <p>{product?.quantity}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-15">
                        <h6 className="mb-1 ">
                          {product?.productId?.title.length >= 30
                            ? product?.productId?.title.substr(0, 30) + "..."
                            : product?.productId?.title}
                        </h6>
                        <p
                          style={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "50%",
                            backgroundColor: product?.color?.title,
                          }}
                        ></p>
                      </div>
                    </div>
                    <h4>$ {product?.quantity * product?.price}</h4>
                  </div>
                ))}

                <div className="price-details">
                  <div className="d-flex justify-content-between align-items-center ">
                    <p>Subtotal</p>
                    <p style={{ fontWeight: "bold" }}>
                      $ {totalSum ? totalSum : 0}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p>Shipping</p>
                    <p style={{ fontWeight: "bold" }}>$ 4.99</p>
                  </div>
                </div>
                <div className="mt-3 d-flex justify-content-between align-items-center ">
                  <h5>Total</h5>
                  <h4>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "gray",
                        marginRight: "8px",
                        opacity: "0.8",
                      }}
                    >
                      USD
                    </span>
                    $ {totalSum ? totalSum + 4.99 : 0}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
