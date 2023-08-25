import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import blog1 from "../../images/blog-1.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux/slices/blogSlice";
import moment from "moment";

const BlogsPageDetails = () => {
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { singleBlog } = useSelector((state) => state.blog);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBlog(blogId));
  }, []);
  return (
    <>
      <SEO title={singleBlog?.title} />
      <BreadCrumb title={singleBlog?.title} />
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
                <div className="col-12">
                  <div className="d-flex flex-column gap-30">
                    <div className="singe-blog-card">
                      <h6>{singleBlog?.title}</h6>
                      <div className="singe-blog-image">
                        <img
                          src={singleBlog?.images[0]?.url}
                          alt="blog1"
                          className="img-fluid"
                        />
                      </div>
                      <div className="singe-blog-contant">
                        <p className="text-end m-2">
                          {moment(singleBlog?.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: singleBlog?.description,
                          }}
                        ></p>
                      </div>
                    </div>
                    <div className="social d-flex flex-row align-items-center justify-content-between">
                      <Link to="/blogs" className="back">
                        <AiOutlineArrowLeft />
                        <Link to="/blogs">Back to blog</Link>
                      </Link>
                      <div className="social-icon">
                        <AiFillFacebook />
                        <AiFillTwitterSquare />
                        <AiFillInstagram />
                      </div>
                    </div>
                    <div className="comment">
                      <h3>Leave A Contact</h3>
                      <Form>
                        <div className=" d-flex align-items-center justify-content-between">
                          <Form.Group
                            className="mb-4"
                            controlId="formBasicEmail"
                          >
                            <Form.Control type="text" placeholder="Name" />
                          </Form.Group>
                          <Form.Group
                            className="mb-4"
                            controlId="formBasicEmail"
                          >
                            <Form.Control type="email" placeholder="Email" />
                          </Form.Group>
                        </div>

                        <Form.Control
                          as="textarea"
                          placeholder="Comment"
                          style={{ height: "100px" }}
                        />
                        <button
                          className="button"
                          style={{ marginTop: "20px" }}
                          type="submit"
                        >
                          Post Comment
                        </button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPageDetails;
