import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import "./Form.css";
import AuthContext from "../../context/auth-context";

const LOGIN_ENDPOINT = "http://localhost:8080/api/auth/signin";

const FormLogin = () => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [statusBr, setStatusBr] = useState("");
  const [action, setAction] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useSearchParams();

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    //setStatus("") // Reset status
    event.preventDefault();
    const formData = new FormData();
    handleShow();

    formData.append("email", email);
    formData.append("password", password);

    try {
      await axios
        .post(LOGIN_ENDPOINT, formData, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((resp) => {
          authCtx.login(resp.data.accessToken);

          console.log(resp.data.role);
          switch (resp.data.role) {
            case "[ROLE_MEMBER]":
              navigate("/home");
              break;
            case "[ROLE_CAREGIVER]":
              navigate("/caregiver");
              break;
            case "[ROLE_PARTNER]":
              navigate("/partner");
              break;
            case "[ROLE_RIDER]":
              navigate("/driver");
              break;
            case "[ROLE_VOLUNTEER]":
              navigate("/#volunteer");
              break;
            case "[ROLE_ADMIN]":
              navigate("/admin");
              break;

            default:
              navigate("/");
              break;
          }
        })
        .catch((err) => {
          console.log(err);
          let errMsg = err.response.data.message;
          setMsg();
          setStatus(errMsg);
          setStatusBr(<br />);
          setAction("Contact Our Customer Service if this persist");

          if (
            errMsg === "ROLE_MEMBER" ||
            errMsg === "ROLE_CAREGIVER" ||
            errMsg === "ROLE_VOLUNTEER"
          ) {
            setStatus("Account awaiting admin approval.");
          }
          if (errMsg === "ROLE_PARTNER" || errMsg === "ROLE_RIDER") {
            setStatus("Your account has not been activated");
          }
        });

      // user_role = JSON.stringify(resp.data.accessToken)
      // localStorage.setItem("token", resp.data.accessToken)
      // console.log("user_role: " + user_role)
    } catch (err) {
      // todo: fail login

      console.error(err); //can be removed
    }
    // setStatus(resp.status === 200 ? "Thank you!" : "Error.")
    // if (resp.status === 200) {
    //   // todo: success login
    //   // todo: update context to logged in

    //   navigate("/home")

    //   // if (user_role === "[ROLE_MEMBER]") {
    //   //   navigate("#member_home")
    //   // } else if (user_role === "[ROLE_VOLUNTEER]") {
    //   //   navigate("#volunteer_home")
    //   // } else if (user_role === "[ROLE_CAREGIVER]") {
    //   //   navigate("#caregiver_home")
    //   // } else if (user_role === "[ROLE_RIDER]") {
    //   //   navigate("#rider_home")
    //   // } else if (user_role === "[ROLE_ADMIN]") {
    //   //   navigate("#admin_home")
    //   // } else if (user_role === "[ROLE_PARTNER]") {
    //   //   navigate("#partner_home")
    //   // }
    // }
  };

  return (
    <div className="container col-12 col-sm-8 col-lg-6 d-flex justify-content-center">
      <div className="card m-5 card-donate ">
        <div
          className="stroke-circle-yellow-lg"
          style={{ top: "-70px", left: "-50px" }}
        ></div>
        <Form onSubmit={handleSubmit} className="p-3 text-white text-center">
          <div className="text-center py-3">
            <h3 className="contact-title mx-3 text-white">LOGIN</h3>
            <div className="d-flex mx-auto col-8">
            <p className="" id="text-pop">
              {msg.get("msg") && <span>{msg.get("msg")}</span>}
            </p>
            </div>

            {/* {status}
            {statusBr} */}
            {/* {action} */}
            <hr className="text-white" />
          </div>
          <Form.Group className="mb-3 mx-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3 mx-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              minLength={6}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
            />
          </Form.Group>
          <div className="text-center mb-2 d-grid mx-3 pt-3">
            <Button type="submit" className="button fw-bold" size="lg">
              Login
            </Button>
          </div>
          <div className="text-center mt-3 p-3">
            <span>Don't have an account?</span>
            <Link to="/register" className="ms-2 text-white">
              Register
            </Link>
          </div>
        </Form>

        {/* Popup Request Msg */}
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <div className="text-center">
              <Modal.Title
                className="text-white fw-bold"
                id="contained-modal-title-vcenter"
              ></Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p className="text-center fw-bold" id="msg-error">
              {status}
              {statusBr}
              {action}
            </p>
          </Modal.Body>
          <div className="text-center p-3">
            <Button onClick={handleClose} className="button fw-bold w-50">
              Try Again
            </Button>
          </div>
        </Modal>

        <div
          className="circle-yellow-lg"
          style={{ bottom: "-70px", right: "-50px" }}
        ></div>
      </div>
    </div>
  );
};

export default FormLogin;
