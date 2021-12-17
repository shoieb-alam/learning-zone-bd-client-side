import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout, admin } = useAuth();

    return (
        <div>

            {/* responsive navbar */}
            <Navbar collapseOnSelect expand="lg" variant="light" className="bg-white" fixed="top">

                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <span className="brand fs-2 fw-bold"> LEARNING ZONE </span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto fw-bold">
                            <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#featured">Featured</Nav.Link>
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                            {/* showing dashboard in the navbar if the user logged in  */}
                            {user?.email ?
                                <>
                                    <NavDropdown title="Dashboard" menuVariant="success" className="btn-outline-success rounded-pill px-1 mx-2" id="basic-nav-dropdown">
                                        {!admin &&
                                            <div>

                                                <NavDropdown.Item as={Link} to="/reviewAdding">Give a Review</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/payment">Pay</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/myCourses">My Courses</NavDropdown.Item>
                                            </div>
                                        }
                                        {admin &&
                                            <div>

                                                <NavDropdown.Item as={Link} to="/addCourse">Add Course</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/manageCourses">Manage Courses</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/manageAllBookings">Manage All Bookings</NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/makeAdmin">Make Admin</NavDropdown.Item>
                                            </div>
                                        }

                                        <Nav.Link onClick={logout} className="btn-success btn-outline-danger text-white rounded-pill ps-4">Logout {user?.displayName}</Nav.Link>
                                    </NavDropdown>
                                </>
                                :
                                <Nav.Link as={Link} to="/login" className="login-btn px-3 ms-3">Login</Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;