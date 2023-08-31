import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { login, resetState } from "../../redux/slices/authSlice";
import CustomInput from "../../components/CustomInput";

let userSchema = object({
  email: string().email().required("Email is required"),
  password: string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(login(values));
      setTimeout(() => {
        navigate("/");
      }, 100);
      formik.resetForm();
    },
  });
  return (
    <>
      <SEO title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3>Log in</h3>
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
                <div className="mt-3">
                  <Link to="/forgot-password">Forgot your password?</Link>
                </div>

                <div className="mt-3 lohin-btn d-flex gap-30 align-items-center">
                  <button type="submit" className="button">
                    Login
                  </button>
                  <Link to="/singup" className="button2">
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
