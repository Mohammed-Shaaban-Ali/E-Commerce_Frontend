import { Link } from "react-router-dom";
import blog1 from "../../images/blog-1.jpg";

const BlogCart = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="blog-image">
          <img src={blog1} alt="blog1" />
        </div>
        <div className="blog-contant">
          <p>11 JUNE, 2022</p>
          <h6>A Beautiful Sound Moring Renaissance</h6>
          <p>
            You`re Only Good As Your Last Collection. Which is An Enormous
            Pressure. I Think is SomeThing ...
          </p>
          <Link className="button">READ MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
