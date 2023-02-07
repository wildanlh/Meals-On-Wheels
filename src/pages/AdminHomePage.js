import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMenu, addMenu } from "../api/api";
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
  assignVolunteerAPI,
} from "../api/admin-api";
import { greencircle, redcircle, usericon, yellowcircle } from "../assets";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import {
  menu_type,
  order_type,
  user_count,
  user_type,
} from "../context/context-type";

import "./css/AdminHomePage.css";

const AdminHomePage = () => {
  const { token } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [orderList, setOrderList] = useState([order_type]);
  const [deliverList, setDeliverList] = useState([order_type]);
  const [users, setUsers] = useState([user_type]);
  const [volunteers, setVolunteers] = useState([user_type]);
  const [msg, setMsg] = useState("");
  const [riders, setRider] = useState([user_type]);
  const [paertners, setPartner] = useState([user_type]);
  const [userCount, setUserCount] = useState(user_count);
  const [menu, setMenu] = useState([menu_type]);

  const [packageName, setPackageName] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [salad, setSalad] = useState("");
  const [soup, setSoup] = useState("");
  const [dessert, setDessert] = useState("");
  const [drink, setDrink] = useState("");
  const [frozen, setFrozen] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    //event.preventDefault();
    const formData = new FormData();

    formData.append("packageName", packageName);
    formData.append("mainCourse", mainCourse);
    formData.append("salad", salad);
    formData.append("soup", soup);
    formData.append("dessert", dessert);
    formData.append("drink", drink);
    formData.append("frozen", frozen);
    formData.append("packageImage", image);

    addMenu(token, formData);
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePrepare(order, user) {
    postAdminOrderPrepareAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  function handleDeliver(order, user) {
    postAdminOrderDeliverAPI(token, order, user)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  function handleActive(id) {
    getAdminUserActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  function handleAssignRole(id, rolecode) {
    assignVolunteerAPI(token, id, rolecode)
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

    getAdminUserCountAPI(token)
      .then((resp) => setUserCount(resp.data))
      .catch((err) => console.log(err));

    getAdminUserAPI(token)
      .then((resp) => {
        resp.data = resp.data
          .filter((item) => {
            return (item.active === false) && !(item.role.localeCompare("ROLE_VOLUNTEER") === 0);
          })
          .map((item) => {
            setUsers(item);
            return item;
          });
        setUsers(resp.data);
      })
      .catch((err) => console.log(err));

    getAdminUserAPI(token)
      .then((resp) => {
        
        resp.data = resp.data
          .filter((item) => {
            return (item.role.localeCompare("ROLE_VOLUNTEER") === 0 );
          })
          .map((item) => {
            setVolunteers(item);
            return item;
          });
        setVolunteers(resp.data);
      })
      .catch((err) => console.log(err));

    getMenu(token)
      .then((resp) => {
        setMenu(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, msg]);

  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5 fw-bold">Dashboard</h1>
        <Row>
          <Col>
            <div className="mini-card mb-5">
              <h5 className="fw-bold text-white mx-3 pt-3">Member</h5>
              <div className="mx-3 pb-3">
                <div className="d-flex">
                  <img src={usericon} alt="" className="icon-user" />
                  <span className="mx-2 fw-bold text-white">
                    {userCount.totalUser}
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mini-card mb-5">
              <h5 className="fw-bold text-white mx-3 pt-3">Volunteer</h5>
              <div className="mx-3 pb-3">
                <div className="d-flex">
                  <img src={usericon} alt="" className="icon-user" />
                  <span className="mx-2 fw-bold text-white">
                    {userCount.totalVolunteer}
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mini-card mb-5">
              <h5 className="fw-bold text-white mx-3 pt-3">Driver</h5>
              <div className="mx-3 pb-3">
                <div className="d-flex">
                  <img src={usericon} alt="" className="icon-user" />
                  <span className="mx-2 fw-bold text-white">
                    {userCount.totalRider}
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="mini-card mb-5">
              <h5 className="fw-bold text-white mx-3 pt-3">Partner</h5>
              <div className="mx-3 pb-3">
                <div className="d-flex">
                  <img src={usericon} alt="" className="icon-user" />
                  <span className="mx-2 fw-bold text-white">
                    {userCount.totalPartner}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Table Assign Partner Task */}
        <Row className="pb-5">
          <Col size={12} md={9}>
            <div className="task pb-5">
              <h4 className="fw-bold title-caregiver">Assign Partner Task</h4>
              {/* Dont Delete This Comment */}
              {/* {msg && <Button onClick={() => setMsg("")}>{msg}</Button>} */}
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
                          <th>Select Partner</th>
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
                            <td className="text-white">
                              {order.preparedBy?.name}
                            </td>
                            {/* <td className='text-white'>{order.deliveredBy?.name}</td> */}
                            <td className="text-white">
                              <DropdownButton
                                title="Select"
                                variant="success"
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
          </Col>
          {/* Card Package Meal */}
          <Col size={12} md={3}>
            <h4 className="text-center fw-bold title-caregiver">
              Meal Package List
            </h4>
            <div className="card task-tbl-meal">
              <Table striped className="text-white text-center mb-3 ">
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

        <Row>
          <Col size={12} md={9} >
            {/* Table Rider Task */}
            <div className="task pb-5">
              <h4 className="fw-bold title-caregiver">Assign Driver Task</h4>
              {/* Dont Delete This Comment */}
              {/* {msg && <Button onClick={() => setMsg("")}>{msg}</Button>} */}
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
                          <th>Select Driver</th>
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
                                title="Select"
                                variant="success"
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
          </Col>

          <Col size={12} md={3}>
            {/* Card Driver Available */}
            <div className="pb-5">
              <h4 className="text-center fw-bold title-caregiver">
                Driver Availability
              </h4>
              <div className="card task-tbl-meal">
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
            </div>
          </Col>
        </Row>

        <Row>
          <Col size={12} md={6}>
            {/* Card Active Account  */}
            <div className="pb-5 my-5">
              <h4 className="fw-bold title-caregiver text-center">
                Active Account Request
              </h4>
              <div className="card">
                <Table striped className="text-white text-center driver mb-3">
                  <thead className="driver-table">
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {users.slice(0, 6).map((user) => (
                    <tbody className="text-white">
                      <tr key={user.id}>
                        <td className="text-white">{user.name}</td>
                        <td className="text-white">{user.role}</td>
                        <td className="text-white">
                          <DropdownButton
                            key="start"
                            id="dropdown-button-drop-start"
                            drop="start"
                            title="Select"
                            variant="primary"
                            size="sm"
                          >
                            <Dropdown.Item
                              onClick={() => handleActive(user.id)}
                            >
                              Approve
                            </Dropdown.Item>
                            <Dropdown.Item href={user.fileUrl}>
                              Download User File
                            </Dropdown.Item>
                          </DropdownButton>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
            </div>
          </Col>
          <Col size={12} md={6}>
            <div className="pb-5 my-5">
              <h4 className="fw-bold title-caregiver text-center">
                Assign Volunteer Role
              </h4>
              <div className="card">
                <Table striped className="text-white text-center driver mb-3">
                  <thead className="driver-table">
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Assign Role</th>
                    </tr>
                  </thead>
                  {volunteers.slice(0, 6).map((user) => (
                    <tbody className="text-white">
                      <tr key={user.id}>
                        <td className="text-white">{user.name}</td>
                        <td className="text-white">{user.role}</td>
                        <td className="text-white">
                          <DropdownButton
                            key="start"
                            id="dropdown-button-drop-start"
                            drop="start"
                            title="Select"
                            variant="primary"
                            size="sm"
                          >
                            <Dropdown.Item
                              onClick={() => handleAssignRole(user.id, 1)}
                            >
                              Assign as Rider
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleAssignRole(user.id, 2)}
                            >
                              Assign as Caregiver
                            </Dropdown.Item>
                          </DropdownButton>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-popup">
          <div className="text-center">
            <Modal.Title className="text-white fw-bold">
              Add Package
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="modal-popup">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="packageName">
              <Form.Label className="text-white fw-bold">
                Package Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Package 1/ Frozen Package 2/ect"
                onChange={(e) => setPackageName(e.target.value)}
                value={packageName}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mainCourse">
              <Form.Label className="text-white fw-bold">
                Main Course
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Roasted Duck/ Spicy Thai Chicken/ect"
                onChange={(e) => setMainCourse(e.target.value)}
                value={mainCourse}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="salad">
              <Form.Label className="text-white fw-bold">Salad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: garden salad/Greek salad/chopped Thai salad"
                onChange={(e) => setSalad(e.target.value)}
                value={salad}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="soup">
              <Form.Label className="text-white fw-bold">Soup</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Pumpkin soup/Tuscan/ect"
                onChange={(e) => setSoup(e.target.value)}
                value={soup}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dessert">
              <Form.Label className="text-white fw-bold">Dessert</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Pudding/ fruit tarts/ lemon creme/ ect"
                onChange={(e) => setDessert(e.target.value)}
                value={dessert}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="drink">
              <Form.Label className="text-white fw-bold">Drink</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Carrot Juice/ Liang Tea/ Teh Poci/ ect"
                onChange={(e) => setDrink(e.target.value)}
                value={drink}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 mx-3" controlId="frozen">
              <Form.Label>Frozen</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setFrozen(e.target.value);
                }}
                value={frozen}
                required
              >
                <option disabled>Is it frozen</option>
                <option defaultValue={true} value="1">
                  Yes
                </option>
                <option value="2">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mx-3" controlId="file">
              <Form.Label>Image Upload</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <div className="text-center modal-popup p-3">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="button fw-bold w-50"
          >
            Submit
          </Button>
        </div>
      </Modal>
      <div
        className="circle-yellow-lg"
        style={{ bottom: "450px", left: "-100px" }}
      ></div>
      <div
        className="half-circle"
        style={{ bottom: "50px", right: "-50px" }}
      ></div>
    </Layout>
  );
};

export default AdminHomePage;
