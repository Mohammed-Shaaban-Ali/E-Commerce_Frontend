import { Link, useLocation } from "react-router-dom";
import blog1 from "../../images/blog-1.jpg";
import moment from "moment";

const BlogCart = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <div className={pathname === "/blogs" ? "col-6 mb-4" : "col-3"}>
      <div className="blog-card">
        <div className="blog-image">
          <img src={item?.images[0]?.url} alt="blog1" />
        </div>
        <div className="blog-contant">
          <p>{moment(item?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
          <h6>{item?.title.substr(0, 50) + " ..."}</h6>
          <p
            dangerouslySetInnerHTML={{
              __html: item?.description.substr(0, 100) + " ...",
            }}
          ></p>
          <Link to={`/blog/${item?._id}`} className="button">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
