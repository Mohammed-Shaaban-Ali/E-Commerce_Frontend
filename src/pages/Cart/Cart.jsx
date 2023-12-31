import "./Cart.css";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import { AiOutlineDelete } from "react-icons/ai";
import product4 from "../../images/product4.png";
import product1 from "../../images/product1.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  removeProductCart,
  updateProductCartUsingQuantity,
} from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";
import Reloader from "../../components/Reloader";

const Cart = () => {
  const [upadtequantity, setquantityNumber] = useState(null);
  const [totalSum, settotalSum] = useState(null);

  const dispatch = useDispatch();
  const { userCartPrduct, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    if (upadtequantity !== null)
      dispatch(
        updateProductCartUsingQuantity({
          cartItemId: upadtequantity?.id,
          newQuantity: upadtequantity?.quantity,
        })
      );
    setTimeout(() => {
      dispatch(getCart());
    }, 200);
  }, [upadtequantity]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < userCartPrduct?.length; i++) {
      sum =
        sum + Number(userCartPrduct[i]?.quantity) * userCartPrduct[i]?.price;
      settotalSum(sum);
    }
  }, [userCartPrduct]);

  const removeItemCart = (id) => {
    dispatch(removeProductCart(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 300);
  };
  const handlequantity = (e) => {
    if (upadtequantity !== null) {
      return upadtequantity.quantity;
    } else return e;
  };

  return (
    <>
      <SEO title=" Cart " />
      <BreadCrumb title=" Cart" />
      {isLoading ? (
        <Reloader />
      ) : (
        <>
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
                            value={handlequantity(product?.quantity)}
                            style={{
                              width: "60px",
                              height: "40px",
                              textAlign: "center",
                            }}
                            onChange={(e) =>
                              setquantityNumber({
                                id: product?._id,
                                quantity: e.target.value,
                              })
                            }
                          />
                          <div
                            className="delete-icon"
                            onClick={() => removeItemCart(product?._id)}
                          >
                            <AiOutlineDelete />
                          </div>
                        </div>
                        <div className="cart-col-4">
                          <h3>$ {product?.quantity * product?.price}</h3>
                        </div>
                      </div>
                    ))}
                </div>

                {userCartPrduct?.length !== 0 && (
                  <div className="col-12">
                    <div className="cart-footer">
                      <button className="button">Continue Shopping</button>
                      <div className="my-4 d-flex flex-row align-items-center justify-content-between">
                        <p>Order special instructions</p>
                        <p style={{ color: "black" }}>
                          Subtotal:
                          <span style={{ fontWeight: "bold" }}>
                            $ {totalSum ? totalSum : 0}
                          </span>
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-15 align-items-end">
                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to="/checkout" className="button">
                          Check Out
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
