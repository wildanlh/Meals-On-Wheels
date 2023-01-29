import { Button, Col, Row } from "react-bootstrap";
import { banner1, banner2, botwave, logo, person, topwave } from "../assets";
import Layout from "../components/layout/Layout";

import './css/HomePage.css';

const HomePage = () => {
    return (
        <Layout>
            <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                    <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
                        <img src={banner1} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-6" bis_skin_checked="1">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Meals and Transportation Services. Together We Can Deliver</h1>
                        <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus. A vivamus natoque auctor aliquet porta nibh taciti. Sapien euismod risus efficitur torquent consequat finibus. Habitant nibh platea porttitor vulputate amet pulvinar. </p>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                        <div className="col-lg-6" bis_skin_checked="1">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Who We Are</h1>
                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus. A vivamus natoque auctor aliquet porta nibh taciti. Sapien euismod risus efficitur torquent consequat finibus. Habitant nibh platea porttitor vulputate amet pulvinar. </p>
                            <h1 className="display-5 fw-bold lh-1 mb-3">Our Vision </h1>
                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus</p>
                            <h1 className="display-5 fw-bold lh-1 mb-3">Our Mission </h1>
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
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                        <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
                            <img src={banner1} className="d-block mx-lg-auto img-fluid banner rounded" alt="Bootstrap Themes" loading="lazy" />
                        </div>
                        <div className="col-lg-6" bis_skin_checked="1">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Meals on Wheels Commitment</h1>
                            <hr />
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
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                        <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
                            <Row>
                                <Col><img src={person} alt="" /></Col>
                                <Col><img src={person} alt="" /></Col>
                                <Col><img src={person} alt="" /></Col>
                            </Row>
                        </div>
                        <div className="col-lg-6" bis_skin_checked="1">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Our Partner</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus. A vivamus natoque auctor aliquet porta nibh taciti. Sapien euismod risus efficitur torquent consequat finibus. Habitant nibh platea porttitor vulputate amet pulvinar. </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={botwave} alt="wave" className="botwave" />
            <div className="container">
                <div className="card pb-5 mb-5 text-white">
                    <img src={logo} alt="logo" className="py-5" />
                    <div className="text-center">
                        <h1 className="text-white">Keep Up With Service News and Events</h1>
                        <h3>Keep in touch with us!</h3>
                        <Button
                            variant="light"
                            className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;