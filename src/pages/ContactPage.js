import { herobg2 } from "../assets";
import Layout from "../components/layout/Layout";

import './css/ContactPage.css';

const ContactPage = () => {
    return (
        <Layout>
            <div className="hero">
                <img src={herobg2} alt="hero" />
                <h1>Contact Us</h1>
            </div>
            <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                    <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked="1">
                        <div className="card">
                            <form className="p-3 p-md-5 rounded-3">
                                <h3 className="contact-title mx-3 py-3 text-white">Send a Message</h3>
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
                    <div className="col-lg-6" bis_skin_checked="1">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Get In Touch</h1>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ContactPage;