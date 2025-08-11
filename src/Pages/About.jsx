// src/pages/AboutUs.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import logo from "../assets/LOGO.png";
import aboutImg from "../assets/about.jpg";

function AboutUs() {
  return (
    <Container className="py-4">
      <Row className="align-items-center">

        <Col md={6}>

          <div className="d-flex align-items-center mb-3 ">
            {/* <img
              src={logo}
              alt="Cozy Cabin Logo"
              style={{ width: "250px", height: "150px", marginRight: "10px" }}
            /> */}
            <h1 style={{ margin: 0 }}>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#3eb489",
                  fontWeight: "600",
                }}
              >
                About
              </span>{" "}
              <span
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#000",
                }}
              >
                US
              </span>
            </h1>
          </div>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.6"}}>
            At Cozy Cabin, we connect people with beautiful homes tailored to
            their needs. Whether you’re looking for a peaceful retreat or a
            vibrant city stay, we make the renting process smooth, secure, and
            rewarding.
          </p>

          {/* Contact info */}
          <div className="d-flex align-items-center mb-3">
            <FaPhoneAlt style={{ marginRight: "8px", color: "#3eb489" }} />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FaEnvelope style={{ marginRight: "8px", color: "#3eb489" }} />
            <span>info@cozycabin.com</span>
          </div>

          <Button variant="" size="lg" style={{color: "white", backgroundColor:"#3eb489"}}>
            Contact Us
          </Button>
        </Col>

        <Col md={6}>
          <img
            src={aboutImg}
            alt="About Cozy Cabin"
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
