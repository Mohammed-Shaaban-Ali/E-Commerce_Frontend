import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import MainStore from "../../components/Store/MainStore";
import SideBar from "../../components/Store/SideBar";
import "./Store.css";
import { getProducts } from "../../redux/slices/productSlice";

const Store = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <SEO title=" Our Store " />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <SideBar />
            <MainStore products={products ? products : []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
