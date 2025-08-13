import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <Row>
     
      <Col md={8}>
        <Image
          src={images[0]}
          alt="Main"
          fluid
          style={{
            borderRadius: "10px",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </Col>

      
      <Col md={4} className="d-flex flex-column gap-2">
        {images.slice(1, 5).map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Small ${idx}`}
            fluid
            style={{
              borderRadius: "10px",
              height: "calc(25% - 6px)",
              objectFit: "cover",
              flex: "1"
            }}
          />
        ))}
      </Col>
    </Row>
  );
};

export default ImageGallery;
