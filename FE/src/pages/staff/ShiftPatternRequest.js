import React, { useState } from 'react';
import Header from '../../components/Header';

const ShiftPatternRequest = () => {
  const [shiftPattern, setShiftPattern] = useState('');

  const handleRequest = () => {
    alert(`Shift pattern request sent: ${shiftPattern}`);
  };

  return (
    <div>
      <Header />
      <h1>Shift Pattern Request</h1>
      <textarea value={shiftPattern} onChange={(e) => setShiftPattern(e.target.value)} />
      <br />
      <button type="button" onClick={handleRequest}>Request Shift Pattern Change</button>
    </div>
  );
};

export default ShiftPatternRequest;
