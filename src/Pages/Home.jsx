import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home1Img from "../assets/logo1.png";
import home2Img from "../assets/logo2.png";
import home3Img from "../assets/logo3.png";
import rent3 from "../assets/rent1.png";
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
import rent4 from "../assets/rent4.jpg";
import living4 from "../assets/living4.jpg";
import room4 from "../assets/room4.jpg";
import extra4 from "../assets/extra4.jpg";
import kitchen4 from "../assets/kitchen4.jpg";
import video from "../assets/Main video.mp4";
import { getAllPropertiesAPI } from '../Service/allApi';

const propertiesData = [
    { id: 1, title: "Luxury Apartment in Kochi", price: "₹10,000", location: "Kochi", Bedroom: 2, type: "Appartment", images: [rent3, living1, room1, extra1, kitchen1] },
    { id: 2, title: "Residential Home in Kakkanad", price: "₹10,000", location: "Kakkanad", Bedroom: 3, type: "Appartment", images: [rent1, living3, room3, extra3, kitchen3] },
    { id: 3, title: "Residential Appartment in Edappally", price: "₹12,000", location: "Edappally", Bedroom: 2, type: "House", images: [rent2, living2, room2, extra2, kitchen2] },
    { id: 4, title: "Residential Home in Vytilla", price: "₹8,900", location: "Vytilla", Bedroom: 3, type: "House", images: [rent4, living4, room4, extra4, kitchen4] }
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
                // fallback to local data
                setProperties(propertiesData);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {/* Hero Video */}
            <div className="hero position-relative w-100" style={{ overflow: 'hidden' }}>
                <video autoPlay muted loop className="w-100" style={{ height: '60vh', objectFit: 'cover' }}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <Container className="mt-5">
                {/* Three service cards */}
                <Row className="g-4 text-center">
                    {[{img: home1Img, title:"Find your dream home", text:"Find the perfect place to rent or buy.", link:"/listings", btnText:"Discover more"},
                      {img: home2Img, title:"Rent your Apartment", text:"List your property and get tenants fast.", link:"/sell", btnText:"Post Your Property"},
                      {img: home3Img, title:"Our Services", text:"Home visits, photo shoot, legal help.", link:"/services", btnText:"Learn More"}].map((card, idx) => (
                        <Col xs={12} md={4} key={idx}>
                            <Card className="h-100 p-3 shadow-sm">
                                <img src={card.img} alt={card.title} className="img-fluid rounded mx-auto d-block mb-3"
                                     style={{ width: "120px", height: "120px", objectFit: "contain" }} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                    <Button as={Link} to={card.link} variant="success">{card.btnText}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Trending properties */}
                <h2 className="mt-5 text-center text-md-start" style={{ color: "#3eb489", fontWeight: "700" }}>
                    Trending property listing in Kerala
                </h2>
                <p className="text-center text-md-start">Properties for rent and sale in key locations</p>

                <Row className="g-4">
                    {properties.slice(0, 4).map((p) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={p.id}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={p.images[0]}
                                    alt={p.title}
                                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>{p.location} — {p.price}</Card.Text>
                                    <Button as={Link} to={`/property/${p.id}`} variant="success" className="w-100">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-4 mb-4">
                    <Button variant='outline-success' as={Link} to="/listings">See more houses</Button>
                </div>
            </Container>
        </>
    );
}
