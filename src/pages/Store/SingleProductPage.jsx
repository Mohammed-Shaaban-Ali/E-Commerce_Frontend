import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Features from "../../components/Home/Features";
import SEO from "../../components/SEO";
import ReactStars from "react-rating-stars-component";
import ReactImageMagnify from "react-image-magnify";
import watch from "../../images/watch.jpg";
import { BsHeart } from "react-icons/bs";
import { TbGitCompare } from "react-icons/tb";

const SingleProductPage = () => {
  const [oprderProduct, setOprderProduct] = useState(true);
  const [reviweForm, setreviweForm] = useState(false);
  return (
    <>
      <SEO title="Product Name" />
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="bg-white">
            <div className="row">
              <div className="col-6">
                <div className="">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: watch,
                      },
                      largeImage: {
                        src: watch,
                        width: 2200,
                        height: 2200,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="main-product-details d-flex flex-column gap-10">
                  <h5>
                    Kids Headphones Bulk 10 Pack Mlti Colotrd For Students
                  </h5>

                  <div className="d-flex gap-2 flex-column">
                    <h5>$100.00</h5>
                    <div className=" d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        onChange={() => {}}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">(2 reviews)</p>
                    </div>
                    <p>Write a reviews</p>
                  </div>

                  <div className="d-flex gap-3 flex-column">
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Type : </h5>
                      <p className="mb-0">Headsets</p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Brand : </h5>
                      <p className="mb-0">Haveils</p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Categories : </h5>
                      <p className="mb-0">HandFree</p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Tags : </h5>
                      <p className="mb-0"> Apple</p>
                      <p className="mb-0">Oppo </p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>SKU : </h5>
                      <p className="mb-0">SKU027</p>
                    </div>
                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Availability : </h5>
                      <p className="mb-0">542 in Stock</p>
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
                      <h5>Color : </h5>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="color "></span>
                        <span className="color "></span>
                        <span className="color "></span>
                      </div>
                    </div>

                    <div className=" d-flex gap-10 align-items-center">
                      <h5>Quantity : </h5>
                      <div className="d-flex gap-15">
                        <input
                          type="number"
                          value={1}
                          name="Quantity"
                          id="Quantity"
                          style={{ width: "50px", textAlign: "center" }}
                        />
                        <button className="button">ADD TO CARD</button>
                        <button className="button2">Buy It Now</button>
                      </div>
                    </div>

                    <div className=" d-flex gap-30 ">
                      <div className="icon d-flex gap-10 align-items-center">
                        <BsHeart />
                        <p className="mb-0">Add to wishlist</p>
                      </div>
                      <div className="icon d-flex gap-10 align-items-center">
                        <TbGitCompare />
                        <p className="mb-0">Add to compare</p>
                      </div>
                    </div>
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae rerum fuga ducimus doloremque inventore molestias
                  sequi sint, eaque facere tenetur saepe atque voluptatibus
                  magni fugit sunt? Eius maiores similique sapiente?
                </p>
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
                        onChange={() => {}}
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
                        onChange={() => {}}
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
                      onChange={() => {}}
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
                      onChange={() => {}}
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
