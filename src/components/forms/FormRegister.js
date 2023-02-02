import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bannerportairt1 } from "../../assets";
import { motion } from "framer-motion";

import './Form.css';

const FormRegister = () => {

    return (

        <div className="container d-flex justify-content-center">
            <div className="col-xxl-8 px-4 py-5">
                <div className="card row flex-lg-row-reverse  py-5" bis_skin_checked="1">
                    <h3 className="contact-title mx-3 text-white text-center">REGISTER</h3>
                    <hr className="text-white" />
                    <div className="col-10 col-sm-8 col-lg-6 img-center" bis_skin_checked="1">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            src={bannerportairt1} className="rounded img-register mb-3 pe-3" alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-6 text-center" bis_skin_checked="1">
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
                                <div className="or-separator">
                                    <span className="or-text">OR</span>
                                </div>
                                <Link to="/partnership" className="link-width w-100">
                                    <Button className="button fw-bold w-100" size="lg">Partnership</Button>
                                </Link>
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
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FormRegister;