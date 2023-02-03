import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";

const FormDonate = () => {
  return (
    <div className="container col-12 col-sm-8 col-lg-6 d-flex justify-content-center">
      <div className="card m-5 card-donate ">
        <Form className="p-3">
          <h3 className="contact-title py-3 mx-3 text-white">Donate</h3>
          <FloatingLabel
            controlId="floatingInput"
            label="Amount"
            className="mb-3 mx-3"
          >
            <Form.Control type="text" placeholder="$" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Card Number"
            className="mb-3 mx-3"
          >
            <Form.Control type="text" placeholder="Card Number" />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3 ms-3"
              >
                <Form.Control type="text" placeholder="Card Number" />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3 me-3"
              >
                <Form.Control type="text" placeholder="Card Number" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3 mx-3"
          >
            <Form.Control type="email" placeholder="email@email.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Expiration Date"
            className="mb-3 mx-3"
          >
            <Form.Control type="text" placeholder="DD/MM?YY" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="CVV"
            className="mb-3 mx-3"
          >
            <Form.Control type="text" placeholder="000" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Message"
            className="mb-3 mx-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <div className="text-center mb-2">
            <Button className="button fw-bold" size="lg">
              Donate Now
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormDonate;
