import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets";
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar className="Navbar" expand="lg">
                <Container>
                    <img src={logo} alt="" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-md-auto">
                            <NavLink
                                activeclassname="active"
                                className="nav-link fw-bold text-light me-3"
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link fw-bold text-light me-3"
                                to="/donate"
                            >
                                Donate
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link fw-bold text-light me-3"
                                to="/partnership"
                            >
                                Partnership
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link fw-bold text-light"
                                to="/about"
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link fw-bold text-light"
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </Nav>
                        <Nav>
                            <Link to="/login">
                                <Button
                                    variant="outline-light"
                                    className="me-0 me-md-3 mb-md-0 mb-3 text-light fw-bold btn-login"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button
                                    variant="light"
                                    className="me-0 me-md-3 mb-md-0 mb-3 bg-light fw-bold btn-register">
                                    Register
                                </Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse >
                </Container >
            </Navbar >
            <div className="nav-member">
                <nav className="py-2">
                    <div className="d-flex justify-content-center">
                        <ul className="nav">
                            <Link to="/daily-meals"><li className="text-white px-3 btn-member fw-bold text-decoration-none">View Daily Meals</li></Link>
                            <Link to="/feedback"><li className="text-white px-3 btn-member fw-bold text-decoration-none">Feedbcak/Evaluate</li></Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;