import React from "react";
import CardProducts from "./CardProducts";

const Features = ({ products }) => {
  return (
    <section className="products py-4 home-wrapper-2">
      <div className="container-xxl ">
        <h6>Featured Collection</h6>
        <div className="row banarres">
          {products?.map((product, index) => {
            if (product?.tags === "featured") {
              return <CardProducts key={index} product={product} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
