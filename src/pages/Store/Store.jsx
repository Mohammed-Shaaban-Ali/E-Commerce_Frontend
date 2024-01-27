import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import SEO from "../../components/SEO";
import MainStore from "../../components/Store/MainStore";
import SideBar from "../../components/Store/SideBar";
import "./Store.css";
import { getProducts } from "../../redux/slices/productSlice";
import Reloader from "../../components/Reloader";

const Store = () => {
  const dispatch = useDispatch();
  const [brands, setBrands] = useState(null);
  const [categories, setcategories] = useState(null);
  const [tags, settags] = useState(null);

  const [brand, setBrand] = useState(null);
  const [category, setcategory] = useState(null);
  const [tag, settag] = useState(null);
  const [minPrice, setminPrice] = useState(null);
  const [maxPrice, setmaxPrice] = useState(null);
  const [sort, setsort] = useState(null);
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    getproducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, category, tag, minPrice, maxPrice, sort]);

  useEffect(() => {
    let newBrands = [];
    let newCategories = [];
    let newTags = [];
    for (let i = 0; i < products?.length; i++) {
      const element = products[i];
      newBrands.push(element?.brand);
      newCategories.push(element?.category);
      newTags.push(element?.tags);
    }
    setBrands(newBrands);
    setcategories(newCategories);
    settags(newTags);
  }, [products]);

  const getproducts = () => {
    dispatch(getProducts({ brand, category, tag, minPrice, maxPrice, sort }));
  };
  return (
    <>
      <SEO title=" Our Store " />
      <BreadCrumb title="Our Store" />
      {isLoading ? (
        <Reloader />
      ) : (
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row banarres">
              <SideBar
                brands={brands}
                categories={categories}
                tags={tags}
                products={products}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setmaxPrice={setmaxPrice}
                setminPrice={setminPrice}
                sort={sort}
                setsort={setsort}
                setBrand={setBrand}
                settag={settag}
                setcategory={setcategory}
              />
              <MainStore
                sort={sort}
                setsort={setsort}
                products={products ? products : []}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Store;
