import { useContext, useEffect, useState } from "react"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { defaultprofile, logo, person, staff1 } from "../../assets"
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
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='w-25'>
              <img src={logo} alt='' />
            </Nav>

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
                <Nav className='w-25 text-white justify-content-end'>
                  {/* <Button
                    variant="outline-light"
                    className="me-0 me-md-3 mb-md-0 mb-3 text-light fw-bold btn-login"
                  >
                    {currentUser.name}
                  </Button>

                  <Button
                    variant="light"
                    className="me-0 me-md-3 mb-md-0 mb-3 bg-light fw-bold btn-register"
                    onClick={handleLogout}
                  >
                    logout
                  </Button> */}
                  <div className='menu-user text-white'>
                    <img
                      src={
                        currentUser.imageUrl
                          ? currentUser.imageUrl
                          : defaultprofile
                      }
                      alt='profile_picture'
                      className='rounded-circle me-2 text-white profile-pic'
                      style={{ width: "45px", height: "45px" }}
                    />
                    <NavDropdown
                      title={currentUser.name}
                      className='fw-bold'
                      id='navName'
                    >
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>
                        <Button
                          variant='danger'
                          className='nav-logout btn-sm w-100'
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </Nav>
              )
            ) : (
              <Nav className='w-25 justify-content-end'>
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

      {/* NAVBAR AFTER LOGIN */}
      {/* MEMBER ADDITIONAL NAVBAR */}
      {currentUser.role === "ROLE_MEMBER" && (
        <div className='nav-member'>
          <div className='second-nav'>
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
                      Feedback/Evaluate
                    </li>
                  </Link>
                  <Link
                    to='/member/order/history'
                    className='text-decoration-none'
                  >
                    <li className='text-white px-3 btn-member fw-bold'>
                      Order History
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* DRIVER ADDITIONAL NAVBAR */}
      {currentUser.role === "ROLE_RIDER" && (
        <div className='nav-member'>
          <div className='second-nav'>
            <nav className='py-2'>
              <div className='d-flex justify-content-center'>
                <ul className='nav'>
                  <Link to='/driver' className='text-decoration-none'>
                    <li className='text-white px-3 btn-member fw-bold'>
                      Dashboard
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* CAREGIVER ADDITIONAL NAVBAR */}
      {currentUser.role === "ROLE_CAREGIVER" && (
        <div className='nav-member'>
          <div className='second-nav'>
            <nav className='py-2'>
              <div className='d-flex justify-content-center'>
                <ul className='nav'>
                  <Link to='/caregiver' className='text-decoration-none'>
                    <li className='text-white px-3 btn-member fw-bold'>
                      Dashboard
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* PARTNER ADDITIONAL NAVBAR */}
      {currentUser.role === "ROLE_PARTNER" && (
        <div className='nav-member'>
          <div className='second-nav'>
            <nav className='py-2'>
              <div className='d-flex justify-content-center'>
                <ul className='nav'>
                  <Link to='/partner' className='text-decoration-none'>
                    <li className='text-white px-3 btn-member fw-bold'>
                      Dashboard
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* ADMIN ADDITIONAL NAVBAR */}
      {currentUser.role === "ROLE_ADMIN" && (
        <div className='nav-member'>
          <div className='second-nav'>
            <nav className='py-2'>
              <div className='d-flex justify-content-center'>
                <ul className='nav'>
                  <Link to='/admin' className='text-decoration-none'>
                    <li className='text-white px-3 btn-member fw-bold'>
                      Dashboard
                    </li>
                  </Link>
                  <Link
                    to='/admin/manage-users'
                    className='text-decoration-none'
                  >
                    <li className='text-white px-3 btn-member fw-bold'>
                      Manage Users
                    </li>
                  </Link>
                  <Link
                    to='/admin/manage-partner'
                    className='text-decoration-none'
                  >
                    <li className='text-white px-3 btn-member fw-bold'>
                      Manage Partner
                    </li>
                  </Link>
                  <Link
                    to='/admin/meal-history'
                    className='text-decoration-none'
                  >
                    <li className='text-white px-3 btn-member fw-bold'>
                      Meal History
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* <div className="nav-caregiver">
        <div className="second-nav">
          <nav className="py-2">
            <div className="d-flex justify-content-center">
              <ul className="nav">
                <Link to="/" className="text-decoration-none">
                  <li className="text-white px-3 btn-member fw-bold">
                    Add Meal
                  </li>
                </Link>
                <Link to="/" className="text-decoration-none">
                  <li className="text-white px-3 btn-member fw-bold">Task</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

      <div className="nav-admin">
        <div className="second-nav">
          <nav className="py-2">
            <div className="d-flex justify-content-center">
              <ul className="nav">
                <Link to="/admin/manage-users" className="text-decoration-none">
                  <li className="text-white px-3 btn-member fw-bold">
                    Manage Users
                  </li>
                </Link>
                <Link
                  to="/admin/donation-history"
                  className="text-decoration-none"
                >
                  <li className="text-white px-3 btn-member fw-bold">
                    Donation History
                  </li>
                </Link>
                <Link
                  to="/admin/manage-partner"
                  className="text-decoration-none"
                >
                  <li className="text-white px-3 btn-member fw-bold">
                    Partnership Setting
                  </li>
                </Link>
                <Link to="/" className="text-decoration-none">
                  <li className="text-white px-3 btn-member fw-bold">
                    Todays Feedback
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div> */}
    </div>
  )
}

export default NavBar
