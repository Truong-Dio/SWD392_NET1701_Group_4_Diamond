import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import 'F:/Semester7/staff/src/btn.css'; 
import 'F:/Semester7/staff/src/back-button.css'


const Certificates = () => {
  return (
    <div>
      <Header />
      <Link to="/training-resources" className="back-button">Back Training</Link> 
      <h1>Certificates</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <h3 className="text-center">GIA</h3>
            <Link to="/diamonds/gia" className="btn btn-primary custom-btn-gray d-block mx-auto">Start</Link>
            <div className="progress mt-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
