import { useContext, useEffect, useState } from "react"
import {
  Button,
  Carousel,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Table,
} from "react-bootstrap"
import {
  getRiderOrderAPI,
  postRiderOrderCompleteAPI,
  postRiderOrderCreateAPI,
} from "../api/rider-api"
import {
  car,
  carousel1,
  carousel2,
  carousel3,
  greencircle,
  person,
  redcircle,
  yellowcircle,
} from "../assets"
import Layout from "../components/layout/Layout"
import AuthContext from "../context/auth-context"
import { order_type } from "../context/context-type"

import "./css/DriverHomePage.css"

const DriverHomePage = () => {
  const { token, currentUser } = useContext(AuthContext)
  const [orderList, setOrderList] = useState([order_type])
  const [msg, setMsg] = useState("")
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  function handlePickUp(id) {
    postRiderOrderCreateAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response))
  }

  function handleComplate(id) {
    postRiderOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response))
  }

  useEffect(() => {
    getRiderOrderAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err))
  }, [token, msg])

  return (
    <Layout>
      <Container>
        <Row className='my-5'>
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
            <div className='card'>
              <div className='text-center'>
                <h3 className='text-white py-3'>Profile Card</h3>
              </div>
              <Row className='mb-3'>
                <Col>
                  <img src={person} alt='' className='profile-driver' />
                </Col>
                <Col className='text-white'>
                  <span>Name : </span>
                  <span>{currentUser.name}</span>
                  <div className='d-flex'>
                    <img src={car} alt='' className='icon-car' />
                    <span>Driver</span>
                  </div>
                  <span>Total Delivery : </span>
                  <span>100</span>
                </Col>
              </Row>
              <div className='dropdown'>
                <button className='dropbtn'>Status {currentUser.status}</button>
                <div className='dropdown-content'>
                  <a href='#'>
                    <div className='status text-white d-flex justify-content-center'>
                      <img src={greencircle} alt='' className='status-icon' />
                      <span className='fw-bold ms-3'>available</span>
                    </div>
                  </a>
                  <a href='#'>
                    <div className='status text-white d-flex justify-content-center'>
                      <img src={yellowcircle} alt='' className='status-icon' />
                      <span className='fw-bold ms-3'>Busy</span>
                    </div>
                  </a>
                  <a href='#'>
                    <div className='status text-white d-flex justify-content-center'>
                      <img src={redcircle} alt='' className='status-icon' />
                      <span className='fw-bold ms-3'>Not Available</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className='status text-white d-flex justify-content-center my-3'>
                <img src={greencircle} alt='' className='status-icon' />
                <span className='fw-bold ms-3'>Available</span>
              </div>
            </div>
          </Col>
        </Row>

        <div className='card mb-5'>
          <h3 className='text-white fw-bold text-center py-3'>
            Delivery Schedule
          </h3>
          {msg && (
            <span
              onClick={() => {
                setMsg("")
              }}
            >
              {msg}
            </span>
          )}
          <div className='container'>
            <Table striped className='text-white text-center driver mb-3'>
              <thead className='driver-table'>
                <tr>
                  <th>No</th>
                  <th>Pick up</th>
                  <th>Drop Off</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text-white'>
                {orderList.map((order, index) => (
                  <tr key={index}>
                    <td className='text-white'>{index + 1}</td>
                    <td className='text-white'>{order.preparedBy.address}</td>
                    <td className='text-white'>{order.orderBy.address}</td>
                    <td className='text-white'>
                      <div className='status text-white d-flex justify-content-center'>
                        <img src={greencircle} alt='' className='status-icon' />
                        <span className='ms-3'>{order.orderStatus}</span>
                      </div>
                    </td>
                    <td className='text-white'>
                      {order.orderStatus === "READY_TO_DELIVER" ? (
                        <Button
                          onClick={() => {
                            handlePickUp(order.id)
                          }}
                        >
                          pickup
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            handleComplate(order.id)
                          }}
                        >
                          complete
                        </Button>
                      )}
                      {/* <DropdownButton
                        id='dropdown-basic-button'
                        title='Status'
                        variant='light'
                      >
                        <Dropdown.Item
                          href='#/action-1'
                          onClick={() => {
                            handlePickUp(order.id)
                          }}
                        >
                          pick up
                        </Dropdown.Item>
                        <Dropdown.Item
                          href='#/action-2'
                          onClick={() => {
                            handleComplate(order.id)
                          }}
                        >
                          complate
                        </Dropdown.Item>
                        <Dropdown.Item href='#/action-3'>
                          declin *not work
                        </Dropdown.Item>
                      </DropdownButton> */}
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td className='text-white'>1</td>
                  <td className='text-white'>
                    5001 Lem Road, Charter Street, Paul’s Garage
                  </td>
                  <td className='text-white'>
                    339 Tetrick Road, Fort Myers, No. 18
                  </td>
                  <td className='text-white'>
                    <div className='status text-white d-flex justify-content-center'>
                      <img src={greencircle} alt='' className='status-icon' />
                      <span className='ms-3'>Completed</span>
                    </div>
                  </td>
                  <td className='text-white'>
                    <DropdownButton
                      id='dropdown-basic-button'
                      title='Status'
                      variant='light'
                    >
                      <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default DriverHomePage
