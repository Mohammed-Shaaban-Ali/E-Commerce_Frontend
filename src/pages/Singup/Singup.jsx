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
              <h3>Create Account</h3>
              <form>
                <div className="">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="lasttName"
                    placeholder="Lastt Name"
                    className="form-control"
                  />
                </div>
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

                <div className="lohin-btn d-flex gap-15 mb-1 flex-column align-items-center">
                  <button className="button">Create</button>
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
