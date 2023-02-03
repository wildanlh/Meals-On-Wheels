import { Button, FloatingLabel, Form } from "react-bootstrap";

const FormContact = () => {
  return (
    <div className="card">
      <Form className="p-3">
        <h3 className="contact-title py-3 mx-3 text-white">Send a Message</h3>
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
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormContact;
