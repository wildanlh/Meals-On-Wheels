import { useContext, useEffect, useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { logo } from "../../assets"
import AuthContext from "../../context/auth-context"
import { user_type } from "../../context/context-type"
import "./NavBar.css"

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/login")
  }

  return (
    <div>
      <Navbar className='Navbar' expand='lg'>
        <Container>
          <img src={logo} alt='' />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-md-auto'>
              <NavLink
                activeclassname='active'
                className='nav-link fw-bold text-light me-3'
                to='/'
              >
                Home
              </NavLink>
              <NavLink
                activeclassname='active'
                className='nav-link fw-bold text-light me-3'
                to='/donate'
              >
                Donate
              </NavLink>
              <NavLink
                activeclassname='active'
                className='nav-link fw-bold text-light me-3'
                to='/partnership'
              >
                Partnership
              </NavLink>
              <NavLink
                activeclassname='active'
                className='nav-link fw-bold text-light'
                to='/about'
              >
                About Us
              </NavLink>
              <NavLink
                activeclassname='active'
                className='nav-link fw-bold text-light'
                to='/contact'
              >
                Contact
              </NavLink>
            </Nav>
            {currentUser.name ? (
              currentUser.name && (
                <Nav>
                  <Button
                    variant='outline-light'
                    className='me-0 me-md-3 mb-md-0 mb-3 text-light fw-bold btn-login'
                  >
                    {currentUser.name}
                  </Button>

                  <Button
                    variant='light'
                    className='me-0 me-md-3 mb-md-0 mb-3 bg-light fw-bold btn-register'
                    onClick={handleLogout}
                  >
                    logout
                  </Button>
                </Nav>
              )
            ) : (
              <Nav>
                <Link to='/login'>
                  <Button
                    variant='outline-light'
                    className='me-0 me-md-3 mb-md-0 mb-3 text-light fw-bold btn-login'
                  >
                    Login
                  </Button>
                </Link>
                <Link to='/register'>
                  <Button
                    variant='light'
                    className='me-0 me-md-3 mb-md-0 mb-3 bg-light fw-bold btn-register'
                  >
                    Register
                  </Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {currentUser.role === "ROLE_MEMBER" && (
        <div className='nav-member'>
          <nav className='py-2'>
            <div className='d-flex justify-content-center'>
              <ul className='nav'>
                <Link to='/home' className='text-decoration-none'>
                  <li className='text-white px-3 btn-member fw-bold'>
                    View Daily Meals
                  </li>
                </Link>
                <Link to='/feedback' className='text-decoration-none'>
                  <li className='text-white px-3 btn-member fw-bold'>
                    Feedbcak/Evaluate
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export default NavBar
