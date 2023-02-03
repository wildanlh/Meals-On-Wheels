import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bannerportairt2 } from "../../assets";

import "./Form.css";

const FormPartnership = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-xxl-8 px-4 py-5">
        <div
          className="card row flex-lg-row-reverse  py-5"
          bis_skin_checked="1"
        >
          <h3 className="contact-title mx-3 text-white text-center">
            Partnership Request
          </h3>
          <hr className="text-white" />
          <div
            className="col-10 col-sm-8 col-lg-6 img-center"
            bis_skin_checked="1"
          >
            <img
              src={bannerportairt2}
              className="rounded img-partner mb-3 pe-3"
              alt="Bootstrap Themes"
            />
          </div>
          <div className="col-lg-6 text-center" bis_skin_checked="1">
            <Form className="px-3 text-white text-center">
              <Form.Group className="mb-3 mx-3" controlId="company-name">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="email">
                <Form.Label>Company Email</Form.Label>
                <Form.Control type="email" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="company-address">
                <Form.Label>Company Address</Form.Label>
                <Form.Control type="text" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" required />
              </Form.Group>
              {/* <Form.Group className="mb-3 mx-3" controlId="file">
                                <Form.Label>File Upload</Form.Label>
                                <Form.Control type="file" placeholder="" required />
                            </Form.Group> */}
              <div className="text-center mb-2 d-grid mx-3 pt-3">
                <Button type="submit" className="button fw-bold" size="lg">
                  Send Request
                </Button>
                <div className="or-separator">
                  <span className="or-text">OR</span>
                </div>
                <Link to="/register" className="link-width w-100">
                  <Button className="button fw-bold w-100" size="lg">
                    Register
                  </Button>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPartnership;
