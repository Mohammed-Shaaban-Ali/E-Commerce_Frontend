/* eslint-disable array-callback-return */
import React from "react";
import SpecialProduct from "./SpecialProduct";

const SpecialWrapper = ({ products }) => {
  return (
    <section className="featured-wrapper home-wrapper-2 py-4">
      <div className="container-xxl ">
        <h6>Special Products</h6>
        <div className="row banarres">
          {products?.map(function(item, index) {
            if (item?.tags === "special") {
              return <SpecialProduct key={index} product={item} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialWrapper;
