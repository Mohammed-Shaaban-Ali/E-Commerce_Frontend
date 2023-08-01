import "../components/Home/Home.css";
import Banner from "../components/Home/Banner";
import Servies from "../components/Home/Servies";
import Categories from "../components/Home/Categories";
import Cards from "../components/Home/Cards";
import Marque from "../components/Home/Marque";
import Blog from "../components/Home/Blog";
import Features from "../components/Home/Features";
import SpecialWrapper from "../components/Home/SpecialWrapper";

const Home = () => {
  return (
    <>
      <Banner />
      <Servies />
      <Categories />
      <Features />
      <Cards />
      <SpecialWrapper />
      <Marque />
      <Blog />
    </>
  );
};

export default Home;
