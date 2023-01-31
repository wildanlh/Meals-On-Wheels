import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fbbutton, googlebutton } from "../../assets";

import './Form.css';

const FormLogin = () => {
    const url = "https://google.com";

    return (

        <div className="container col-12 col-sm-8 col-lg-6 d-flex justify-content-center">
            <div className="card m-5 card-donate ">
                <Form className="p-3 text-white text-center">
                    <div className="text-center py-3">
                        <h3 className="contact-title mx-3 text-white">LOGIN</h3>
                        <hr className="text-white" />
                    </div>
                    <Form.Group className="mb-3 mx-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <div className="text-center mb-2 d-grid mx-3 pt-3">
                        <Button type="submit" className="button fw-bold" size="lg">Login</Button>
                    </div>
                    <div className="or-separator mx-3">
                        <span className="or-text">OR</span>
                    </div>
                    <div className="social-login mx-3">
                        <a href={url}>
                            <img src={fbbutton} alt="" className="w-100 mb-3" />
                        </a>
                        <a href={url}>
                            <img src={googlebutton} alt="" className="w-100" />
                        </a>
                    </div>
                    <div className="text-center mt-3 p-3">
                        <span>Don't have an account?</span>
                        <Link
                            to="/register"
                            className="ms-2 text-white"
                        >
                            Register
                        </Link>
                    </div>
                </Form>
            </div>
        </div>

    );
}

export default FormLogin;