import "./Contact.css";
import SEO from "../../components/SEO";
import BreadCrumb from "../../components/BreadCrumb";
import { Form } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaInfo } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <SEO title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex flex-column gap-30">
              <div className="mab">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37365.21637170276!2d2.3081375568734135!3d48.84864398464548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z2KjYp9ix2YrYs9iMINmB2LHZhtiz2Kc!5e0!3m2!1sar!2seg!4v1690993449047!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  title="paris"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="contact-wrapper d-flex  justify-content-between">
                <div className="">
                  <h3>Contact</h3>
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                    <Form.Control
                      as="textarea"
                      placeholder="Comment"
                      style={{ height: "100px" }}
                    />
                    <button
                      className="button"
                      style={{ marginTop: "20px" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                </div>

                <div className="">
                  <h3>Get in touch with us</h3>
                  <div className="d-flex flex-column gap-4">
                    <div className="icon d-flex align-items-center flex-row gap-10">
                      <AiFillHome />
                      <p>1259 Freedom, New York, 1111 United States</p>
                    </div>

                    <div className=" icon d-flex align-items-center flex-row gap-10">
                      <BsFillTelephoneFill />
                      <p>(+91)6000-888-1338 </p>
                    </div>

                    <div className="icon d-flex align-items-center flex-row gap-10">
                      <MdEmail />
                      <p>ms7500746@gmail.come</p>
                    </div>

                    <div className="icon d-flex align-items-center flex-row gap-10">
                      <FaInfo />
                      <p>Monday - Friday 10 Am - 8 Pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
