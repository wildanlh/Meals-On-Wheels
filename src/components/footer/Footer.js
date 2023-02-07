import { Link } from "react-router-dom";
import { fb, ig, tw, yt } from "../../assets";
import "./Footer.css";

const Footer = () => {
  const link = "#";

  return (
    <footer>
      <div>
        <div className="social-media d-flex flex-wrap justify-content-between align-items-center py-3 mb-4">
          <div className="col-md-4 d-flex align-items-center mx-3">
            <h3 className="mx-3 text-white">
              Get connected with us on social networks:
            </h3>
          </div>

          <ul className="nav justify-content-end list-unstyled d-flex mx-3">
            <li>
              <a href="#">
                <img src={fb} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ig} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={tw} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={yt} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer">
          <div className="container" bis_skin_checked="1">
            <footer className="row py-5 text-white">
              <div className="col-6 me-5" bis_skin_checked="1">
                <h3>Meals On Wheels</h3>
                <p>
                  Meals on Wheels is a community-based organization dedicated to
                  improving the health and well-being of seniors, individuals
                  with disabilities, and others in need by providing nutritious
                  meals, companionship, and a network of support.
                </p>
              </div>

              {/* <div className="col mb-3" bis_skin_checked="1"></div> */}

              <div className="col mb-3" bis_skin_checked="1">
                <h5>Partners</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      Unicef
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      World Health Organization
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      United Nations
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col mb-3" bis_skin_checked="1">
                <h5>Navigation</h5>
                <ul className="nav flex-column">
                  <Link to="/terms" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Privacy Policy
                    </li>
                  </Link>
                  <Link to="/about" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      About Us
                    </li>
                  </Link>
                  <Link to="/donate" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Donate
                    </li>
                  </Link>
                  <Link to="/partnership" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Partnership
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="col mb-3" bis_skin_checked="1">
                <h5>Contact</h5>
                <ul className="nav flex-column">
                  <Link to="/contact" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
