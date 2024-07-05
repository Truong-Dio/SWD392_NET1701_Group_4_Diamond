import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

const WorkInfo = () => {
  return (
    <div className="container">
      <Header />
      <Link to="/" className="back-button">Back Staff Page</Link> 
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Work at</h5>
          <p className="card-text">123Street, ABC</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Role</h5>
          <p className="card-text">Sales Staff</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Current Position</h5>
          <p className="card-text">Senior Sales</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Hire Date</h5>
          <p className="card-text">2024-01-01</p>
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;
