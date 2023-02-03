import { useState } from "react"
import { Carousel, Col, Container, Row, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import { carousel1, carousel2, carousel3 } from "../assets"
import Layout from "../components/layout/Layout"

import "./css/MemberHomePage.css"

const MemberHomePage = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Layout>
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect} className='my-5'>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-member rounded'
              src={carousel1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>Daily Meals</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='meals-package mb-5'>
          <div className='col-lg-6 mb-3'>
            <h3 className='fw-bold'>
              Our Menus are in Packages to Help You Manage A Balanced Diet.
            </h3>
            <h5>Choose the package that is to your liking.</h5>
          </div>
          <Row className='card-meals'>
            <Col>
              <Link to='/meals-package-detail'>
                <div className='card text-center'>
                  <h5 className='p-3'>Meals Package Card</h5>
                  <Table striped bordered className='fw-bold'>
                    <tbody>
                      <tr>
                        <td className='text-white'>Roasted Duck</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Greek Salad</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Miso Soup</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Fruit Tart</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Teh Poci</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to='/meals-package-detail'>
                <div className='card text-center'>
                  <h5 className='p-3'>Meals Package Card</h5>
                  <Table striped bordered className='fw-bold'>
                    <tbody>
                      <tr>
                        <td className='text-white'>Roasted Duck</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Greek Salad</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Miso Soup</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Fruit Tart</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Teh Poci</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to='/meals-package-detail'>
                <div className='card text-center'>
                  <h5 className='p-3'>Meals Package Card</h5>
                  <Table striped bordered className='fw-bold'>
                    <tbody>
                      <tr>
                        <td className='text-white'>Roasted Duck</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Greek Salad</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Miso Soup</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Fruit Tart</td>
                      </tr>
                      <tr>
                        <td className='text-white'>Teh Poci</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export default MemberHomePage
