import { useLocation, useNavigate } from "react-router-dom";

import BreadCrumb from "../../components/BreadCrumb";
import Features from "../../components/Home/Features";
import SEO from "../../components/SEO";
import ReactStars from "react-rating-stars-component";
import { GlassMagnifier } from "react-image-magnifiers";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
import { BsHeart } from "react-icons/bs";
import { TbGitCompare } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaRulerSolid } from "react-icons/lia";
import { SiMaterialdesignicons } from "react-icons/si";
import { Accordion } from "react-bootstrap";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import {
  addToWishList,
  getsingleProduct,
} from "../../redux/slices/productSlice";
import { addCart, getCart } from "../../redux/slices/authSlice";
import Color from "../../components/Store/Color";
import { toast } from "react-toastify";

const SingleProductPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const productId = pathname.split("/")[2];

  const [oprderProduct, setOprderProduct] = useState(true);
  const [reviweForm, setreviweForm] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [color, setcolor] = useState(null);
  const [alredyadd, setAlredyadd] = useState(false);

  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  const { userCartPrduct } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getsingleProduct(productId));
    dispatch(getCart());
  }, []);

  useEffect(() => {
    for (let i = 0; i < userCartPrduct?.length; i++) {
      if (productId === userCartPrduct[i]?.productId?._id) {
        setAlredyadd(true);
      }
    }
  }, []);

  const addToCart = (product) => {
    if (!color) toast.error("choose a color");
    else {
      dispatch(
        addCart({
          productId: product._id,
          price: product?.price,
          color,
          quantity,
        })
      );
      navigate("/cart");
    }
  };
  const addWishList = (id) => {
    dispatch(addToWishList(id));
  };

  return (
    <>
      <SEO title={singleProduct?.title} />
      <BreadCrumb title={singleProduct?.title} />

      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="bg-white">
            <div className="row">
              <div className="col-6">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#121212",
                    "--swiper-pagination-color": "#121212",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <div>
                    <SwiperSlide className="p-5">
                      <GlassMagnifier
                        allowOverflow={true}
                        magnifierBorderColor="black"
                        magnifierSize="250px"
                        square={false}
                        imageSrc={product1}
                        imageAlt="Example"
                        largeImageSrc={product1} // Optional
                      />
                    </SwiperSlide>

                    <SwiperSlide className="p-5">
                      <GlassMagnifier
                        magnifierBorderColor="black"
                        allowOverflow={true}
                        magnifierSize="250px"
                        square={false}
                        imageSrc={product2}
                        imageAlt="Example"
                        largeImageSrc={product2} // Optional
                      />
                    </SwiperSlide>

                    <SwiperSlide className="p-5">
                      <GlassMagnifier
                        magnifierBorderColor="black"
                        allowOverflow={true}
                        magnifierSize="250px"
                        square={false}
                        imageSrc={product3}
                        imageAlt="Example"
                        largeImageSrc={product3} // Optional
                      />
                    </SwiperSlide>

                    <SwiperSlide className="p-5">
                      <GlassMagnifier
                        magnifierBorderColor="black"
                        allowOverflow={true}
                        magnifierSize="250px"
                        square={false}
                        imageSrc={product4}
                        imageAlt="Example"
                        largeImageSrc={product4} // Optional
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      alt="product"
                      src={product1}
                      className="image-small img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="product"
                      src={product2}
                      className="image-small img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="product"
                      src={product3}
                      className="image-small img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="product"
                      src={product4}
                      className="image-small img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-6">
                <div className="main-product-details d-flex flex-column gap-10">
                  <h5>{singleProduct?.title}</h5>
                  <div className="d-flex gap-2 flex-column">
                    <h5 style={{ color: "green" }}>$ {singleProduct?.price}</h5>
                    <div className=" d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        edit={false}
                        size={24}
                        value={singleProduct?.totalrating.toString()}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">(2 reviews)</p>
                    </div>
                    <p>Write a reviews</p>
                  </div>

                  <div className="d-flex gap-3 flex-column">
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Brand : </h5>
                      <p className="mb-0">{singleProduct?.brand}</p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Categories : </h5>
                      <p className="mb-0">{singleProduct?.category}</p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Tags : </h5>
                      <p className="mb-0">{singleProduct?.tags} </p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>SKU : </h5>
                      <p className="mb-0">SKU027</p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Availability : </h5>
                      <p className="mb-0">{singleProduct?.quantity} in Stock</p>
                    </div>
                    <div className=" d-flex gap-10 flex-column">
                      <h5>Size : </h5>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="size">S</span>
                        <span className="size ">SM</span>
                        <span className="size">XL</span>
                      </div>
                    </div>
                    <div className=" d-flex gap-10 flex-column">
                      {!alredyadd && (
                        <>
                          <h5>Color : </h5>
                          <Color
                            setcolor={setcolor}
                            id={color ? color : ""}
                            colors={
                              singleProduct?.color ? singleProduct?.color : []
                            }
                          />
                        </>
                      )}
                    </div>

                    <div className=" d-flex gap-10 align-items-center">
                      {!alredyadd && (
                        <>
                          <h5>Quantity : </h5>
                        </>
                      )}
                      <div className="d-flex gap-15">
                        {!alredyadd && (
                          <>
                            <input
                              type="number"
                              name="Quantity"
                              id="Quantity"
                              style={{ width: "50px", textAlign: "center" }}
                              onChange={(e) => setQuantity(e.target.value)}
                              value={quantity}
                            />
                          </>
                        )}

                        <button
                          className="button"
                          onClick={() => {
                            alredyadd
                              ? navigate("/cart")
                              : addToCart(singleProduct ? singleProduct : []);
                          }}
                        >
                          {alredyadd ? "Go To Cart" : "Add To Cart"}
                        </button>
                        <button className="button2">Buy It Now</button>
                      </div>
                    </div>

                    <div className=" d-flex gap-30 ">
                      <div className="icon d-flex gap-10 align-items-center">
                        <BsHeart />
                        <p
                          onClick={() => addWishList(singleProduct?._id)}
                          className="mb-0"
                        >
                          Add to wishlist
                        </p>
                      </div>
                      <div className="icon d-flex gap-10 align-items-center">
                        <TbGitCompare />
                        <p className="mb-0">Add to compare</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="d-flex gap-10">
                            <LiaShippingFastSolid />
                            Shipping & Returns
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <div className="d-flex gap-10">
                            <SiMaterialdesignicons />
                            Materials
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <div className="d-flex gap-10">
                            <LiaRulerSolid />
                            Dimensions
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <div className="d-flex gap-10">
                            <BsHeart />
                            Care Instructions
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: singleProduct?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviwes-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3 ">
                <div className=" review-head align-items-end d-flex justify-content-between ">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className=" d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {oprderProduct && (
                    <div>
                      <span
                        className="wirterevew"
                        style={{
                          fontWeight: reviweForm ? "bold" : "normal",
                          color: reviweForm ? "black" : "gray",
                        }}
                        onClick={() => setreviweForm(!reviweForm)}
                      >
                        Wirte a Review
                      </span>
                    </div>
                  )}
                </div>
                {reviweForm && (
                  <form className="review-form d-flex flex-column gap-30">
                    <h4>Wirte a Review</h4>
                    <div className="">
                      <h5>Name</h5>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </div>

                    <div className="">
                      <h5>Email</h5>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="emailname@gmail.com"
                      />
                    </div>

                    <div className="">
                      <h5>Rating</h5>
                      <ReactStars
                        count={5}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>

                    <div className="">
                      <h5>Review Title</h5>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Give your review atitle"
                      />
                    </div>

                    <div className="">
                      <h5>Body of review (1500)</h5>
                      <textarea
                        style={{ height: "200px" }}
                        className="form-control"
                        placeholder="Write your comments here"
                      />
                      <button style={{ marginTop: "24px" }} className="button">
                        Submit Review
                      </button>
                    </div>
                  </form>
                )}
                <div className="review-list">
                  <div className="review-comment">
                    <ReactStars
                      count={5}
                      edit={true}
                      value={3}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <h4>Good</h4>
                    <p>
                      <span>aaaaaaa</span> on <span>Aug29,2022</span>
                    </p>
                    <p>saasas</p>
                  </div>
                  <div className="review-comment">
                    <ReactStars
                      count={5}
                      edit={true}
                      value={3}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <h4>Good</h4>
                    <p>
                      <span>aaaaaaa</span> on <span>Aug29,2022</span>
                    </p>
                    <p>saasas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default SingleProductPage;
