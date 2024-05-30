import React, { useState } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const LeaveRequest = () => {
  const [leaveReason, setLeaveReason] = useState('');

  const handleRequest = () => {
    alert(`Leave request sent: ${leaveReason}`);
  };

  return (
    <div>
      <Header />
      <Link to="/" className="back-button">Back Staff Page</Link> 
      <h1>Leave Request</h1>
      <textarea value={leaveReason} onChange={(e) => setLeaveReason(e.target.value)} />
      <br />
      <button type="button" onClick={handleRequest}>Request Leave</button>
    </div>
  );
};

export default LeaveRequest;
