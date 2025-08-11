import React, { useState } from "react";
import { FaHome, FaKey, FaBuilding } from "react-icons/fa";
import "./Service.css";

const services = [
  {
    title: "Property Renting",
    description: "Find the perfect rental property that suits your needs. Whether you're looking for a cozy apartment in the city or a spacious family home in the suburbs, we provide personalized recommendations, verified listings, and expert guidance to help you secure your next rental quickly and hassle-free.Whether you're looking for a cozy apartment in the city or a spacious family home in the suburbs, we provide personalized recommendations, verified listings, and expert guidance to help you secure your next rental quickly and hassle-free.",
    icon: <FaHome size={40} />
  },
  {
    title: "Property Selling",
    description: "Sell your property quickly and get the best market value. We offer a comprehensive selling plan that includes professional photography, targeted marketing campaigns, and negotiation expertise to ensure you get the highest price possible while reducing the stress of the selling process.We offer a comprehensive selling plan that includes professional photography, targeted marketing campaigns, and negotiation expertise to ensure you get the highest price possible while reducing the stress of the selling process, selling process.",
    icon: <FaKey size={40} />
  },
  {
    title: "Document Management",
    description: "We will guide you throughout the loan process and help you manage all property-related documents with ease. From legal paperwork and registration to financial agreements, our team ensures all documentation is handled correctly and securely, giving you complete peace of mind. From legal paperwork and registration to financial agreements, our team ensures all documentation is handled correctly and securely, giving you complete peace of mind.From legal paperwork and registration to financial agreements, our team ensures all doc.",
    icon: <FaBuilding size={40} />
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 section-title">
        <span style={{ fontFamily: "'Poppins', sans-serif", color: "#000" }}>
          Our Services
        </span>
      </h2>
      <div className="row g-4">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          const shortText = service.description.slice(0, 100) + "...";

          return (
            <div key={index} className="col-md-4">
              <div className="service-card h-100 text-center p-4 shadow-sm">
                <div className="icon-wrapper mb-3">{service.icon}</div>
                <h5 className="mb-3">{service.title}
                </h5>
                <p>
                  {isExpanded ? service.description : shortText}
                </p>
                <button
                  className="btn btn-link p-0"
                  onClick={() => toggleReadMore(index)}
                  style={{ textDecoration: "none", color: "#010202ff", cursor: "pointer" }}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
