import React from "react";
import BlogCart from "./BlogCart";

const Blog = ({ blogs }) => {
  return (
    <section className="blog py-4 home-wrapper-2">
      <div className="container-xxl ">
        <h6>Our Lastest News</h6>
        <div className="row banarres">
          {blogs?.map((item, index) => (
            <BlogCart item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
