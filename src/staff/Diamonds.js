import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import 'F:/Semester7/staff/src/btn.css'; 

const Diamonds = () => {
  return (
    <div>
      <Header />
      <Link to="/training-resources" className="back-button">Back Training</Link> 
      <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center mb-4">Information about Diamonds</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3>Transparency</h3>
            <Link to="/diamonds/transparency" className="btn btn-primary custom-btn-gray">Start</Link>
            <div className="progress mt-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h3>Color</h3>
            <Link to="/diamonds/color" className="btn btn-primary custom-btn-gray">Start</Link>
            <div className="progress mt-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h3>Clarity</h3>
            <Link to="/diamonds/clarity" className="btn btn-primary custom-btn-gray">Start</Link>
            <div className="progress mt-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h3>Weight, Carat</h3>
            <Link to="/diamonds/color" className="btn btn-primary custom-btn-gray">Start</Link>
            <div className="progress mt-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Diamonds;