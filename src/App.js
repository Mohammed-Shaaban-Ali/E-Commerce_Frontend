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
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ResetPassword from "./pages/Reset Password/ResetPassword";

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
            <Route path="login" element={<Login />} />
            <Route path="singup" element={<Singup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
