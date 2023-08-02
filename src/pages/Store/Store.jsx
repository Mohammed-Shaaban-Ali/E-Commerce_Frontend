import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import MainStore from "../../components/Store/MainStore";
import SideBar from "../../components/Store/SideBar";
import "./Store.css";

const Store = () => {
  return (
    <>
      <SEO title=" Our Store " />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <SideBar />
            <MainStore />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
