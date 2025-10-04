import React from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import './NavbarMain.css';

export default function NavbarMain() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <>
      <Navbar bg="light" expand={false} className="shadow-sm">
        <Container className="d-flex justify-content-between align-items-center">

          
          <div className="d-flex align-items-center gap-2">
            <Navbar.Toggle aria-controls="offcanvasNavbar" />

            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img
                src={logo}
                alt="Cozy Cabin Logo"
                className="brand-logo"
              />
              <h1 className="brand-title mb-0">
                <span className="brand-cozy">Cozy</span>{" "}
                <span className="brand-cabins">Cabins</span>
              </h1>
            </Navbar.Brand>
          </div>

          
          <Navbar.Offcanvas id="offcanvasNavbar" placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/services">Our Services</Nav.Link>
                <Nav.Link as={Link} to="/listings">House for Rent</Nav.Link>
                <Nav.Link as={Link} to="/sell">Rent Your House</Nav.Link>

                {/* Login / Signup & Logout Buttons inside hamburger */}
                <div className="mt-3 d-flex flex-column gap-2">
                  <Button
                    as={Link}
                    to="/auth"
                    style={{ backgroundColor: '#3eb489', color: 'white', border: 'none' }}
                  >
                    Login / Signup
                  </Button>

                  <Button
                    variant="outline-success"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
