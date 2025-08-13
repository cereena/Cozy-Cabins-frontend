import React from 'react';
import { Form, Card } from 'react-bootstrap';

export default function FilterSidebar({ bedrooms, setBedrooms, rentFilter, setRentFilter }) {
  return (
    <Card className="p-3">
      <h5 style={{ color: "#3eb489" }}>Filters</h5>

      
      <Form.Group className="mb-3">
        <Form.Label>Number of Bedrooms</Form.Label>
        <Form.Select value={bedrooms} onChange={e => setBedrooms(e.target.value)}>
          <option value="">Any</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
        </Form.Select>
      </Form.Group>

      
      <Form.Group>
        <Form.Label>Rent</Form.Label>
        <div className="d-flex flex-column gap-1">
          <Form.Check
            type="radio"
            label="Below ₹5,000"
            value="below5k"
            checked={rentFilter === "below5k"}
            onChange={(e) => setRentFilter(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Below ₹10,000"
            value="below10k"
            checked={rentFilter === "below10k"}
            onChange={(e) => setRentFilter(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Below ₹15,000"
            value="below15k"
            checked={rentFilter === "below15k"}
            onChange={(e) => setRentFilter(e.target.value)}
          />
        </div>
      </Form.Group>
    </Card>
  );
}
