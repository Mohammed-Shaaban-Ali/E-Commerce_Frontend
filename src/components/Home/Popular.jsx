import React from "react";
import CardProducts from "./CardProducts";

const Popular = ({ products }) => {
  return (
    <section className="products py-4 home-wrapper-2">
      <div className="container-xxl ">
        <h6>Popular Collection</h6>
        <div className="row">
          {products?.map((product, index) => {
            if (product?.tags == "popular") {
              return <CardProducts key={index} product={product} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
