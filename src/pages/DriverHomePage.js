import { useContext, useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Dropdown, DropdownButton, Row, Table } from "react-bootstrap";
import { getRiderOrderAPI, postRiderOrderCompleteAPI, postRiderOrderCreateAPI, setStatusAPI } from "../api/rider-api";
import { car, carousel1, carousel2, carousel3, greencircle, person, redcircle, yellowcircle } from "../assets";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import { order_type } from "../context/context-type";

import "./css/DriverHomePage.css";

const DriverHomePage = () => {
  const { token, currentUser } = useContext(AuthContext);
  const [orderList, setOrderList] = useState([order_type]);
  const [msg, setMsg] = useState("");
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function handlePickUp(id) {
    postRiderOrderCreateAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response));
  }

  function handleComplete(id) {
    postRiderOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response));
    window.location.reload();
  }

  function handleStatusUpdate(statusCode) {
    setStatusAPI(token, statusCode)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response));
    window.location.reload();
  }

  useEffect(() => {
    getRiderOrderAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err));
  }, [token, msg]);

  return (
    <Layout>
      <Container>
        <Row className="my-5">
          <Col sm={8}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img className="d-block w-100 carousel-member rounded" src={carousel1} alt="First slide" />
                <Carousel.Caption>
                  <h3>What is Healthy Diet</h3>
                  <p>
                    A healthy diet is an essential aspect of a well-balanced lifestyle. It should include a variety of fruits, vegetables, whole grains, lean protein sources, and healthy fats. A healthy diet is not about strict limitations,
                    but rather about feeling good, having more energy, and keeping your body healthy.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 carousel-member rounded" src={carousel2} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Benefit of Healthy Diet</h3>
                  <p>
                    Eating a healthy diet has numerous benefits for both physical and mental health. Eating a diet rich in nutrients also supports strong bones, healthy skin, and good eye health. Additionally, a healthy diet can improve
                    mental clarity, increase energy levels, and boost mood. Moreover, it can aid in digestion, reduce inflammation, and support a strong immune system.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 carousel-member rounded" src={carousel3} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Our Meal Package</h3>
                  <p>
                    Our meal package include a balanced selection of nutritious options, including whole grains, lean proteins, and plenty of fresh fruits and vegetables. The menu also offer healthy fats and limit processed foods, added
                    sugars, and unhealthy fats. We follow a strict regulation to make well-balanced, portion-controlled, and meet specific dietary requirements, such as low-sodium or gluten-free options.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={4}>
            <div className="card">
              <div className="text-center">
                <h3 className="text-white py-3">Profile Card</h3>
              </div>
              <Row className="mb-3">
                <Col>
                  <img src={currentUser.imageUrl} alt="profile pic" className="profile-driver" />
                </Col>
                <Col className="text-white">
                  <span>Name : </span>
                  <span>{currentUser.name}</span>
                  <div className="d-flex">
                    <img src={car} alt="" className="icon-car" />
                    <span>Driver</span>
                  </div>
                </Col>
              </Row>
              <div className="dropdown">
                <button className="dropbtn">STATUS: {currentUser.status}</button>
                <div className="dropdown-content">
                  <div className="status text-white d-flex justify-content-center w-50 m-auto mb-2 mt-2">
                    <Button
                      className="w-100 text-left"
                      onClick={() => {
                        handleStatusUpdate(1);
                      }}
                    >
                      <img src={greencircle} alt="" className="status-icon" />
                      <span className="fw-bold ms-3">Available</span>
                    </Button>
                  </div>
                  <div className="status text-white d-flex justify-content-center w-50 m-auto mb-2">
                    <Button
                      className="w-100 text-left"
                      onClick={() => {
                        handleStatusUpdate(2);
                      }}
                    >
                      <img src={yellowcircle} alt="" className="status-icon" />
                      <span className="fw-bold ms-3">Busy</span>
                    </Button>
                  </div>
                  <div className="status text-white d-flex justify-content-center w-50 m-auto mb-2">
                    <Button
                      className="w-100 text-left"
                      onClick={() => {
                        handleStatusUpdate(3);
                      }}
                    >
                      <img src={redcircle} alt="" className="status-icon" />
                      <span className="fw-bold ms-3">Not Available</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="card mb-5">
          <h3 className="text-white fw-bold text-center py-3">Delivery Schedule</h3>

          {/* DONT DELETE THIS COMMENT */}
          {/* {msg && (<span onClick={() => {setMsg("")}}>{msg}</span>)} */}

          <div className="container">
            <Table striped className="text-white text-center driver mb-3">
              <thead className="driver-table">
                <tr>
                  <th>No</th>
                  <th>Pick up</th>
                  <th>Drop Off</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {orderList.map((order, index) => (
                  <tr key={index}>
                    <td className="text-white">{index + 1}</td>
                    <td className="text-white w-25">{order.preparedBy.address}</td>
                    <td className="text-white w-25">{order.orderBy.address}</td>
                    <td className="text-white w-25">
                      <div className="status text-white d-flex justify-content-center">
                        <img src={greencircle} alt="" className="status-icon" />
                        <span className="ms-3">{order.orderStatus}</span>
                      </div>
                    </td>
                    <td className="text-white w-25">
                      {order.orderStatus === "READY_TO_DELIVER" ? (
                        <Button
                          size="sm"
                          className="w-50"
                          onClick={() => {
                            handlePickUp(order.id);
                          }}
                        >
                          Pickup
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="success"
                          className="w-50"
                          onClick={() => {
                            handleComplete(order.id);
                          }}
                        >
                          Complete
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default DriverHomePage;
