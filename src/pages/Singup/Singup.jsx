import "./Singup.css";

import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";

const Singup = () => {
  return (
    <>
      <SEO title="Sign Up" />
      <BreadCrumb title="Sing Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3>Sing Up</h3>
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

                <div className="lohin-btn d-flex gap-30 align-items-center">
                  <button className="button2">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
