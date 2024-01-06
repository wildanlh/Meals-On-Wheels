import { Button, Col, Row } from "react-bootstrap";
import { banner1, banner2, banner4, botwave, logo, topwave, un, unicef, who } from "../assets";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

import "./css/HomePage.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
          <div className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig position-relative">
            <motion.img src={banner1} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} />
            <div className="circle-yellow-lg" style={{ bottom: "-70px", right: "-50px" }}></div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInLeftBig" bis_skin_checked="1">
            <h1 className="display-5 fw-bold lh-1 mb-3 ">Meals and Transportation Services. Together We Can Deliver</h1>
            <div className="hr-purple"></div>
            <p>Our aspirations and guiding principles are determined by the community we serve, and we are driven by a strong commitment to our volunteers, donors, partners, and community.</p>
          </div>
        </div>
      </div>
      <div className="home-content">
        <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 animate__animated animate__fadeInDown" bis_skin_checked="1">
            <div className="col-lg-6" bis_skin_checked="1">
              <h1 className="display-5 fw-bold lh-1 mb-3">Who We Are</h1>
              <p>All of our clients at Meals on Wheels are working toward becoming independent. We deliver hot and frozen meals, as well as provide door-to-door transportation.</p>
              <div className="hr-yellow"></div>
              <h3 className="fw-bold lh-1 mb-3 purple-text">Our Vision </h3>
              <p>A place where everyone has a path to independence and wellness.</p>
              <h3 className="fw-bold lh-1 mb-3 purple-text">Our Mission </h3>
              <p>Fostering community wellness one person at a time.</p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
              <motion.img src={banner2} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} />
            </div>
          </div>
        </div>
      </div>
      <img src={topwave} alt="wave" className="topwave" />
      <div className="wave-content text-white">
        <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 animate__animated animate__fadeInLeftBig" bis_skin_checked="1">
            <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
              <motion.img src={banner4} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} />
            </div>
            <div className="col-lg-6" bis_skin_checked="1">
              <div className="hr-yellow"></div>
              <h1 className="display-5 fw-bold lh-1 mb-3">Meals on Wheels Commitment</h1>

              <ul>
                <li>We hold our volunteers in the highest regard; they are the foundation of our work.</li>
                <li>Through partnerships, diversity, and inclusion, we respect our community.</li>
                <li>We welcome innovation and organizational change.</li>
                <li>Our company practices fiscal, social, and environmental responsibility.</li>
                <li>We consistently offer services and programs of the highest caliber.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 animate__animated animate__fadeInRightBig" bis_skin_checked="1">
            <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
              <Row>
                <Col>
                  <div className="position-relative">
                    <motion.img
                      src={unicef}
                      alt=""
                      className="partner my-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                    <div className="circle-light-yellow-lg" style={{ left: "-20px", bottom: "-10px" }}></div>
                  </div>
                </Col>
                <Col>
                  <div className="position-relative">
                    <motion.img
                      src={who}
                      alt=""
                      className="partner my-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                    <div className="circle-light-yellow-lg" style={{ left: "-20px", top: "-10px" }}></div>
                  </div>
                </Col>
                <Col>
                  <div className="position-relative">
                    <motion.img
                      src={un}
                      alt=""
                      className="partner my-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                    <div className="circle-light-yellow-lg" style={{ left: "-20px", bottom: "-10px" }}></div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="col-lg-6" bis_skin_checked="1">
              <div className="hr-yellow"></div>
              <h1 className="display-5 fw-bold lh-1 mb-3">Our Partner</h1>

              <p>Providing assistance to seniors (55+) and adults with disabilities who require nutritional support. Long-term assistance or temporary assistance (caregiver relief, recovery, or seasonal). </p>
            </div>
          </div>
        </div>
      </div>
      <img src={botwave} alt="wave" className="botwave" />
      <div className="bottom-home">
        <div className="container">
          <div className="card pb-5 mb-5 text-white animate__animated animate__slideInUp">
            <motion.img src={logo} alt="logo" className="py-5" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} />
            <div className="text-center">
              <h1 className="text-white">Keep Up With Service News and Events</h1>
              <h3>Keep in touch with us!</h3>
              <Link to="/register">
                <Button variant="light" className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
