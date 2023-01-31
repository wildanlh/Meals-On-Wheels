import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { banner3 } from "../../assets";

import './Form.css';

const FormRegister = () => {

    return (

        <div className="container d-flex justify-content-center">
            <div className="card m-5 w-100">
                <div className="text-center py-3">
                    <h3 className="contact-title mx-3 text-white">REGISTER</h3>
                    <hr className="text-white" />
                </div>
                <Row>
                    <Col>
                        <Form className="px-3 text-white text-center">
                            <Form.Group className="mb-3 mx-3" controlId="fullname">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="" required />
                            </Form.Group>
                            <Form.Group className="mb-3 mx-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="" required />
                            </Form.Group>
                            <Form.Group className="mb-3 mx-3 text" controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select aria-label="Default select example" required>
                                    <option selected="selected" disabled>Choose a gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-3" controlId="role">
                                <Form.Label>Role</Form.Label>
                                <Form.Select aria-label="Default select example" required>
                                    <option selected="selected" disabled>Choose a role</option>
                                    <option value="member">Member</option>
                                    <option value="driver">Driver</option>
                                    <option value="caregiver">Caregiver</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="" required />
                            </Form.Group>
                            <Form.Group className="mb-3 mx-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" required />
                            </Form.Group>
                            <Form.Group className="mb-3 mx-3" controlId="file">
                                <Form.Label>File Upload</Form.Label>
                                <Form.Control type="file" placeholder="" required />
                            </Form.Group>
                            <div className="text-center mb-2 d-grid mx-3 pt-3">
                                <Button type="submit" className="button fw-bold" size="lg">Register</Button>
                            </div>

                            <div className="text-center mt-3 p-3">
                                <span>Already have an account?</span>
                                <Link
                                    to="/login"
                                    className="ms-2 text-white"
                                >
                                    Login
                                </Link>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                        <div className="m-3">
                            <img src={banner3} alt="" className="rounded img-register" />
                        </div>
                    </Col>
                </Row>

            </div>
        </div>

    );
}

export default FormRegister;