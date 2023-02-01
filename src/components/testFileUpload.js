import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './forms/Form.css';

const UPLOAD_ENDPOINT = "http://localhost:8080/uploadFile";

function TestFileUpload() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    setStatus(resp.status === 200 ? "Thank you!" : "Error.");
  };

  return (
    <Form className="p-3 text-white text-center" onSubmit={handleSubmit}>
        <div className="text-center py-3">
            <h3 className="contact-title mx-3 text-white">REGISTER</h3>
            <hr className="text-white" />
        </div>

        <Form.Group className="mb-3 mx-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" onChange={(e) => setAddress(e.target.value)} value={address} required/>
        </Form.Group>
        <Form.Group className="mb-3 mx-3 text" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => setGender(e.target.value)} value={gender} required>
                <option selected="selected" disabled>Choose a gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => setRole(e.target.value)} value={role} required>
                <option selected="selected" disabled>Choose a role</option>
                <option value="member">Member</option>
                <option value="driver">Driver</option>
                <option value="caregiver">Caregiver</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="file">
            <Form.Label>File Upload</Form.Label>
            <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])}/>
        </Form.Group>

      {status ? <h1>{status}</h1> : null}
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
  );
}

export default TestFileUpload;