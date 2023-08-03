import "./Login.css";

import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <SEO title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3>Log in</h3>
              <form>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div className="">
                  <Link>Forgot your password?</Link>
                </div>

                <div className="lohin-btn d-flex gap-30 align-items-center">
                  <button className="button">Login</button>
                  <Link to="/logout" className="button2">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
