import "../components/Home/Home.css";
import Banner from "../components/Home/Banner";
import Servies from "../components/Home/Servies";
import Categories from "../components/Home/Categories";
import Cards from "../components/Home/Cards";
import Marque from "../components/Home/Marque";
import Blog from "../components/Home/Blog";
import Features from "../components/Home/Features";

const Home = () => {
  return (
    <>
      <Banner />
      <Servies />
      <Categories />
      <Features />
      <Cards />
      <Marque />
      <Blog />
    </>
  );
};

export default Home;
