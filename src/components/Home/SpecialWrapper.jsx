import React from "react";
import SpecialProduct from "./SpecialProduct";

const SpecialWrapper = ({ products }) => {
  {
    products && (
      <section className="featured-wrapper home-wrapper-2 py-5">
        <div className="container-xxl ">
          <h6>Special Products</h6>
          <div className="row">
            {products?.map((item, index) => {
              if (item?.tags == "special") {
                return <SpecialProduct key={index} product={item} />;
              }
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default SpecialWrapper;
