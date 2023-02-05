import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { bannerportairt2 } from "../../assets";

import "./Form.css";

const UPLOAD_ENDPOINT = "http://localhost:8080/api/auth/partner/signup";

const FormPartnership = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("file", file);

    axios
      .post(UPLOAD_ENDPOINT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((resp) => {
        navigate(`/login?msg=${resp.data.message}`);
      })
      .catch((err) => setStatus(err.response.data.message));
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-xxl-8 px-4 py-5">
        <div className="card row flex-lg-row-reverse  py-5">
          <div
            className="circle-yellow-lg"
            style={{ top: "-70px", right: "-50px" }}
          ></div>
          <h3 className="contact-title mx-3 text-white text-center">
            Partnership Request
          </h3>
          <hr className="text-white" />
          <div className="col-10 col-sm-8 col-lg-6 img-center">
            <img
              src={bannerportairt2}
              className="rounded img-partner mb-3 pe-3"
              alt="Bootstrap Themes"
            />
          </div>
          <div className="col-lg-6 text-center" bis_skin_checked="1">
            <Form
              onSubmit={handleSubmit}
              className="px-3 text-white text-center"
            >
              <Form.Group className="mb-3 mx-3" controlId="name">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="email">
                <Form.Label>Company Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="address">
                <Form.Label>Company Address</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="file">
                <Form.Label>Image Upload</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder=""
                  required
                />
              </Form.Group>
              <div className="text-center mb-2 d-grid mx-3 pt-3">
                <Button type="submit" className="button fw-bold" size="lg">
                  Send Request
                </Button>
                <div className="or-separator">
                  <span className="or-text">OR</span>
                </div>
                <Link to="/register" className="link-width w-100">
                  <Button className="button fw-bold w-100" size="lg">
                    Register
                  </Button>
                </Link>
              </div>
            </Form>
          </div>
          <div
            className="circle-yellow-lg"
            style={{ bottom: "-70px", left: "-50px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FormPartnership;
