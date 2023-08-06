import "./Cart.css";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import { AiOutlineDelete } from "react-icons/ai";
import product4 from "../../images/product4.png";
import product1 from "../../images/product1.png";

const Cart = () => {
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

              <div className="cart-data py-3 mb-4 d-flex justify-content-between align-items-center ">
                <div className="cart-col-1 d-flex flex-row gap-30  align-items-center">
                  <div className="cart-image">
                    <img src={product4} alt="product4" />
                  </div>
                  <div className="cart-contant d-flex flex-column gap-10">
                    <p>
                      Kids headphones bulk 10 pack multi colored for students
                    </p>
                    <div className="d-flex flex-row gap-15">
                      <h5>Size :</h5>
                      <p>S</p>
                    </div>
                    <div className="d-flex flex-row gap-15">
                      <h5>Color :</h5>
                      <p>#A85A58</p>
                    </div>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h3>$100.00</h3>
                </div>
                <div className="cart-col-3 d-flex flex-row gap-15 align-items-center">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={1}
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
                  <h3>$100.00</h3>
                </div>
              </div>

              <div className="cart-data py-3 mb-4 d-flex justify-content-between align-items-center ">
                <div className="cart-col-1 d-flex flex-row gap-30  align-items-center">
                  <div className="cart-image">
                    <img src={product1} alt="product1" />
                  </div>
                  <div className="cart-contant d-flex flex-column gap-10">
                    <p>
                      Kids headphones bulk 10 pack multi colored for students
                    </p>
                    <div className="d-flex flex-row gap-15">
                      <h5>Size :</h5>
                      <p>S</p>
                    </div>
                    <div className="d-flex flex-row gap-15">
                      <h5>Color :</h5>
                      <p>#A85A58</p>
                    </div>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h3>$100.00</h3>
                </div>
                <div className="cart-col-3 d-flex flex-row gap-15 align-items-center">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={1}
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
                  <h3>$100.00</h3>
                </div>
              </div>
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
