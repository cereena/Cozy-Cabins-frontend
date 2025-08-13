import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaCheckCircle } from "react-icons/fa";

export default function SellProperty() {
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    files: [],
  });
  const [submittedData, setSubmittedData] = useState(null);

  const commissionRate = 0.05;
  const numeric = parseFloat(price || 0);
  const afterPrice = numeric
    ? (numeric - numeric * commissionRate).toFixed(2)
    : "";

  const propertyOptions = [
    { label: "Residential Apartment", icon: "🏢" },
    { label: "Residential House/Villa", icon: "🏠" },
    { label: "Residential Land", icon: "🌳" },
    { label: "Commercial Office", icon: "🏪" },
    { label: "Commercial Building", icon: "🏬" },
    { label: "Industrial Building", icon: "🏭" },
  ];

  const allFieldsFilled =
    propertyType &&
    formData.name &&
    formData.email &&
    formData.location &&
    price &&
    formData.files.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to post your property.",
        confirmButtonColor: "#3eb489"
      }).then(() => navigate("/auth"));
      return;
    }

    
    if (!allFieldsFilled) return;

    // 3️⃣ Show success toast
    Swal.fire({
      icon: "success",
      title: "Your post has been submitted for review",
      text: "We will notify you once it's approved.",
      showConfirmButton: false,
      timer: 2000,
    });

    
    setSubmittedData({
      ...formData,
      propertyType,
      price,
      afterPrice,
    });
  };


  const handleDelete = () => {
    setSubmittedData(null);
    setPropertyType("");
    setFormData({
      name: "",
      email: "",
      location: "",
      files: [],
    });
    setPrice("");
  };

  if (submittedData) {
    return (
      <Container className="mt-4 mb-3">
        <h2 style={{ color: "#3eb489" }}>Preview Your Post</h2>
        <Card className="p-3 mb-3">
          <p><strong>Type:</strong> {submittedData.propertyType}</p>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Location:</strong> {submittedData.location}</p>
          <p><strong>Price:</strong> ₹{submittedData.price}</p>
          <p><strong>After Commission:</strong> ₹{submittedData.afterPrice}</p>

       
          {submittedData.files && submittedData.files.length > 0 && (
            <div className="mt-3">
              <strong>Uploaded Images:</strong>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                {submittedData.files.map((file, idx) => (
                  <img
                    key={idx}
                    src={URL.createObjectURL(file)}
                    alt={`preview-${idx}`}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </Card>

        <Button
          variant="warning"
          className="me-2"
          onClick={() => setSubmittedData(null)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Container>
    );
  }


  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col md={4}>
          <Card className="mb-4 p-3 mt-5">
            <h5>Benefits of Photos & Videos</h5>
            <p>
              A picture can speak a thousand words, so upload a picture which
              will describe your property way better than words.
            </p>
          </Card>
        </Col>

        <Col md={8}>
          <h2 style={{ color: "#3eb489", fontWeight: "700" }}>
            Rent Your Property
          </h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
              {propertyOptions.map((opt, i) => (
                <Col xs={6} md={4} key={i} className="mb-3">
                  <Card
                    className={`p-3 text-center ${propertyType === opt.label ? "border-success bg-light" : "border"
                      }`}
                    style={{ cursor: "pointer", position: "relative" }}
                    onClick={() => setPropertyType(opt.label)}
                  >
                    <div style={{ fontSize: "1.5rem" }}>{opt.icon}</div>
                    <div>{opt.label}</div>
                    {propertyType === opt.label && (
                      <FaCheckCircle
                        color="green"
                        size={20}
                        style={{ position: "absolute", top: 10, right: 10 }}
                      />
                    )}
                  </Card>
                </Col>
              ))}
            </Row>

            <Row>
              <Col md={6}>
                <Form.Control
                  placeholder="Name"
                  className="mb-3"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Form.Control
                  placeholder="Email"
                  className="mb-3"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Form.Control
                  placeholder="Location"
                  className="mb-3"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
                <Form.Control
                  placeholder="Your price"
                  className="mb-3"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Form.Control
                  type="file"
                  className="mb-3"
                  multiple
                  onChange={(e) =>
                    setFormData({ ...formData, files: Array.from(e.target.files) })
                  }
                />
              </Col>

              <Col md={6}>
                <div className="p-3 border rounded">
                  <p><strong>Original price:</strong> ₹{price || "0"}</p>
                  <p>
                    <strong>Commission (5%):</strong> ₹
                    {numeric ? (numeric * commissionRate).toFixed(2) : "0.00"}
                  </p>
                  <p><strong>After price:</strong> ₹{afterPrice || "0.00"}</p>
                </div>
              </Col>
            </Row>

            <div className="d-flex gap-2 mt-3">
              <Button
                type="submit"
                style={{ backgroundColor: "#3eb489" }}
                disabled={!allFieldsFilled}
              >
                Post Now!
              </Button>
              <Button variant="secondary" type="button">
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
