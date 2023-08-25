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

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllBlogs());
  }, []);
  return (
    <>
      <SEO title=" Home " />
      <Banner />
      <Servies />
      <Categories />
      <Features />
      <Cards />
      <SpecialWrapper />
      <Marque />
      <Blog blogs={blogs} />
    </>
  );
};

export default Home;
