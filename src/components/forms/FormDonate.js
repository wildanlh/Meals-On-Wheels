import { Form, Button } from "react-bootstrap";
import "./Form.css";
import { bannerDonate } from "../../assets";

const FormDonate = () => {
  return (
    <div className="container d-flex justify-content-center">
    <div className="col-xxl-8 px-4 py-5">
      <div
        className="card row flex-lg-row-reverse  py-5"
        bis_skin_checked="1"
      >
        <h3 className="contact-title mx-3 text-white text-center">
        Contribute to the Community
        </h3>
        <hr className="text-white" />
        <div
          className="col-10 col-sm-8 col-lg-6 img-center"
          bis_skin_checked="1"
        >
          <img
            src={bannerDonate}
            className="rounded img-partner mb-3 pe-3"
            alt="Bootstrap Themes"
          />
        </div>
        <div className="col-lg-6 text-center" bis_skin_checked="1">
         <Form className="px-3 text-white text-center" action="/create-checkout-session" method="POST">
        <div className="py-3">
          <p className="text-center">
             Help us make a difference in the lives of the elderly by making a donation today. 
             Your kindness will bring comfort and support to those in need and will make a lasting impact on their well-being. 
             Your generosity will help us to continue our mission of providing care, assistance, and resources to seniors in our community. 
             Every donation, no matter the size, is greatly appreciated and will bring hope and happiness to the elderly. 
             Together, we can make a brighter future for our aging population. 
             Thank you for your support.
         </p>
         <Button type="submit" className="button fw-bold my-5" size="lg">
           Donate Now
         </Button>
       </div>
       </Form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormDonate;

