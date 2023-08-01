import React from "react";
import SpecialProduct from "./SpecialProduct";

const SpecialWrapper = () => {
  return (
    <section className="featured-wrapper home-wrapper-2 py-5">
      <div className="container-xxl ">
        <h6>Special Products</h6>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>
    </section>
  );
};

export default SpecialWrapper;
