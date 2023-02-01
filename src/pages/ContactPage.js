import Iframe from "react-iframe";
import { herobg2 } from "../assets";
import Layout from "../components/layout/Layout";

import './css/ContactPage.css';

const ContactPage = () => {
    return (
        <Layout>
            <div className="hero animate__animated animate__fadeIn">
                <img src={herobg2} alt="hero" />
                <h1>Contact Us</h1>
            </div>
            <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                    <div className="col-10 col-sm-8 col-lg-6 animate__animated animate__bounceInRight" bis_skin_checked="1">
                        <div className="card">
                            <form className="p-3 p-md-5 rounded-3">
                                <h3 className="contact-title py-3 text-white">Send a Message</h3>
                                <div className="form-floating mb-3" bis_skin_checked="1">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3" bis_skin_checked="1">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                                <hr className="my-4" />
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 animate__animated animate__bounceInLeft" bis_skin_checked="1">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Get In Touch</h1>
                    </div>
                </div>
            </div>
            <div className="maps">
                <div className="container">
                    <div className="top-maps text-center">
                        <h1 className="fw-bold py-3 animate__animated animate__slideInDown">Maps</h1>
                    </div>
                    <div className="gmaps text-center animate__animated animate__slideInUp">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d103.70416557452107!3d1.3143393776514185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sid!4v1675044453505!5m2!1sen!2sid"
                            width="800px"
                            height="450px"
                            allowFullScreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="bot-maps text-center mb-5">
                        <h1 className="fw-bold py-3 text-white">Blank</h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ContactPage;