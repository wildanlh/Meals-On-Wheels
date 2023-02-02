import { Button, Col, Row } from "react-bootstrap";
import { banner1, banner2, banner4, botwave, logo, topwave, un, unicef, who } from "../assets";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

import './css/HomePage.css';

const HomePage = () => {
    return (
        <Layout>
            <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                    <div className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig" bis_skin_checked="1">
                        <img src={banner1} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-6 animate__animated animate__fadeInLeftBig" bis_skin_checked="1">
                        <h1 className="display-5 fw-bold lh-1 mb-3 ">Meals and Transportation Services. Together We Can Deliver</h1>
                        <div className="hr-purple"></div>
                        <p>Our aspirations and guiding principles are determined by the community we serve, and we are driven by a strong commitment to our volunteers, donors, partners, and community.</p>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 animate__animated animate__fadeInDown" bis_skin_checked="1">
                        <div className="col-lg-6" bis_skin_checked="1">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Who We Are</h1>
                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus. A vivamus natoque auctor aliquet porta nibh taciti. Sapien euismod risus efficitur torquent consequat finibus. Habitant nibh platea porttitor vulputate amet pulvinar. </p>
                            <div className="hr-yellow"></div>
                            <h3 className="fw-bold lh-1 mb-3 purple-text">Our Vision </h3>
                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus</p>
                            <h3 className="fw-bold lh-1 mb-3 purple-text">Our Mission </h3>
                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus</p>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
                            <img src={banner2} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={topwave} alt="wave" className="topwave" />
            <div className="wave-content text-white">
                <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 animate__animated animate__fadeInLeftBig" bis_skin_checked="1">
                        <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
                            <img src={banner4} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" />
                        </div>
                        <div className="col-lg-6" bis_skin_checked="1">
                            <div className="hr-yellow"></div>
                            <h1 className="display-5 fw-bold lh-1 mb-3">Meals on Wheels Commitment</h1>

                            <ol>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 animate__animated animate__fadeInRightBig" bis_skin_checked="1">
                        <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
                            <Row>
                                <Col><img src={unicef} alt="" className="partner" /></Col>
                                <Col><img src={who} alt="" className="partner" /></Col>
                                <Col><img src={un} alt="" className="partner" /></Col>
                            </Row>
                        </div>
                        <div className="col-lg-6" bis_skin_checked="1">
                            <div className="hr-yellow"></div>
                            <h1 className="display-5 fw-bold lh-1 mb-3">Our Partner</h1>

                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus. A vivamus natoque auctor aliquet porta nibh taciti. Sapien euismod risus efficitur torquent consequat finibus. Habitant nibh platea porttitor vulputate amet pulvinar. </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={botwave} alt="wave" className="botwave" />
            <div className="bottom-home">
                <div className="container">
                    <div className="card pb-5 mb-5 text-white animate__animated animate__slideInUp">
                        <img src={logo} alt="logo" className="py-5" />
                        <div className="text-center">
                            <h1 className="text-white">Keep Up With Service News and Events</h1>
                            <h3>Keep in touch with us!</h3>
                            <Link to="/register">
                                <Button
                                    variant="light"
                                    className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;