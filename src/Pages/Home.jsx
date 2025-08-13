import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home1Img from "../assets/logo1.png";
import home2Img from "../assets/logo2.png";
import home3Img from "../assets/logo3.png";
import video from "../assets/Main video.mp4";
import placeholderImg from "../assets/placeholder.jpg"; // Add a placeholder in assets
import { getAllPropertiesAPI } from '../Service/allApi';

// Your deployed backend URL
const BASE_URL = "https://cozy-cabins-2.onrender.com/";

export default function Home() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllPropertiesAPI();
                if (result.status >= 200 && result.status < 300) {
                    setProperties(result.data);
                } else {
                    console.error("Failed to load properties:", result);
                }
            } catch (err) {
                console.error("Error fetching properties:", err);
            }
        };
        fetchData();
    }, []);

    // Helper to get full image URL
    const getImageUrl = (imgPath) => {
        if (!imgPath) return placeholderImg;
        if (imgPath.startsWith("http")) return imgPath;
        return `${BASE_URL}/${imgPath.replace(/^\/+/, '')}`;
    };

    return (
        <>
            {/* Hero Video */}
            <div className="hero position-relative" style={{ overflow: 'hidden' }}>
                <video autoPlay muted loop style={{ top: '50px', height: '650px', width: '100%', objectFit: 'cover' }}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <Container className="mt-5">
                {/* Three service cards */}
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 p-3">
                            <img src={home1Img} alt="About Us" className="img-fluid rounded"
                                style={{ width: "150px", height: "150px", objectFit: "contain", margin: "0 auto" }} />
                            <Card.Body>
                                <Card.Title>Find your dream home</Card.Title>
                                <Card.Text>Find the perfect place to rent or buy.</Card.Text>
                                <Button as={Link} to="/listings" variant="success">Discover more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 p-3">
                            <img src={home2Img} alt="About Us" className="img-fluid rounded"
                                style={{ width: "150px", height: "150px", objectFit: "contain", margin: "0 auto" }} />
                            <Card.Body>
                                <Card.Title>Rent your Apartment</Card.Title>
                                <Card.Text>List your property and get tenants fast.</Card.Text>
                                <Button as={Link} to="/sell" variant="success">Post Your Property</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 p-3">
                            <img src={home3Img} alt="About Us" className="img-fluid rounded"
                                style={{ width: "150px", height: "150px", objectFit: "contain", margin: "0 auto" }} />
                            <Card.Body>
                                <Card.Title>Our Services</Card.Title>
                                <Card.Text>Home visits, photo shoot, legal help.</Card.Text>
                                <Button as={Link} to="/services" variant="success">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Trending properties */}
                <h2 className="mt-5" style={{ color: "#3eb489", fontWeight: "700" }}>Trending property listing in Kerala</h2>
                <p>Properties for rent and sale in key locations</p>

                <Container>
                    <Row className="g-4">
                        {properties.slice(0, 3).map((p) => (
                            <Col md={4} key={p.id}>
                                <Card className="h-100">
                                    <Card.Img
                                        variant="top"
                                        src={getImageUrl(p.images?.[0])}
                                        alt={p.title}
                                        style={{ width: "100%", height: "250px", objectFit: "cover" }}
                                        onError={(e) => e.target.src = placeholderImg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{p.title}</Card.Title>
                                        <Card.Text>{p.location} — {p.price}</Card.Text>
                                        <Button as={Link} to={`/property/${p.id}`} variant="success">
                                            View Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <div className="text-center mt-4 mb-4">
                    <Button variant='outline-success' as={Link} to="/listings">See more houses</Button>
                </div>
            </Container>
        </>
    );
}
