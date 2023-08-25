import "./Blogs.css";
import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import BlogCart from "../../components/Home/BlogCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/slices/blogSlice";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <>
      <SEO title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="bloh-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h5>Shop By Categories</h5>
                <div className="d-flex flex-column gap-15 ">
                  <Link to="/">Home</Link>
                  <Link to="/store">Our Store</Link>
                  <Link to="/Blogs">Blogs</Link>
                  <Link to="/Contact">Contact</Link>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {blogs.lenght === 0 && (
                  <h2 className="text-center text-danger">No Data</h2>
                )}
                {blogs?.map((item, index) => (
                  <BlogCart item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
