import React from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';


const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  navigate("/auth");
};

export default function NavbarMain() {
    return (
        <>
            <Navbar bg="light" expand={false} className="shadow-sm">
  <Container>
    <div className="d-flex align-items-center gap-2">
      {/* Hamburger */}
      <Navbar.Toggle aria-controls="offcanvasNavbar" />

      {/* Logo */}
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src={logo}
          alt="Cozy Cabin Logo"
          style={{ height: "100px", marginRight: "10px", marginLeft:"350px" }}
          
        />
        <h1 style={{ margin: 0 }}>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#3eb489",
              fontWeight: "600",
            }}
          >
            Cozy
          </span>{" "}
          <span
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#000",
            }}
          >
            Cabins
          </span>
        </h1>
      </Navbar.Brand>
    </div>

    {/* Offcanvas */}
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
          <Nav.Link>
            <Button variant="" as={Link} to="/auth" style={{ backgroundColor: '#3eb489', color: 'white', border: 'none' }}>
              Login / Signup
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button variant="outline-success" as={Link} to="/auth">
              Log out
            </Button>
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

        </>
    );
}
