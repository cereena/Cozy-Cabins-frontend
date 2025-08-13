import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Image, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPropertyByIdAPI } from "../Service/allApi";
import { FaCouch, FaUtensils, FaTree, FaBed, FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await getPropertyByIdAPI(id);
      if (res.status === 200) {
        setProperty(res.data);
        setMainImage(res.data.images[0]);
      }
    };
    fetchProperty();
  }, [id]);

  const handleSend = (e) => {
    e.preventDefault();

    
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("⚠ Please fill all the fields before sending!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    
    toast.success("✅ Message sent to owner!", {
      position: "top-center",
      autoClose: 2500,
    });

   
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  if (!property) return <p>Loading property details...</p>;

  return (
    <div>
      
      <ToastContainer />

      <h3 className="mb-3 mt-2 mx-4" style={{ color: "#3eb489", fontWeight: "600" }}>
        {property.title}
      </h3>

      <Row className="mb-4 g-1 mx-3">
        <Col md={6}>
          <div style={{ height: "390px" }}>
            <Image
              src={mainImage}
              alt="Main Property"
              className="w-100 h-100 mt-1 rounded"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Col>

        <Col md={6}>
          <Row className="g-2">
            {property.images.slice(1, 5).map((img, index) => (
              <Col xs={6} key={index}>
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="rounded w-100"
                  style={{
                    height: "195px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border: img === mainImage ? "2px solid green" : "2px solid transparent",
                  }}
                  onClick={() => setMainImage(img)}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={7}>
          <h4 className="mx-3" style={{ color: "#3eb489" }}>Property Highlights</h4>
          <ListGroup variant="flush">
            <ListGroup.Item><FaCouch className="me-2" /> Spacious Design: An open floor plan with ample living space.</ListGroup.Item>
            <ListGroup.Item><FaUtensils className="me-2" /> Modern Kitchen: Updated appliances and storage.</ListGroup.Item>
            <ListGroup.Item><FaTree className="me-2" /> Private Outdoor Space: Yard or patio for outdoor enjoyment.</ListGroup.Item>
            <ListGroup.Item><FaBed className="me-2" /> Comfortable Bedrooms: Well-sized rooms with natural light.</ListGroup.Item>
            <ListGroup.Item><FaMapMarkerAlt className="me-2" /> Great Location: Near schools, parks, and amenities.</ListGroup.Item>
            <ListGroup.Item><FaCar className="me-2" /> Convenient Parking: Dedicated space for vehicles.</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={5}>
          <div className="p-3 border rounded mb-3">
            <h5>
              <span style={{ fontFamily: "'Poppins', sans-serif", color: "#3eb489", fontWeight: "600" }}>
                Contact Owner
              </span>
            </h5>
            <Form onSubmit={handleSend}>
              <Form.Control
                className="mb-2"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Form.Control
                className="mb-2"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Form.Control
                className="mb-2"
                placeholder="Phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Form.Control
                as="textarea"
                rows={3}
                className="mb-2"
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="d-flex gap-2">
                <Button type="submit" variant="success">Send a message</Button>
                <Button variant="outline-success" href={`tel:${property.phone}`}>
                  Call
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetail;
