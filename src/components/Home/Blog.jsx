import React from "react";
import BlogCart from "./BlogCart";

const Blog = () => {
  return (
    <section className="blog py-5 home-wrapper-2">
      <div className="container-xxl ">
        <h6>Our Lastest News</h6>
        <div className="row">
          <BlogCart />
          <BlogCart />
          <BlogCart />
          <BlogCart />
        </div>
      </div>
    </section>
  );
};

export default Blog;
