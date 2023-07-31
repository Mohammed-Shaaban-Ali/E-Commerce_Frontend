import "../components/Home/Home.css";
import Banner from "../components/Home/Banner";
import Servies from "../components/Home/Servies";
import Categories from "../components/Home/Categories";
import Cards from "../components/Home/Cards";
import Marque from "../components/Home/Marque";
import Blog from "../components/Home/Blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Servies />
      <Categories />
      <Cards />
      <Marque />
      <Blog />
    </>
  );
};

export default Home;
