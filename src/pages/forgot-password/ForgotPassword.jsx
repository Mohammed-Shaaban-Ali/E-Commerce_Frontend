import React from "react";

import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/slices/authSlice";

let userSchema = object({
  email: string().email().required("Email is required"),
});
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
      console.log("object");
      // setTimeout(() => {
      //   formik.resetForm();
      // }, 300);
    },
  });
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
              <form onSubmit={formik.handleSubmit}>
                <CustomInput
                  type="email"
                  id="email"
                  label="Enter Your Email"
                  name="email"
                  onChange={formik.handleChange("email")}
                  value={formik.values.email}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="lohin-btn mb-1 flex-column d-flex gap-15 align-items-center">
                  <button type="submit" className="button">
                    Submit
                  </button>
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
