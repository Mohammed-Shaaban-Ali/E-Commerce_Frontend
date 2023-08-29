import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from "../../redux/slices/authSlice";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

import "./Cart.css";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import axios from "axios";

let userSchema = object({
  firstName: string().required("firstName is required"),
  lastName: string().required("lastName is required"),
  address: string().required("address is required"),
  state: string().required("state is required"),
  city: string().required("city is required"),
  country: string().required("country is required"),
  pincode: number().required("pincode is required"),
  other: string().required("country is required"),
});

const CheckOut = () => {
  const dispatch = useDispatch();
  const { userCartPrduct } = useSelector((state) => state.auth);

  const [totalSum, settotalSum] = useState(null);
  const [shippingInfo, setshippingInfo] = useState(null);
  const [paymentInfo, setpaymentInfo] = useState({
    razorpayOrderId: "",
    razorpayPaymentId: "",
  });

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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      setshippingInfo(values);
      displayRazorpay();
    },
  });

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await request.post(
      "/api/user/order/checkout",
      "",
      ConfigToken
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data.order;
    const options = {
      key: "rzp_test_lzWb771CXqE3Au", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Mohammed Shaaban.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        setpaymentInfo({
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        });
        const result = await request.post(
          "/api/user/order/paymentVerification",
          data,
          ConfigToken
        );

        // alert(result.data.msg);
      },
      prefill: {
        name: "Mohammed Shaaban",
        email: "ms7500746@gmail.com",
        contact: "01224146762",
      },
      notes: {
        address: "Egypt",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
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
                <form
                  onSubmit={formik.handleSubmit}
                  className=" d-flex flex-wrap gap-4 justify-content-between"
                >
                  <div className="w-100">
                    <select
                      className="form-control form-select"
                      onChange={formik.handleChange("country")}
                      value={formik.values.country}
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="Egypt">Egypt</option>
                    </select>
                    <div className="error">
                      {formik.touched.country && formik.errors.country ? (
                        <div>{formik.errors.country}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      onChange={formik.handleChange("firstName")}
                      value={formik.values.firstName}
                    />
                    <div className="error">
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      onChange={formik.handleChange("lastName")}
                      value={formik.values.lastName}
                    />
                    <div className="error">
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Addres"
                      className="form-control"
                      id="address"
                      name="address"
                      onChange={formik.handleChange("address")}
                      value={formik.values.address}
                    />
                    <div className="error">
                      {formik.touched.address && formik.errors.address ? (
                        <div>{formik.errors.address}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartmen, suite, ectc"
                      className="form-control"
                      id="other"
                      name="other"
                      onChange={formik.handleChange("other")}
                      value={formik.values.other}
                    />
                    <div className="error">
                      {formik.touched.other && formik.errors.other ? (
                        <div>{formik.errors.other}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      id="city"
                      name="city"
                      onChange={formik.handleChange("city")}
                      value={formik.values.city}
                    />
                    <div className="error">
                      {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <select
                      className="form-control form-select"
                      onChange={formik.handleChange("state")}
                      value={formik.values.state}
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      <option value="Haryana">Haryana</option>
                    </select>
                    <div className="error">
                      {formik.touched.state && formik.errors.state ? (
                        <div>{formik.errors.state}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZIP code"
                      className="form-control"
                      id="pincode"
                      name="pincode"
                      onChange={formik.handleChange("pincode")}
                      value={formik.values.pincode}
                    />
                    <div className="error">
                      {formik.touched.pincode && formik.errors.pincode ? (
                        <div>{formik.errors.pincode}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-between align-items-center">
                    <Link
                      to="/cart"
                      className="d-flex align-items-center gap-1 text-dark"
                    >
                      <FaAngleLeft style={{ fontSize: "24px" }} />
                      Return to cart
                    </Link>
                    <button type="submit" className="checkout-btn">
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
