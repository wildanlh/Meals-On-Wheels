import { FloatingLabel, Form, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const MEAL_PACKAGE_COUNT = fetch("http://localhost:8080/api/mealcount")
  .then((response) => {
    return response.json();
  });

let PackageCount = [];
let itemList=[];
const countPackage = async () => {
  PackageCount = await MEAL_PACKAGE_COUNT;
  console.log(PackageCount);
  PackageCount.forEach((item,index)=>{
    itemList.push(<option value={index + 1}>{index + 1}</option>)
  })
};
countPackage();

const UPLOAD_ENDPOINT = "http://localhost:8080/api/feedback";

const FormFeedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mealPackageId, setmealPackageId] = useState("");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("mealPackageId", mealPackageId);
    formData.append("feedback", feedback);
    axios
      .post(UPLOAD_ENDPOINT, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((resp) => {
        navigate(`/home?msg=${resp.data.message}`);
      })
      .catch((err) => setStatus(err.response.data.message));

  };

  return (
    <div className="container col-12 col-sm-3 col-lg-6 d-flex justify-content-center">
      <div className="card m-5 w-75">
        <Form onSubmit={handleSubmit} className="p-3">
          <div className="py-3">
            <h3 className="contact-title mx-3 text-white">Give us Feedback</h3>
            <hr className="text-white" />
          </div>
          <Form.Group className="mb-3 mx-3" controlId="name">
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3 mx-3"
            >
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Full Name" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 mx-3" controlId="email">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3 mx-3"
            >
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email@email.com" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 mx-3" controlId="mealPackageId">
            <FloatingLabel
              controlId="floatingSelect"
              label="Package Number"
              className="mx-3 mb-3"
            >
              <Form.Select aria-label="Floating label select example" onChange={(e) => setmealPackageId(e.target.value)} value={mealPackageId}>
                <option disabled defaultValue={true}>Select Meal Package Number</option>
                {itemList}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 mx-3" controlId="feedback">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Feedback"
              className="mb-3 mx-3"
            >
              <Form.Control onChange={(e) => setFeedback(e.target.value)} value={feedback}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>

          <div className="text-center mb-2mx-3 pt-3">
            <Button type="submit" className="button fw-bold" size="lg">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormFeedback;
