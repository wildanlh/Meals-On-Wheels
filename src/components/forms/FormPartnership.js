import { FloatingLabel, Form, Button } from "react-bootstrap";

const FormPartnership = () => {
    return (
        <div className="container col-8 col-sm-3 col-lg-6 d-flex justify-content-center">
            <div className="card m-5 card-partner">
                <Form className="p-3">
                    <div className="text-center py-3">
                        <h3 className="contact-title mx-3 text-white">Send a Partnership Request</h3>
                        <hr className="text-white" />
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Company Name"
                        className="mb-3 mx-3"
                    >
                        <Form.Control type="text" placeholder="Google" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3 mx-3"
                    >
                        <Form.Control type="email" placeholder="email@email.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Reason" className="mb-3 mx-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <div className="text-center mb-2 d-grid mx-3 pt-3">
                        <Button className="button fw-bold" size="lg">Send Request</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default FormPartnership;