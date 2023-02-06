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
} from "react-bootstrap"
import {
  getPartnerOrderAPI,
  postPartnerOrderCompleteAPI,
  postPartnerOrderCreateAPI,
} from "../api/partner-api"
import {
  carousel1,
  carousel2,
  carousel3,
  greencircle,
  redcircle,
  yellowcircle,
} from "../assets"
import Layout from "../components/layout/Layout"
import AuthContext from "../context/auth-context"
import { order_type } from "../context/context-type"

import "./css/CaregiverHomePage.css"

const PartnerHomePage = () => {
  const { token, currentUser } = useContext(AuthContext)
  const [msg, setMsg] = useState("")
  const [orderList, setOrderList] = useState([order_type])
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function handlePrepare(id) {
    postPartnerOrderCreateAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response))
  }

  function handleComplate(id) {
    postPartnerOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response))
  }

  useEffect(() => {
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
            <h4 className='text-center fw-bold title-caregiver'>
              Meal Package List
            </h4>
            <div className='card'>
              <Table striped className='text-white text-center driver mb-3'>
                <thead className='driver-table'>
                  <tr>
                    <th>Meal</th>
                  </tr>
                </thead>
                <tbody className='text-white'>
                  <tr>
                    <td className='text-white'>1</td>
                  </tr>
                  <tr>
                    <td className='text-white'>1</td>
                  </tr>
                  <tr>
                    <td className='text-white'>1</td>
                  </tr>
                </tbody>
              </Table>

              <div className='text-center fw-bold py-3'>
                <Button
                  variant='primary'
                  onClick={handleShow}
                  className='button'
                >
                  + Add Meal Package
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='mb-5'>
          <Col sm={8}>
            <h4 className='fw-bold title-caregiver'>Order Notification</h4>
            <div className='card'>
              <div className='container'>
                <Table striped className='text-white text-center driver my-3'>
                  <thead className='driver-table'>
                    <tr>
                      <th>No</th>
                      <th>Request</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody className='text-white'>
                    {orderList.map((order, index) => (
                      <tr key={order.id}>
                        <td className='text-white'>{index + 1}</td>
                        <td className='text-white'>
                          {order.orderBy.name} requested for{" "}
                          {order.mealPackage.packageName}
                        </td>
                        <td className='text-white'>{Date(order.orderOn).slice(0, 10)}</td>
                        <td className='text-white'>{Date(order.orderOn).slice(15, 30)}</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td className='text-white'>1</td>
                      <td className='text-white'>
                        Purwa requested for Package Meal 2
                      </td>
                      <td className='text-white'>Decemeber 31, 2000</td>
                      <td className='text-white'>5:00 PM</td>
                    </tr>
                    <tr>
                      <td className='text-white'>1</td>
                      <td className='text-white'>
                        Purwa requested for Package Meal 2
                      </td>
                      <td className='text-white'>Decemeber 31, 2000</td>
                      <td className='text-white'>5:00 PM</td>
                    </tr> */}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <h4 className='text-center fw-bold title-caregiver'>
              Driver Availability
            </h4>
            <div className='card'>
              <Table striped className='text-white text-center driver mb-3'>
                <thead className='driver-table'>
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody className='text-white'>
                  <tr>
                    <td className='text-white'>1</td>
                  </tr>
                  <tr>
                    <td className='text-white'>1</td>
                  </tr>
                  <tr>
                    <td className='text-white'>1</td>
                  </tr>
                </tbody>
              </Table>
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
                      <td className='text-white'>{order.orderOn}</td>
                      <td className='text-white'>
                        {order.orderStatus === "PENDING" ? (
                          <Button onClick={() => handlePrepare(order.id)}>
                            prepare
                          </Button>
                        ) : (
                          <Button onClick={() => handleComplate(order.id)}>
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
        <Modal.Header closeButton className='modal-popup'>
          <div className='text-center'>
            <Modal.Title className='text-white fw-bold'>
              Add Package
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className='modal-popup'>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label className='text-white fw-bold'>
                Main Course
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Ex: Roasted Duck/ Spicy Thai Chicken/ect'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label className='text-white fw-bold'>Salad</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ex: garden salad/Greek salad/chopped Thai salad'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label className='text-white fw-bold'>Soup</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ex: Pumpkin soup/Tuscan/ect'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label className='text-white fw-bold'>Dessert</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ex: Pudding/ fruit tarts/ lemon creme/ ect'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label className='text-white fw-bold'>Drink</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ex: Carrot Juice/ Liang Tea/ Teh Poci/ ect'
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <div className='text-center modal-popup p-3'>
          <Button onClick={handleClose} className='button fw-bold w-50'>
            Submit
          </Button>
        </div>
      </Modal>
    </Layout>
  )
}

export default PartnerHomePage;
