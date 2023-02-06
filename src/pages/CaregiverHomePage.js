import { useContext, useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Table,
} from "react-bootstrap";
import {
  getPartnerOrderAPI,
  postPartnerOrderCompleteAPI,
  postPartnerOrderCreateAPI,
} from "../api/partner-api";
import {
  getAdminOrderPendingAPI,
  getAdminOrderReadyToDeliverAPI,
  getAdminUserCountAPI,
  getPartnersAPI,
  getRidersAPI,
  postAdminOrderDeliverAPI,
  postAdminOrderPrepareAPI,
  getAdminUserActiveAPI,
  getAdminUserAPI,
} from "../api/admin-api";
import { getMenu, addMenu } from "../api/api";
import {
  carousel1,
  carousel2,
  carousel3,
  greencircle,
  redcircle,
  yellowcircle,
} from "../assets";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import { order_type, menu_type, user_type } from "../context/context-type";

import "./css/CaregiverHomePage.css";

const CaregiverHomePage = () => {
  const { token, currentUser } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const [orderList, setOrderList] = useState([order_type]);
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState([menu_type]);
  const [paertners, setPartner] = useState([user_type]);
  const [deliverList, setDeliverList] = useState([order_type]);
  const [riders, setRider] = useState([user_type]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePrepare(id) {
    postPartnerOrderCreateAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response));
  }

  function handleComplete(id) {
    postPartnerOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response));
  }

  function handleDeliver(order, user) {
    postAdminOrderDeliverAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAdminOrderPendingAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err));

    getAdminOrderReadyToDeliverAPI(token)
      .then((resp) => setDeliverList(resp.data))
      .catch((err) => console.log(err));

    getPartnersAPI(token)
      .then((resp) => setPartner(resp.data))
      .catch((err) => console.log(err));

    getRidersAPI(token)
      .then((resp) => setRider(resp.data))
      .catch((err) => console.log(err));

    getMenu(token)
      .then((resp) => {
        setMenu(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getRidersAPI(token)
      .then((resp) => setRider(resp.data))
      .catch((err) => console.log(err));
  }, [token, msg]);
  return (
    <Layout>
      <Container>
        <h1 className="py-5 fw-bold">Hello, John Doe!</h1>

        <Row className="mb-5">
          <Col sm={8}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-member rounded"
                  src={carousel1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>What is Healthy Diet</h3>
                  <p>
                    A healthy diet is an essential aspect of a well-balanced
                    lifestyle. It should include a variety of fruits,
                    vegetables, whole grains, lean protein sources, and healthy
                    fats. A healthy diet is not about strict limitations, but
                    rather about feeling good, having more energy, and keeping
                    your body healthy.
                  </p>
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
                  <p>
                    Eating a healthy diet has numerous benefits for both
                    physical and mental health. Eating a diet rich in nutrients
                    also supports strong bones, healthy skin, and good eye
                    health. Additionally, a healthy diet can improve mental
                    clarity, increase energy levels, and boost mood. Moreover,
                    it can aid in digestion, reduce inflammation, and support a
                    strong immune system.
                  </p>
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
                    Our meal package include a balanced selection of nutritious
                    options, including whole grains, lean proteins, and plenty
                    of fresh fruits and vegetables. The menu also offer healthy
                    fats and limit processed foods, added sugars, and unhealthy
                    fats. We follow a strict regulation to make well-balanced,
                    portion-controlled, and meet specific dietary requirements,
                    such as low-sodium or gluten-free options.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={4}>
            <h4 className="text-center fw-bold title-caregiver">
              Meal Package List
            </h4>
            <div className="card">
              <Table striped className="text-white text-center driver mb-3">
                <thead className="driver-table">
                  <tr>
                    <th>Meal</th>
                  </tr>
                </thead>
                {menu.slice(0, 6).map((data) => (
                  <tbody className="text-white" key={data.id}>
                    <tr>
                      <td className="text-white">{data.packageName}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>

              <div className="text-center fw-bold">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="button my-3"
                >
                  + Add Meal Package
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h4 className="text-center fw-bold title-caregiver">
              Driver Availability
            </h4>
            <div className="card">
              <Table striped className="text-white text-center driver mb-3">
                <thead className="driver-table">
                  <tr>
                    <th>no</th>
                    <th>Name</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {riders.slice(0, 6).map((rider, index) => (
                    <tr key={rider.id}>
                      <td className="text-white">{index + 1}</td>
                      <td className="text-white">{rider.name}</td>
                      <td className="text-white">{rider.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <div className="task pb-5">
          <h4 className="fw-bold title-caregiver">Task</h4>
          {msg && <Button onClick={() => setMsg("")}>{msg}</Button>}
          <div className="card">
            <div className="container">
              <div className="task-header-div">
                <Table
                  striped
                  className="text-white text-center driver my-3 task-header tbl-width col-width"
                >
                  <thead className="driver-table">
                    <tr>
                      <th>No</th>
                      <th>Meals Request List</th>
                      <th>Status</th>
                      <th>Assigned Partner</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </Table>
              </div>
              <div className="task-tbl-div">
                <Table
                  striped
                  className="text-white text-center driver my-3 task-tbl tbl-width col-width"
                >
                  <tbody className="text-white">
                    {orderList.map((order, index) => (
                      <tr key={order.id}>
                        <td className="text-white">{index + 1}</td>
                        <td className="text-white">
                          {order.mealPackage.packageName}
                        </td>
                        <td className="text-white">
                          <div className="status text-white d-flex justify-content-center">
                            <img
                              src={redcircle}
                              alt=""
                              className="status-icon"
                            />
                            <span className="fw-bold ms-3">
                              {order.orderStatus}
                            </span>
                          </div>
                        </td>
                        <td className="text-white">{order.preparedBy?.name}</td>
                        {/* <td className='text-white'>{order.deliveredBy?.name}</td> */}
                        <td className="text-white">
                          <DropdownButton
                            title="Prepare"
                            variant="light"
                            key="start"
                            id="dropdown-button-drop-start"
                            drop="start"
                            size="sm"
                          >
                            {paertners.map((partner) => (
                              <Dropdown.Item
                                href="#/action-1"
                                onClick={() =>
                                  handlePrepare(order.id, partner.id)
                                }
                                key={partner.id}
                              >
                                {partner.name} {partner.status}
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <div className="task pb-5">
          <h4 className="fw-bold title-caregiver">Rider Task</h4>
          {msg && <Button onClick={() => setMsg("")}>{msg}</Button>}
          <div className="card">
            <div className="container">
              <div className="task-header-div">
                <Table
                  striped
                  className="text-white text-center driver my-3 task-header tbl-width col-width"
                >
                  <thead className="driver-table">
                    <tr>
                      <th>No</th>
                      <th>Meals Request List</th>
                      <th>Status</th>
                      <th>Assigned Driver</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </Table>
              </div>
              <div className="task-tbl-div">
                <Table
                  striped
                  className="text-white text-center driver my-3 task-tbl tbl-width col-width"
                >
                  <tbody className="text-white">
                    {deliverList.map((order, index) => (
                      <tr key={order.id}>
                        <td className="text-white">{index + 1}</td>
                        <td className="text-white">
                          {order.mealPackage.packageName}
                        </td>
                        <td className="text-white">
                          <div className="status text-white d-flex justify-content-center">
                            <img
                              src={redcircle}
                              alt=""
                              className="status-icon"
                            />
                            <span className="fw-bold ms-3">
                              {order.orderStatus}
                            </span>
                          </div>
                        </td>
                        <td className="text-white">
                          {order.deliveredBy?.name}
                        </td>
                        {/* <td className='text-white'>{order.deliveredBy?.name}</td> */}
                        <td className="text-white">
                          <DropdownButton
                            title="Deliver"
                            variant="light"
                            key="start"
                            id="dropdown-button-drop-start"
                            drop="start"
                            size="sm"
                          >
                            {riders.map((rider) => (
                              <Dropdown.Item
                                href="#/action-1"
                                onClick={() =>
                                  handleDeliver(order.id, rider.id)
                                }
                                key={rider.id}
                              >
                                {rider.name} {rider.status}
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CaregiverHomePage;
