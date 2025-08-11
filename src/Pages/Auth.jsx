import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { signupAPI, loginAPI } from "../Service/allApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (isSignup && !form.name.trim()) {
      return Swal.fire("Error", "Please enter your name", "error");
    }
    if (!form.email.trim() || !form.password.trim()) {
      return Swal.fire("Error", "Please fill in all fields", "error");
    }
    if (form.password.length < 6) {
      return Swal.fire("Error", "Password must be at least 6 characters", "error");
    }

    try {
      if (isSignup) {
        const { email, password, name } = form;
        const res = await signupAPI({ email, password, name });
        if (res.status === 201 || res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Account Created!",
            text: "You can now login to your account.",
            confirmButtonColor: "#3eb489"
          }).then(() => {
            setIsSignup(false);
            setForm({ name: "", email: "", password: "" });
          });
        }
      } else {
        const res = await loginAPI(form);
        if (res.status === 200) {
          // Save user info and token in localStorage
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.accessToken);

          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "Welcome back!",
            confirmButtonColor: "#3eb489"
          }).then(() => {
            navigate("/"); // Redirect to home
          });
        }
      }

    } catch (error) {
      Swal.fire("Error", error.response?.data || "Something went wrong", "error");
    }
  };


  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-3" style={{ color: "#3eb489" }}>
              {isSignup ? "Create an Account" : "Login "}
            </h3>
            <Form onSubmit={handleSubmit}>
              {isSignup && (
                <Form.Group className="mb-3">
                  <Form.Label><FaUser className="me-2" /> Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label><FaEnvelope className="me-2" /> Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaLock className="me-2" /> Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className="w-100" style={{ backgroundColor: "#3eb489", border: "none" }}>
                {isSignup ? "Sign Up" : "Login"}
              </Button>
            </Form>

            <div className="text-center mt-3">
              <small>
                {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                <Button
                  variant="link"
                  className="p-0"
                  style={{ color: "#3eb489" }}
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup ? "Login" : "Sign Up"}
                </Button>
              </small>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
