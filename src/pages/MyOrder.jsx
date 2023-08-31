import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrder } from "../redux/slices/authSlice";
import BreadCrumb from "../components/BreadCrumb";

const MyOrder = () => {
  const dispatch = useDispatch();
  const { getmyorder, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getMyOrder());
  }, []);
  return (
    <>
      <BreadCrumb title="My Order" />
      <div className="container cart-wrapper home-wrapper-2 py-5">
        <div className="row text-center">
          <div className="col-12">
            <div className="row mb-4">
              <div className="col-3 ">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount After Descount</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
          </div>
          {getmyorder?.map((order, i) => (
            <div key={i} className="col-12 mt-3">
              <div style={{ backgroundColor: "#febd69" }} className="row py-4">
                <div className="col-3 ">
                  <h6>{order?._id}</h6>
                </div>
                <div className="col-3">
                  <h6>$ {order?.totalPrice}</h6>
                </div>
                <div className="col-3">
                  <h6>$ {order?.totalPriceAfterDiscount}</h6>
                </div>
                <div className="col-3">
                  <h6>{order?.orderStatus}</h6>
                </div>

                <div className=" col-12">
                  <div
                    style={{ backgroundColor: "rgb(255 202 136)" }}
                    className="row p-3 "
                  >
                    <div className="col-3 ">
                      <p>Product Name</p>
                    </div>
                    <div className="col-3">
                      <p>Quantity</p>
                    </div>
                    <div className="col-3">
                      <p>Price</p>
                    </div>
                    <div className="col-3">
                      <p>Color</p>
                    </div>
                    {order?.orderItems?.map((item, i) => (
                      <div key={i} className="col-12">
                        <div
                          style={{ backgroundColor: "rgb(255 215 165)" }}
                          className="row p-3 "
                        >
                          <div className="col-3 ">
                            <p>{item?.product?.title}</p>
                          </div>
                          <div className="col-3">
                            <p>{item?.quantity}</p>
                          </div>
                          <div className="col-3">
                            <p>{item?.price}</p>
                          </div>
                          <div className="col-3">
                            <p
                              style={{
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%",
                                backgroundColor: item?.color?.title,
                                margin: "auto",
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrder;
