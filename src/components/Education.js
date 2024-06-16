import React from 'react';
import './styleForEducation.css';
import { Link } from 'react-router-dom';

const cardHoverStyle = {
  transform: 'translateY(-2px)',
  boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
};

const educationDetails = [
  {
    title: 'Fullstack Web Development Internship',
    organization: 'Mashupstack',
    description: 'Internship in Fullstack Web Development using Python Django with React. Certification in Fullstack Python with React.',
    isHighlighted: true,
  },
  {
    title: 'Bachelors Degree in Political Science',
    organization: 'SN College, Chempazhanthy',
    description: '',
    isHighlighted: false,
  },
  {
    title: 'Higher Secondary Education in Science with Biology',
    organization: 'LMS HSS Vattappara',
    description: '',
    isHighlighted: false,
  },
];

const EducationCard = ({ title, organization, description, isHighlighted }) => {
  return (
    <div className={`education-card ${isHighlighted ? 'highlighted' : ''}`} style={cardHoverStyle}>
      <h3>{title}</h3>
      <h4>{organization}</h4>
      {description && (
        <p>
          {description.split('Certification').shift()}
          <strong> Certification in Fullstack Python with React.</strong>
        </p>
      )}
    </div>
  );
};

const EducationDetails = () => {
  return (
    <div>
      <Link to="/" className="btn btn-sm btn-secondary text-white btn-outline-dark">Home</Link>
      <div className="education-container mt-4">
        {educationDetails.map((detail, index) => (
          <EducationCard
            key={index}
            title={detail.title}
            organization={detail.organization}
            description={detail.description}
            isHighlighted={detail.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationDetails;
