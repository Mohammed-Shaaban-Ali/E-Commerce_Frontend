import React from "react";

import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";

const ResetPassword = () => {
  return (
    <>
      <SEO title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="mb-0">Reset Password</h3>

              <form>
                <div className="">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    name="Confirmpassword"
                    placeholder="Confirm password"
                    className="form-control"
                  />
                </div>

                <div className="lohin-btn mb-1 flex-column d-flex gap-15 align-items-center">
                  <button className="button">Ok</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
