import "../components/Home/Home.css";
import Banner from "../components/Home/Banner";
import Servies from "../components/Home/Servies";
import Categories from "../components/Home/Categories";
import Carts from "../components/Home/Carts";

const Home = () => {
  return (
    <>
      <Banner />
      <Servies />
      <Categories />
      <Carts />
    </>
  );
};

export default Home;
