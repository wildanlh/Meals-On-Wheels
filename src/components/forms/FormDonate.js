import { Form, Button } from "react-bootstrap";
import "./Form.css";
import { bannerDonate } from "../../assets";

const FormDonate = () => {
  return (

    <div className="container col-12 col-sm-3 col-lg-6 d-flex justify-content-center">
    <div className="card m-5 w-75">
    <Form className="px-3 text-white text-center" action="/create-checkout-session" method="POST">
      <div className="py-3">
        <h3 className="contact-title mx-3 text-white">Contribute to the Community</h3>
        <hr className="text-white" />
        <p className="text-center">
        Help us make a difference in the lives of the elderly by making a donation today. 
        Your kindness will bring comfort and support to those in need and will make a lasting impact on their well-being. 
        Your generosity will help us to continue our mission of providing care, assistance, and resources to seniors in our community. 
        Every donation, no matter the size, is greatly appreciated and will bring hope and happiness to the elderly. 
        Together, we can make a brighter future for our aging population. 
        Thank you for your support.
        </p>
        <img
              src={bannerDonate}
              className="rounded img-donate mb-3 pe-3" 
              alt="BannerDonate"
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

