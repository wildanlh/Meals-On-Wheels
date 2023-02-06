import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/ThankYouPage.css";

const ThankYouPage = () => {
  return (
    <div className="thank-you d-flex">
    <div className="col-8 mx-auto">
      <div className="card card-thankyou m-auto p-5 w-50">
        <h1 className="text-white text-center fw-bold animate__animated animate__fadeInDown">
          Thank You
        </h1>
        <p className="text-white text-center animate__animated animate__fadeInDown">
          "Thank you for your generous donation! Your contribution will make a
          meaningful impact and is greatly appreciated. Your support helps us to
          further our mission and make a positive difference in the world. Thank
          you for being a part of our community of change-makers. Together, we
          can create a brighter future."
        </p>
        <Link to="/">
          <div className="text-center animate__animated animate__fadeInUp">
            <Button className="button fw-bold">Back to Home</Button>
          </div>
        </Link>
      </div>
    </div>
    </div>

  );
};

export default ThankYouPage;
