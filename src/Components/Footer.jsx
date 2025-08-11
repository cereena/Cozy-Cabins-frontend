import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "black", color: "white" }} className="py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#3eb489" }}>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Careers</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#3eb489" }}>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Blog</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Help Center</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>FAQs</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#3eb489" }}>Get in Touch</h5>
            <p><FaEnvelope className="me-2" /> info@realestatepro.com</p>
            <p><FaPhone className="me-2" /> +91 98765 43210</p>
            <div className="d-flex mt-3">
              <a href="#" className="me-3" style={{ color: "#3eb489", fontSize: "1.2rem" }}>
                <FaFacebookF />
              </a>
              <a href="#" style={{ color: "#3eb489", fontSize: "1.2rem" }}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 border-top" style={{ borderColor: "#3eb489" }}>
          &copy; {new Date().getFullYear()} Cozy Cabins. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
