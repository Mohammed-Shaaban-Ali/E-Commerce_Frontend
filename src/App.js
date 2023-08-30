import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Store from "./pages/Store/Store";
import Blogs from "./pages/Blogs/Blogs";
import CopmareProduct from "./pages/CopmareProduct/CopmareProduct";
import WishList from "./pages/WishList/WishList";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ResetPassword from "./pages/Reset Password/ResetPassword";
import BlogsPageDetails from "./pages/Blogs/BlogsPageDetails";
import TermAndContions from "./pages/TermAndContions";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SingleProductPage from "./pages/Store/SingleProductPage";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/Cart/CheckOut";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="checkout"
              element={
                <PrivateRoute>
                  <CheckOut />
                </PrivateRoute>
              }
            />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<BlogsPageDetails />} />
            <Route path="products" element={<Store />} />
            <Route path="product/:id" element={<SingleProductPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="compare-products" element={<CopmareProduct />} />
            <Route
              path="wishlist"
              element={
                <PrivateRoute>
                  <WishList />
                </PrivateRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="singup" element={<Singup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route
              path="termandcontions-policy"
              element={<TermAndContions />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
