import "./Home.css";
import Banner from "../../components/Home/Banner";
import Servies from "../../components/Home/Servies";
import Categories from "../../components/Home/Categories";
import Cards from "../../components/Home/Cards";
import Marque from "../../components/Home/Marque";
import Blog from "../../components/Home/Blog";
import Features from "../../components/Home/Features";
import SpecialWrapper from "../../components/Home/SpecialWrapper";
import SEO from "../../components/SEO";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/slices/blogSlice";
import { getProducts } from "../../redux/slices/productSlice";
import { getCart } from "../../redux/slices/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) dispatch(getCart());
    dispatch(getAllBlogs());
    dispatch(getProducts());
  }, []);
  return (
    <>
      <SEO title=" Home " />
      <Banner />
      <Servies />
      <Categories />
      <Features products={products ? products : []} />
      <Cards />
      <SpecialWrapper products={products ? products : []} />
      <Marque />
      <Blog blogs={blogs} />
    </>
  );
};

export default Home;
