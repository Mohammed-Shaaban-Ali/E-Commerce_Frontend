import "./Cart.css";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import { AiOutlineDelete } from "react-icons/ai";
import product4 from "../../images/product4.png";
import product1 from "../../images/product1.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/slices/authSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { userCartPrduct } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <>
      <SEO title=" Cart " />
      <BreadCrumb title=" Cart" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center ">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {userCartPrduct &&
                userCartPrduct?.map((product, index) => (
                  <div
                    key={index}
                    className="cart-data py-3 mb-4 d-flex justify-content-between align-items-center "
                  >
                    <div className="cart-col-1 d-flex flex-row gap-30  align-items-center">
                      <div className="cart-image">
                        <img
                          src={product?.productId?.images[0]?.url}
                          alt="product4"
                        />
                      </div>
                      <div className="cart-contant d-flex flex-column gap-10">
                        <p>{product?.productId?.title}</p>
                        <div className="d-flex flex-row gap-15">
                          <h5>Size :</h5>
                          <p>S</p>
                        </div>
                        <div className="d-flex flex-row gap-15">
                          <h5>Color :</h5>
                          <div
                            style={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                              backgroundColor: product?.color?.title,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h3>$ {product?.price}</h3>
                    </div>
                    <div className="cart-col-3 d-flex flex-row gap-15 align-items-center">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        value={product?.quantity}
                        style={{
                          width: "60px",
                          height: "40px",
                          textAlign: "center",
                        }}
                      />
                      <div className="delete-icon">
                        <AiOutlineDelete />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h3>$ {product?.quantity * product?.price}</h3>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-12">
              <div className="cart-footer">
                <button className="button">Continue Shopping</button>
                <div className="my-4 d-flex flex-row align-items-center justify-content-between">
                  <p>Order special instructions</p>
                  <p>
                    Subtotal{" "}
                    <span style={{ fontWeight: "bold" }}> $100.00</span>
                  </p>
                </div>
                <div className="d-flex flex-column gap-15 align-items-end">
                  <p>Taxes and shipping calculated at checkout</p>
                  <button className="button" style={{ width: "300px" }}>
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
