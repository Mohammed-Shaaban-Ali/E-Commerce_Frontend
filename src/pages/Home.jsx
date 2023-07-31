import "../components/Home/Home.css";
import Banner from "../components/Home/Banner";
import Servies from "../components/Home/Servies";
import Categories from "../components/Home/Categories";
import Carts from "../components/Home/Carts";
import Marque from "../components/Home/Marque";

const Home = () => {
  return (
    <>
      <Banner />
      <Servies />
      <Categories />
      <Carts />
      <Marque />
    </>
  );
};

export default Home;
