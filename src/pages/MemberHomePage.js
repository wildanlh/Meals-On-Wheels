import { useContext, useEffect, useRef, useState } from "react";
import { Button, Carousel, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { getMenu } from "../api/api";
import { getMemberOrderAPI } from "../api/member-api";
import { carousel1, carousel2, carousel3 } from "../assets";
import Layout from "../components/layout/Layout";
import AuthContext, { retriveStoredToken } from "../context/auth-context";

import "./css/MemberHomePage.css";

const MemberHomePage = () => {
  const [index, setIndex] = useState(0);
  const { token } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [msg, setMsg] = useSearchParams();

  useEffect(() => {
    getMenu(token)
      .then((resp) => {
        setMenu(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getMemberOrderAPI(token)
      .then((resp) => setOrder(resp.data))
      .catch((err) => console.log(err.response.data));
  }, [token]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Layout>
      <Container>
        {msg.get("msg") && <h1>{msg.get("msg")}</h1>}
        <Carousel activeIndex={index} onSelect={handleSelect} className="my-5">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-member rounded"
              src={carousel1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>What is Healthy Diet</h3>
              <p>A healthy diet is an essential aspect of a well-balanced lifestyle. 
                It should include a variety of fruits, vegetables, whole grains, lean protein sources, and healthy fats.
                A healthy diet is not about strict limitations, 
                but rather about feeling good, having more energy, and keeping your body healthy.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-member rounded"
              src={carousel2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Benefit of Healthy Diet</h3>
              <p>Eating a healthy diet has numerous benefits for both physical and mental health.
              Eating a diet rich in nutrients also supports strong bones, healthy skin, and good eye health. 
              Additionally, a healthy diet can improve mental clarity, increase energy levels, and boost mood. 
              Moreover, it can aid in digestion, reduce inflammation, and support a strong immune system.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-member rounded"
              src={carousel3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Our Meal Package</h3>
              <p>
                Our meal package include a balanced selection of nutritious options, including whole grains, lean proteins, and plenty of fresh fruits and vegetables. 
                The menu also offer healthy fats and limit processed foods, added sugars, and unhealthy fats.
                We follow a strict regulation to make well-balanced, portion-controlled, and meet specific dietary requirements, such as low-sodium or gluten-free options. 
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="meals-package mb-5">
          <div className="col-lg-6 mb-3">
            <h3 className="fw-bold">
              Our Menus are in Packages to Help You Manage A Balanced Diet.
            </h3>
            <h5>Choose the package that is to your liking.</h5>
          </div>
          <Row className="card-meals">
            {menu.map((data) => (
              <Col size={12} md={4} key={data.id} className="my-3">
                <div className="card text-center">
                  <h5 className="p-3 button mb-0">{data.packageName}</h5>
                  <Table striped bordered className="mb-0">
                    <tbody>
                      <tr>
                        <td className="text-white">{data.mainCourse}</td>
                      </tr>
                      <tr>
                        <td className="text-white">{data.salad}</td>
                      </tr>
                      <tr>
                        <td className="text-white">{data.soup}</td>
                      </tr>
                      <tr>
                        <td className="text-white">{data.dessert}</td>
                      </tr>
                      <tr>
                        <td className="text-white">{data.drink}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div>
                    <Link to={`/meals-package-detail/${data.id}`}>
                      <Button className="fw-bold button my-3">Order Meal</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default MemberHomePage;
