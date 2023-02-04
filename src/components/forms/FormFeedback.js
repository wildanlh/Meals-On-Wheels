import { FloatingLabel, Form, Button } from "react-bootstrap";

const FormFeedback = () => {
  return (
    <div className="container col-12 col-sm-3 col-lg-6 d-flex justify-content-center">
      <div className="card m-5 w-75">
        <Form className="p-3">
          <div className="py-3">
            <h3 className="contact-title mx-3 text-white">Give us Feedback</h3>
            <hr className="text-white" />
          </div>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3 mx-3"
          >
            <Form.Control type="text" placeholder="Full Name" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3 mx-3"
          >
            <Form.Control type="email" placeholder="email@email.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="Package Number"
            className="mx-3 mb-3"
          >
            <Form.Select aria-label="Floating label select example">
              <option disabled selected>Select Meal Package Number</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Feedback"
            className="mb-3 mx-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <div className="text-center mb-2mx-3 pt-3">
            <Button className="button fw-bold" size="lg">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormFeedback;
