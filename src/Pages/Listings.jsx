import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropertyCard from '../Components/PropertyCard';
import FilterSidebar from '../Components/FilterSidebar';
import { getAllPropertiesAPI } from '../Service/allApi';

export default function Listings() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [rentFilter, setRentFilter] = useState('');
  const [propsList, setPropsList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Fetch properties
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPropertiesAPI();
      if (res.status === 200) {
        setPropsList(res.data);
        setFiltered(res.data); // Initially show all
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    let result = propsList;

    // Location filter (case-insensitive)
    if (location) {
      result = result.filter(p => p.location.toLowerCase() === location.toLowerCase());
    }

    // Type filter (case-insensitive)
    if (type) {
      result = result.filter(p => p.type.toLowerCase() === type.toLowerCase());
    }

    // Bedrooms filter (match db.json "Bedroom" key)
    if (bedrooms) {
      result = result.filter(p => p.Bedroom === parseInt(bedrooms));
    }

    // Rent filter — parse number from price string
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
        <Col md={3}>
          <FilterSidebar
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            rentFilter={rentFilter}
            setRentFilter={setRentFilter}
          />
        </Col>

        <Col md={9}>
          {/* Search Filters */}
          <Form className="mb-3 d-flex gap-2">
            <Form.Select value={location} onChange={e => setLocation(e.target.value)}>
              <option value="">Any Location</option>
              <option value="Kochi">Kochi</option>
              <option value="Kakkanad">Kakkanad</option>
              <option value="Edappally">Edappally</option>
              <option value="Vytilla">Vytilla</option>
            </Form.Select>

            <Form.Select value={type} onChange={e => setType(e.target.value)} style={{ width: 200 }}>
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

          {/* Property Cards */}
          <Row className="g-4">
            {filtered.length > 0 ? (
              filtered.map(p => (
                <Col md={6} key={p.id}>
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
