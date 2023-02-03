import { Form, Button } from "react-bootstrap";
import "./Form.css";
import { bannerportairt2 } from "../../assets";

const FormDonate = () => {
  return (

    <div className="container col-12 col-sm-3 col-lg-6 d-flex justify-content-center">
    <div className="card m-5 w-75">
    <Form className="px-3 text-white text-center" action="/create-checkout-session" method="POST">
      <div className="py-3">
        <h3 className="contact-title mx-3 text-white">Contribute to the Community</h3>
        <hr className="text-white" />
        <p className="text-center">
           By donating, you are nourshing our comunity wellness.
        </p>
        <img
              src={bannerportairt2}
              className="rounded img-partner mb-3 pe-3"
              alt="Bootstrap Themes"
            />
        <Button type="submit" className="button fw-bold" size="lg">
          Donate Now
        </Button>
      </div>
      </Form>
      </div>
    </div>
  )
}

export default FormDonate;

