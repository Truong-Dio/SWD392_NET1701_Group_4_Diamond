import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const Schedule = () => {
  // example data
  const scheduleData = [
    { time: '9 AM - 5 PM', day: 'Monday', month: 'May' },
    { time: '9 AM - 5 PM', day: 'Tuesday', month: 'May' },
    { time: '9 AM - 5 PM', day: 'Wednesday', month: 'May' },
    { time: '9 AM - 5 PM', day: 'Thursday', month: 'May' },
    { time: '9 AM - 5 PM', day: 'Friday', month: 'May' }
  ];

  return (
    <div>
      <Header />
      <h1>Schedule</h1>
      <div className="mb-3">
        <Link to="/shift-pattern-request" className="btn btn-primary">Shift Pattern Request</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Date</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>

          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.day}</td>
              <td>{item.month}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
