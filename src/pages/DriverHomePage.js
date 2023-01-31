import { useState } from "react";
import { Carousel, Col, Container, Row, Table } from "react-bootstrap";
import { car, carousel1, carousel2, carousel3, greencircle, person, redcircle, yellowcircle } from "../assets";
import Layout from "../components/layout/Layout";

import './css/DriverHomePage.css';

const DriverHomePage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Layout>
            <Container>
                <Row className="my-5">
                    <Col sm={8}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-member rounded"
                                    src={carousel1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Daily Meals</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-member rounded"
                                    src={carousel2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Daily Meals</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-member rounded"
                                    src={carousel3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Daily Meals</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                                    <img src={person} alt="" className="profile-driver" />
                                </Col>
                                <Col className="text-white">
                                    <span>Name : </span>
                                    <span>John Doe</span>
                                    <div className="d-flex">
                                        <img src={car} alt="" className="icon-car" />
                                        <span>Driver</span>
                                    </div>
                                    <span>Total Delivery : </span>
                                    <span>100</span>
                                </Col>
                            </Row>
                            <div className="dropdown">
                                <button className="dropbtn">Status</button>
                                <div className="dropdown-content">
                                    <a href="#">
                                        <div className="status text-white d-flex justify-content-center">
                                            <img src={greencircle} alt="" className="status-icon" />
                                            <span className="fw-bold ms-3">Available</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="status text-white d-flex justify-content-center">
                                            <img src={yellowcircle} alt="" className="status-icon" />
                                            <span className="fw-bold ms-3">Busy</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="status text-white d-flex justify-content-center">
                                            <img src={redcircle} alt="" className="status-icon" />
                                            <span className="fw-bold ms-3">Not Available</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="status text-white d-flex justify-content-center my-3">
                                <img src={greencircle} alt="" className="status-icon" />
                                <span className="fw-bold ms-3">Available</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="card mb-5">
                    <h3 className="text-white fw-bold text-center py-3">Delivery Schedule</h3>
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
                                <tr>
                                    <td className="text-white">1</td>
                                    <td className="text-white">5001 Lem Road, Charter Street, Paul’s Garage</td>
                                    <td className="text-white">339 Tetrick Road, Fort Myers, No. 18</td>
                                    <td className="text-white">1</td>
                                    <td className="text-white">well DOne</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </Container>
        </Layout>
    );
}

export default DriverHomePage;