import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home1Img from "../assets/logo1.png";
import home2Img from "../assets/logo2.png";
import home3Img from "../assets/logo3.png";
import rent8 from "../assets/rent8.jpg";
import living1 from "../assets/living1.jpg";
import room1 from "../assets/room1.jpg";
import extra1 from "../assets/extra1.jpg";
import kitchen1 from "../assets/kitchen1.jpg";
import rent1 from "../assets/rent1.jpg";
import living3 from "../assets/living3.jpg";
import room3 from "../assets/room3.jpg";
import extra3 from "../assets/extra3.jpg";
import kitchen3 from "../assets/kitchen3.jpg";
import rent2 from "../assets/rent2.jpg";
import living2 from "../assets/living2.jpg";
import room2 from "../assets/room2.jpg";
import extra2 from "../assets/extra2.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import rent4 from "../assets/rent6.jpg";
import living4 from "../assets/living4.jpg";
import room4 from "../assets/room4.jpg";
import extra4 from "../assets/extra4.jpg";
import kitchen4 from "../assets/kitchen4.jpg";
import rent7 from "../assets/rent7.jpg";
import living7 from "../assets/living7.jpg";
import room7 from "../assets/room7.jpg";
import extra7 from "../assets/extra7.jpg";
import kitchen7 from "../assets/kitchen7.jpg";
import rent8 from "../assets/rent8.jpg";
import living8 from "../assets/living8.jpg";
import room8 from "../assets/room8.jpg";
import extra8 from "../assets/extra8.jpg";
import kitchen8 from "../assets/kitchen8.jpg";
import video from "../assets/Main video.mp4";
import { getAllPropertiesAPI } from '../Service/allApi';

const properties = [
    {
        id: 1,
        title: "Luxury Apartment in Kochi",
        price: "₹10,000",
        location: "Kochi",
        Bedroom: 2,
        type: "Appartment",
        images: [rent8, living1, room1, extra1, kitchen1]
    },
    {
        id: 2,
        title: "Residential Home in Kakkanad",
        price: "₹10,000",
        location: "Kakkanad",
        Bedroom: 3,
        type: "Appartment",
        images: [rent1, living3, room3, extra3, kitchen3]
    },
    {
        id: 3,
        title: "Residential Appartment in Edappally",
        price: "₹12,000",
        location: "Edappally",
        Bedroom: 2,
        type: "House",
        images: [rent2, living2, room2, extra2, kitchen2]
    },
    {
        id: 4,
        title: "Residential Home in Vytilla",
        price: "₹8,900",
        location: "Vytilla",
        Bedroom: 3,
        type: "House",
        images: [rent4, living4, room4, extra4, kitchen4]
    },
    {
        id: 5,
        title: "Residential Appartment in Vytilla",
        price: "₹6,900",
        location: "Vytilla",
        Bedroom: 3,
        type: "Appartment",
        images: [rent7, living7, room7, extra7, kitchen7]
    },
    {
        id: 6,
        title: " Home in Kakkanad",
        price: "₹4,900",
        location: "Vytilla",
        Bedroom: 3,
        type: "House",
        images: [rent8, living8, room8, extra8, kitchen8]
    }

];

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

    return (
        <>

            <div className="hero position-relative" style={{ overflow: 'hidden' }}>
                <video autoPlay muted loop style={{ top: '50px', height: '650px', width: '100%', objectFit: 'cover' }}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <Container className="mt-5">

                <Row className="g-4">
                    <Col xs={12} md={4}>
                        <Card className="h-100 p-3">
                            <img
                                src={home1Img}
                                alt="About Us"
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px", objectFit: "contain", margin: "0 auto" }}
                            />
                            <Card.Body>
                                <Card.Title>Find your dream home</Card.Title>
                                <Card.Text>Find the perfect place to rent or buy.</Card.Text>
                                <Button as={Link} to="/listings" variant="success">Discover more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="h-100 p-3">
                            <img
                                src={home2Img}
                                alt="About Us"
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px", objectFit: "contain", margin: "0 auto" }}
                            />
                            <Card.Body>
                                <Card.Title>Rent your Apartment</Card.Title>
                                <Card.Text>List your property and get tenants fast.</Card.Text>
                                <Button as={Link} to="/sell" variant="success">Post Your Property</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="h-100 p-3">
                            <img
                                src={home3Img}
                                alt="About Us"
                                className="img-fluid rounded"
                                style={{ width: "150px", height: "150px", objectFit: "contain", margin: "0 auto" }}
                            />
                            <Card.Body>
                                <Card.Title>Our Services</Card.Title>
                                <Card.Text>Home visits, photo shoot, legal help.</Card.Text>
                                <Button as={Link} to="/services" variant="success">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h2 className="mt-5" style={{ color: "#3eb489", fontWeight: "700" }}>Trending property listing in Kerala</h2>
                <p>Properties for rent and sale in key locations</p>

                <Container>
                    <Row className="g-4">
                        {properties.slice(0, 3).map((p) => (
                            <Col xs={12} md={4} key={p.id}>
                                <Card className="h-100">
                                    <Card.Img
                                        variant="top"
                                        src={p.images[0]}
                                        alt={p.title}
                                        style={{ width: "100%", height: "250px", objectFit: "cover" }}
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
