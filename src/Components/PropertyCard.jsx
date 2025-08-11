import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MiniImageSlider from './MiniImageSlider';

export default function PropertyCard({ property }) {
  return (
    <Card className="h-100 shadow-sm">
      <Link to={`/property/${property.id}`}>
        <MiniImageSlider images={property.images} />
      </Link>
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{property.location}</small>
          <strong>{property.price}</strong>
        </div>
      </Card.Body>
    </Card>
  );
}

