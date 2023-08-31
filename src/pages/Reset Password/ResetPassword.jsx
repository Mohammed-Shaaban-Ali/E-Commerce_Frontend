import React from "react";

import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import CustomInput from "../../components/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../redux/slices/authSlice";

let userSchema = object({
  password: string().required("Password is required"),
  passwordagain: string().required("Password is required"),
});
const ResetPassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordagain: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      const Data = { token: getToken, password: values.password };
      dispatch(resetPassword(Data));
    },
  });
  return (
    <>
      <SEO title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="mb-0">Reset Password</h3>
              <form onSubmit={formik.handleSubmit}>
                <CustomInput
                  type="password"
                  id="password"
                  label="Enter Your password"
                  name="password"
                  onChange={formik.handleChange("password")}
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
                <CustomInput
                  type="password"
                  id="passwordagain"
                  label="Enter Your password Again"
                  name="passwordagain"
                  onChange={formik.handleChange("passwordagain")}
                  value={formik.values.passwordagain}
                />
                <div className="error">
                  {formik.touched.passwordagain &&
                  formik.errors.passwordagain ? (
                    <div>{formik.errors.passwordagain}</div>
                  ) : null}
                </div>

                <div className="lohin-btn mb-1 flex-column d-flex gap-15 align-items-center">
                  <button type="submit" className="button mt-3">
                    Ok
                  </button>
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
