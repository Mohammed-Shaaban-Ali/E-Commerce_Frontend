import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Store from "./pages/Store/Store";
import Blogs from "./pages/Blogs/Blogs";
import CopmareProduct from "./pages/CopmareProduct/CopmareProduct";
import WishList from "./pages/WishList/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="store" element={<Store />} />
            <Route path="contact" element={<Contact />} />
            <Route path="compare-products" element={<CopmareProduct />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
