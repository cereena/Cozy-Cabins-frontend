import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropertyCard from '../Components/PropertyCard';
import FilterSidebar from '../Components/FilterSidebar';
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


export default function Listings() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [rentFilter, setRentFilter] = useState('');

  const [propsList, setPropsList] = useState(properties);
  const [filtered, setFiltered] = useState(properties);
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

  const handleSearch = () => {
    let result = propsList;

    if (location) {
      result = result.filter(p => p.location.toLowerCase() === location.toLowerCase());
    }
    if (type) {
      result = result.filter(p => p.type.toLowerCase() === type.toLowerCase());
    }
    if (bedrooms) {
      result = result.filter(p => p.Bedroom === parseInt(bedrooms));
    }
    if (rentFilter) {
      const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^\d]/g, ""), 10);
      if (rentFilter === "below5k") {
        result = result.filter(p => parsePrice(p.price) < 5000);
      } else if (rentFilter === "below10k") {
        result = result.filter(p => parsePrice(p.price) < 10000);
      } else if (rentFilter === "below15k") {
        result = result.filter(p => parsePrice(p.price) < 15000);
      }
    }

    setFiltered(result);
  };

  return (
    <Container className="mt-4 mb-5">
      <Row>

        <Col xs={12} md={3} className="mb-3 mb-md-0">
          <FilterSidebar
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            rentFilter={rentFilter}
            setRentFilter={setRentFilter}
          />
        </Col>

        <Col xs={12} md={9}>
          <Form className="mb-3 d-flex flex-column flex-md-row gap-2">
            <Form.Select value={location} onChange={e => setLocation(e.target.value)}>
              <option value="">Any Location</option>
              <option value="Kochi">Kochi</option>
              <option value="Kakkanad">Kakkanad</option>
              <option value="Edappally">Edappally</option>
              <option value="Vytilla">Vytilla</option>
            </Form.Select>

            <Form.Select value={type} onChange={e => setType(e.target.value)} style={{ width: '100%', maxWidth: 200 }}>
              <option value="">Any Type</option>
              <option value="house">House</option>
              <option value="appartment">Appartment</option>
            </Form.Select>

            <Button
              style={{ backgroundColor: "black", color: "#3eb489" }}
              onClick={handleSearch}
              type="button"
            >
              Search
            </Button>
          </Form>

          <Row className="g-4">
            {filtered.length > 0 ? (
              filtered.map(p => (
                <Col xs={12} md={6} key={p.id}>
                  <PropertyCard property={p} />
                </Col>
              ))
            ) : (
              <p>No properties found for your filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>

  );
}