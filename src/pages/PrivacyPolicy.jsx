import SEO from "../components/SEO";
import BreadCrumb from "../components/BreadCrumb";
const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />
      <div className="privacy-policy home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
