import { Col, Row } from "react-bootstrap";
import { aboutbanner, herobg1, staff1, staff2, staff3, staff4 } from "../assets";
import Layout from "../components/layout/Layout";

import { motion } from "framer-motion";

import "./css/AboutPage.css";

const AboutPage = () => {
  return (
    <Layout>
      <div className="hero animate__animated animate__fadeIn">
        <img src={herobg1} alt="hero" />
        <h1>About Us</h1>
      </div>
      <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
          <div className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig" bis_skin_checked="1">
            <motion.img src={aboutbanner} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} />
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInLeftBig" bis_skin_checked="1">
            <p>
              Meals on Wheels is a community-based organization dedicated to improving the health and well-being of seniors, individuals with disabilities, and others in need by providing nutritious meals, companionship, and a network of
              support. Our mission is to promote independence and dignity by delivering meals to those who are unable to leave their homes, and to alleviate the effects of hunger, malnutrition, and social isolation.
              <br /> <br />
              We strive to make a positive impact on our community every day by providing essential services and creating a brighter future for all those we serve. With a dedicated team of volunteers and staff, Meals on Wheels is committed
              to providing the highest quality of care and support to those in need.
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center pb-5 animate__animated animate__fadeInLeftBig">
        <h1 className="fw-bold">
          Our <span className="yellow">Mission</span>
        </h1>
        <p>
          Our company mission is to deliver meals for the elderly focuses on addressing food insecurity and nutritional needs among the senior population. Their aim is to provide hot, healthy, and nutritious meals to seniors who are unable
          to prepare their own meals due to physical limitations or financial constraints. The company operates with the belief that everyone deserves access to proper nutrition, regardless of age or circumstance. Their goal is to improve
          the quality of life for elderly individuals by supporting their basic needs and promoting independence and dignity. By delivering meals directly to their doors, the company also helps to combat social isolation and provide a vital
          connection to the wider community.
        </p>
      </div>
      <div className="container text-center pb-5 animate__animated animate__fadeInRightBig">
        <h1 className="fw-bold">
          Our <span className="yellow">Vision</span>
        </h1>
        <p>
          Our company vision is to deliver meals for the elderly envisions a world where every elderly person has access to proper nutrition and can age with dignity. The company sees a future where seniors are not limited by physical or
          financial barriers and can enjoy healthy, hot meals every day. The company's vision is to create a community where the elderly are valued and respected, and where their basic needs are met with compassion and care. The company
          aspires to be a leader in addressing food insecurity and improving the quality of life for seniors, and to inspire others to take similar action. By working towards this vision, the company hopes to make a lasting impact and
          ensure that all elderly individuals can live fulfilling and nourished lives.
        </p>
      </div>
      <div className="staff mb-5">
        <div className="container text-center py-5 animate__animated animate__fadeInUpBig">
          <h1 className="fw-bold">
            Our <span className="yellow">Founders</span>
          </h1>
          <div className="hr-yellow-center mb-5"></div>
          <Row>
            <Col className="my-3">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <img src={staff1} alt="person" className="staff rounded-circle" />
                <h3 className="fw-bold py-1">Clairine Musk</h3>
                <h5 className="fw-bold">CEO Founder</h5>
              </motion.div>
            </Col>
            <Col className="my-3">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <img src={staff2} alt="person" className="staff rounded-circle" />
                <h3 className="fw-bold py-1">Isaac Clarke</h3>
                <h5 className="fw-bold">CO Founder</h5>
              </motion.div>
            </Col>
            <Col className="my-3">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <img src={staff3} alt="person" className="staff rounded-circle" />
                <h3 className="fw-bold py-1">Irfan Riz</h3>
                <h5 className="fw-bold">Director</h5>
              </motion.div>
            </Col>
            <Col className="my-3">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <img src={staff4} alt="person" className="staff rounded-circle" />
                <h3 className="fw-bold py-1">Ryutaro Uozumi</h3>
                <h5 className="fw-bold">Manager</h5>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
