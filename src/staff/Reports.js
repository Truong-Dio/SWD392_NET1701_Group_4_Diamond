import React, { useState } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import 'F:/Semester7/staff/src/report.css'; 
import 'F:/Semester7/staff/src/back-button.css'

const Reports = () => {
  const [report, setReport] = useState('');

  const handleSend = () => {
    alert(`Report sent: ${report}`);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Link to="/" className="back-button mb-3">Back to Staff Page</Link>
        <h1 className="text-center mb-4">Reports</h1>
        <div className="report-form">
          <textarea
            className="form-control"
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Enter your report here..."
            rows="10"
          />
          <button type="button" className="btn btn-primary mt-3" onClick={handleSend}>
            Send Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
