import React from "react";

import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <SEO title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="mb-0">Reset Your Password</h3>
              <p className="m-0 text-center text-black-50">
                We will send your an email to reset your password
              </p>
              <form>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>

                <div className="lohin-btn mb-1 flex-column d-flex gap-15 align-items-center">
                  <button className="button">Submit</button>
                  <Link to="/login">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
