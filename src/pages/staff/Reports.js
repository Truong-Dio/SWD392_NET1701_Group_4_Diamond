import React, { useState } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const Reports = () => {
  const [report, setReport] = useState('');

  const handleSend = () => {
    alert(`Report sent: ${report}`);
  };

  return (
    <div>
      <Header />
      <Link to="/" className="back-button">Back Staff Page</Link> 
      <h1>Reports</h1>
      <textarea value={report} onChange={(e) => setReport(e.target.value)} />
      <br />
      <button type="button" onClick={handleSend}>Send Report</button>
    </div>
  );
};

export default Reports;
