
import { Link } from 'react-router-dom';
import { fb, ig, tw, yt } from '../../assets';
import './Footer.css';

const Footer = () => {
    const link = 'test';

    return (
        <div>
            <div className="social-media d-flex flex-wrap justify-content-between align-items-center py-3 mb-4">
                <div className="col-md-4 d-flex align-items-center mx-3">
                    <h3 className='mx-3 text-white'>Get connected with us on social networks:</h3>
                </div>

                <ul className="nav justify-content-end list-unstyled d-flex mx-3">
                    <li><a href={link}><img src={fb} alt="facebook" /></a></li>
                    <li><a href={link}><img src={ig} alt="facebook" /></a></li>
                    <li><a href={link}><img src={tw} alt="facebook" /></a></li>
                    <li><a href={link}><img src={yt} alt="facebook" /></a></li>
                </ul>
            </div>


            <div className="footer">
                <div className="container" bis_skin_checked="1">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 text-white">
                        <div className="col mb-3" bis_skin_checked="1">
                            <h3>Meals On Wheels</h3>
                            <p>Lorem ipsum dolor sit amet ex letius nibh sit faucibus. A vivamus natoque auctor aliquet porta nibh taciti. Sapien euismod risus efficitur torquent consequat finibus. Habitant nibh platea porttitor vulputate amet pulvinar. </p>
                        </div>

                        <div className="col mb-3" bis_skin_checked="1">

                        </div>

                        <div className="col mb-3" bis_skin_checked="1">
                            <h5>Partners</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Partner#</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Partner#</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Partner#</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Partner#</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Partner#</a></li>
                            </ul>
                        </div>

                        <div className="col mb-3" bis_skin_checked="1">
                            <h5>Navigation</h5>
                            <ul className="nav flex-column">
                                <Link to="/terms"><li className="nav-item mb-2 nav-link p-0 text-white">Privacy Policy</li></Link>
                                <Link to="/about"><li className="nav-item mb-2 nav-link p-0 text-white">About Us</li></Link>
                                <Link to="/donate"><li className="nav-item mb-2 nav-link p-0 text-white">Donate</li></Link>
                                <Link to="/partnership"><li className="nav-item mb-2 nav-link p-0 text-white">Partnership</li></Link>
                            </ul>
                        </div>

                        <div className="col mb-3" bis_skin_checked="1">
                            <h5>Contact</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Home</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Features</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">Pricing</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">FAQs</a></li>
                                <li className="nav-item mb-2"><a href={link} className="nav-link p-0 text-white">About</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div >
        </div >

    );
}

export default Footer;