import React, { useState } from 'react';
import Header from '../../components/Header';

const Reports = () => {
  const [report, setReport] = useState('');

  const handleSend = () => {
    alert(`Report sent: ${report}`);
  };

  return (
    <div>
      <Header />
      <h1>Reports</h1>
      <textarea value={report} onChange={(e) => setReport(e.target.value)} />
      <br />
      <button type="button" onClick={handleSend}>Send Report</button>
    </div>
  );
};

export default Reports;
