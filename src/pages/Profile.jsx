import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { object, string } from "yup";
import SEO from "../components/SEO";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { updateMyProfile } from "../redux/slices/authSlice";

let userSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().email().required("Email is required"),
  mobile: string().required("Mobile is required"),
});

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      mobile: user?.mobile,
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(updateMyProfile(values));
    },
  });
  return (
    <>
      <SEO title="Profile" />
      <BreadCrumb title="Profile" />
      <div className="container-xxl home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <form
              style={{ width: "50%", margin: "auto", padding: "32px" }}
              onSubmit={formik.handleSubmit}
            >
              <CustomInput
                type="text"
                id="firstName"
                label="First Name"
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

              <div className=" mt-3 lohin-btn d-flex gap-15 mb-1 flex-column align-items-center">
                <button type="submit" className="button">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
