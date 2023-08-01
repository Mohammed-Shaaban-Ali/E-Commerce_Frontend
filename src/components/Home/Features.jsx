import React from "react";
import CardProducts from "./CardProducts";

const Features = () => {
  return (
    <section className="products py-5 home-wrapper-2">
      <div className="container-xxl ">
        <h6>Featured Collection</h6>
        <div className="row">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </div>
      </div>
    </section>
  );
};

export default Features;
