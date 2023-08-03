import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import blog1 from "../../images/blog-1.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Form } from "react-bootstrap";
const BlogsPageDetails = () => {
  return (
    <>
      <SEO title="Blogs Name" />
      <BreadCrumb title="Blogs Name" />
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
                      <h6>A Beautiful Sound Moring Renaissance</h6>
                      <div className="singe-blog-image">
                        <img src={blog1} alt="blog1" className="img-fluid" />
                      </div>
                      <div className="singe-blog-contant">
                        <p className="text-end m-2">11 JUNE, 2022</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptates nulla cupiditate perferendis, iste
                          incidunt aspernatur, eaque ipsam possimus laborum
                          blanditiis explicabo vero assumenda fugiat praesentium
                          commodi mollitia excepturi exercitationem amet?
                        </p>
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
