import React from 'react';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const TrainingResources = () => {
  return (
    <div className="container"> 
      <Header />
      <Link to="/" className="back-button">Back Staff Page</Link> 
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Training-multiple-choice</h1>
      <ul style={{ padding: '0', listStyle: 'none' }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/diamonds" style={linkStyle}>Information about Diamonds</Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/certificates" style={linkStyle}>Certificates</Link>
        </li>
      </ul>
    </div>
  );
};

const linkStyle = {
  display: 'block',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#333',
  transition: 'background-color 0.3s, transform 0.2s, color 0.3s',
};

linkStyle.hover = {
  backgroundColor: '#f0f0f0',
  transform: 'translateY(-3px)',
  color: '#007bff',
};

export default TrainingResources;
