import "./Singup.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import CustomInput from "../../components/CustomInput";
import { register } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

let userSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().email().required("Email is required"),
  password: string().required("Password is required"),
  mobile: string().required("Mobile is required"),
});
const Singup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerData, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  useEffect(() => {
    if (registerData && isSuccess) {
      formik.resetForm();
      navigate("/login");
      toast.success("Created account Success");
    }
  }, [registerData, isSuccess]);

  return (
    <>
      <SEO title="Sign Up" />
      <BreadCrumb title="Sing Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3>Create Account</h3>
              <form onSubmit={formik.handleSubmit}>
                <CustomInput
                  type="text"
                  id="firstName"
                  label="First Name "
                  name="firstName"
                  onChange={formik.handleChange("firstName")}
                  value={formik.values.firstName}
                />
                <div className="error">
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <CustomInput
                  type="text"
                  id="lastName"
                  label="Last Name "
                  name="lastName"
                  onChange={formik.handleChange("lastName")}
                  value={formik.values.lastName}
                />
                <div className="error">
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
                </div>
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
                <CustomInput
                  type="text"
                  id="mobile"
                  label="Enter Your Mobile"
                  name="mobile"
                  onChange={formik.handleChange("mobile")}
                  value={formik.values.mobile}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div>{formik.errors.mobile}</div>
                  ) : null}
                </div>
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
                <div className=" mt-3 lohin-btn d-flex gap-15 mb-1 flex-column align-items-center">
                  <button type="submit" className="button">
                    Create
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

export default Singup;
