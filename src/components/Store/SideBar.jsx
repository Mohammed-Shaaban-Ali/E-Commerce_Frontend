import ReactStars from "react-rating-stars-component";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import camera from "../../images/camera.jpg";
import speaker from "../../images/speaker.jpg";
import { useEffect, useState } from "react";

const SideBar = ({
  maxPrice,
  setmaxPrice,
  categories,
  brands,
  tags,
  minPrice,
  setminPrice,
  products,
  settag,
  setcategory,
  setBrand,
}) => {
  return (
    <div className="col-3">
      <div className="filter-card mb-3">
        <h5>Shop By Categories</h5>
        <div className="d-flex flex-column gap-15 ">
          {categories &&
            [...new Set(categories)].map((item, i) => (
              <li
                className="category"
                onClick={() => setcategory(item)}
                key={i}
              >
                {item}
              </li>
            ))}
        </div>
      </div>

      <div className="filter-card border-card mb-3">
        <h5>Filter By</h5>

        <div className="d-flex flex-column gap-15 ">
          <div className="availabilty">
            <h6>Availabilty</h6>
            <Form>
              <div className="">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label={`In stock (${products?.length})`}
                />

                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Out stock (0)"
                />
              </div>
            </Form>
          </div>
        </div>

        <div className="d-flex flex-column gap-15 ">
          <div className="Price">
            <h6>Price</h6>
            <div className="form d-flex gap-10 align-items-center ">
              <Form className="d-flex gap-15 align-items-center justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="number"
                    placeholder="Form"
                    value={minPrice}
                    onChange={(e) => setminPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setmaxPrice(e.target.value)}
                    placeholder="To"
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column gap-15 ">
          <div className="size">
            <h6>Size</h6>
            <Form>
              <div className="">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Sm(1)"
                />

                <Form.Check
                  disabled
                  type="checkbox"
                  id="default-checkbox"
                  label="M(0)"
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="d-flex flex-column gap-15 ">
          <div className=" mb-3">
            <h6 className="mb-3">Product Brand</h6>
            <div className="d-flex flex-wrap gap-15 ">
              {brands &&
                [...new Set(brands)].map((item, i) => (
                  <span
                    onClick={() => setBrand(item)}
                    className="product-tag-span"
                    key={i}
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-15 ">
          <div className=" mb-3">
            <h6 className="mb-3">Product Tags</h6>
            <div className="d-flex flex-wrap gap-15 ">
              {tags &&
                [...new Set(tags)].map((item, i) => (
                  <span
                    onClick={() => settag(item)}
                    className="product-tag-span"
                    key={i}
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="filter-card mb-3">
        <h5>Random Product</h5>
        <div className="d-flex flex-wrap flex-column ">
          <div className="product d-flex  align-items-center row">
            <img src={camera} className=" col-5" alt="camera" />
            <div className="d-flex flex-column  col-7">
              <h6>Kids headphones bulk 10 pack multi colored for...</h6>
              <ReactStars
                count={5}
                onChange={() => {}}
                value={3}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p>$100.00</p>
            </div>
          </div>

          <div className="product d-flex  align-items-center row">
            <img src={speaker} className=" col-5" alt="speaker" />
            <div className="d-flex flex-column  col-7">
              <h6>Kids headphones bulk 10 pack multi colored for...</h6>
              <ReactStars
                count={5}
                onChange={() => {}}
                value={3}
                edit={true}
                size={24}
                activeColor="#ffd700"
              />
              <p>$100.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
