import { useContext, useEffect, useState } from "react"
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import {
  getPartnerOrderAPI,
  postPartnerOrderCompleteAPI,
  postPartnerOrderCreateAPI,
} from "../api/partner-api"
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
} from "../api/admin-api"
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
import { order_type, menu_type,  user_type, user_count } from "../context/context-type";

import "./css/CaregiverHomePage.css"

const PartnerHomePage = () => {

  const { token } = useContext(AuthContext)
  const [msg, setMsg] = useState("")
  const [orderList, setOrderList] = useState([order_type])
  const [index, setIndex] = useState(0)
  const [menu, setMenu] = useState([menu_type]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  const [packageName, setPackageName] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [salad, setSalad] = useState("");
  const [soup, setSoup] = useState("");
  const [dessert, setDessert] = useState("");
  const [drink, setDrink] = useState("");
  const [frozen, setFrozen] = useState("1");
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

    console.log(frozen);

    addMenu(token, formData);

    window.location.reload();

  };

  function handlePrepare(id) {
    postPartnerOrderCreateAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response))
  }

  function handleComplete(id) {
    postPartnerOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response))
  }

  useEffect(() => {
    getAdminOrderPendingAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err))

    getMenu(token)
      .then((resp) => {
        setMenu(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getPartnerOrderAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err.response))
  }, [token, msg])
  return (
    <Layout>
      <Container>
        <h1 className='py-5 fw-bold'>Hello, Partner!</h1>

        <Row className='mb-5'>
          <Col sm={8}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className='d-block w-100 carousel-member rounded'
                  src={carousel1}
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>Daily Meals</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 carousel-member rounded'
                  src={carousel2}
                  alt='Second slide'
                />

                <Carousel.Caption>
                  <h3>Daily Meals</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 carousel-member rounded'
                  src={carousel3}
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Daily Meals</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
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

        <div className='task pb-5'>
          <h4 className='fw-bold title-caregiver'>Task</h4>
          {msg && <Button onClick={() => setMsg("")}>{msg}</Button>}
          <div className='card'>
            <div className='container'>
              <Table striped className='text-white text-center driver my-3'>
                <thead className='driver-table'>
                  <tr>
                    <th>No</th>
                    <th>Meals Request List</th>
                    <th>Status</th>
                    <th>order on</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody className='text-white'>
                  {orderList.map((order, index) => (
                    <tr key={order.id}>
                      <td className='text-white'>{index + 1}</td>
                      <td className='text-white'>
                        {order.mealPackage.packageName}
                      </td>
                      <td className='text-white'>
                        <div className='status text-white d-flex justify-content-center'>
                          <img src={redcircle} alt='' className='status-icon' />
                          <span className='fw-bold ms-3'>
                            {order.orderStatus}
                          </span>
                        </div>
                      </td>
                      <td className='text-white'>
                        {
                          new Date(order.orderOn).toLocaleString('en-GB', { timeZone: 'Asia/Singapore',hour12:true }).slice(11,30)
                        }
                      </td>
                      <td className='text-white'>
                        {order.orderStatus === "PENDING" ? (
                          <Button onClick={() => handlePrepare(order.id)}>
                            prepare
                          </Button>
                        ) : (
                          <Button onClick={() => handleComplete(order.id)}>
                            complete
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {/* <tr>
                    <td className='text-white'>1</td>
                    <td className='text-white'>Meal Package 1</td>
                    <td className='text-white'>
                      <div className='status text-white d-flex justify-content-center'>
                        <img
                          src={yellowcircle}
                          alt=''
                          className='status-icon'
                        />
                        <span className='fw-bold ms-3'>On the Way</span>
                      </div>
                    </td>
                    <td className='text-white'>John Doe</td>
                    <td className='text-white'>Submit</td>
                  </tr>
                  <tr>
                    <td className='text-white'>1</td>
                    <td className='text-white'>Meal Package 1</td>
                    <td className='text-white'>
                      <div className='status text-white d-flex justify-content-center'>
                        <img src={greencircle} alt='' className='status-icon' />
                        <span className='fw-bold ms-3'>Completed</span>
                      </div>
                    </td>
                    <td className='text-white'>John Doe</td>
                    <td className='text-white'>Submit</td>
                  </tr> */}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
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
                onChange={(e) => setPackageName(e.target.value)} value={packageName}
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
                onChange={(e) => setMainCourse(e.target.value)} value={mainCourse}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="salad">
              <Form.Label className="text-white fw-bold">Salad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: garden salad/Greek salad/chopped Thai salad"
                onChange={(e) => setSalad(e.target.value)} value={salad}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="soup">
              <Form.Label className="text-white fw-bold">Soup</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Pumpkin soup/Tuscan/ect"
                onChange={(e) => setSoup(e.target.value)} value={soup}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dessert">
              <Form.Label className="text-white fw-bold">Dessert</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Pudding/ fruit tarts/ lemon creme/ ect"
                onChange={(e) => setDessert(e.target.value)} value={dessert}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="drink">
              <Form.Label className="text-white fw-bold">Drink</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Carrot Juice/ Liang Tea/ Teh Poci/ ect"
                onChange={(e) => setDrink(e.target.value)} value={drink}
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
                  <option value="0">No</option>

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
          <Button type="submit" onClick={handleSubmit} className="button fw-bold w-50">
            Submit
          </Button>
        </div>
      </Modal>
    </Layout>
  )
}

export default PartnerHomePage;
