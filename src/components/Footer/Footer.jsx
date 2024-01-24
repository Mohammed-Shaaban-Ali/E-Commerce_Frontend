import "./Footer.css";
import newsletter from "../../images/newsletter.png";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl ">
          <div className="row banarres align-items-center justify-content-around">
            <div className="col-5 w100">
              <div className="footer-top-data d-flex gap-10 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 fs-4 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>

            <div className="col-6 w100">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text Subscribe" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <div className="container-xxl mb-5">
          <div className="row banarres">
            <div className="col-4 w100">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-link">
                <div className="text-white-50 fs-6">
                  <span className="mb-2"> Demo Store </span>
                  <br />
                  No. 1259 Freedom, New York, 1111
                  <br />
                  United States
                  <br />
                </div>
                <a
                  className="text-white-50 mt-4 d-block mb-2"
                  href="tel:+91 8264954234"
                >
                  (888) 4344 6000-(888) 1338 8193
                </a>
                <div className="text-white-50 py-2 mb-1">
                  ms7500756@gmail.com
                </div>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <div className="text-white-50">
                    <BsLinkedin className=" fs-4" />
                  </div>
                  <div className="text-white-50">
                    <BsInstagram className=" fs-4" />
                  </div>
                  <div className="text-white-50">
                    <BsGithub className=" fs-4" />
                  </div>
                  <div className="text-white-50">
                    <BsYoutube className=" fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 w100">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white-50 py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white-50 py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white-50 py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link
                  to="/termandcontions-policy"
                  className="text-white-50 py-2 mb-1"
                >
                  Terms Of Servlice
                </Link>
                <Link to="/blogs" className="text-white-50 py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>

            <div className="col-3 w100">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white-50 py-2 mb-1">About US</Link>
                <Link className="text-white-50 py-2 mb-1">Faq</Link>
                <Link className="text-white-50 py-2 mb-1">Contact</Link>
              </div>
            </div>

            <div className="col-2 w100">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white-50 py-2 mb-1">Laptops</Link>
                <Link className="text-white-50 py-2 mb-1">HeadPhones</Link>
                <Link className="text-white-50 py-2 mb-1">Tablets</Link>
                <Link className="text-white-50 py-2 mb-1">Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered By Develper Mohamed
                Shaaban
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
