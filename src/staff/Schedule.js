import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import 'F:/Semester7/staff/src/schedule.css';

const Schedule = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  // example data
  const scheduleData = [
    { day: 'Monday', date: '1', month: 'May', time: '9 AM - 5 PM', work: true },
    { day: 'Tuesday', date: '2', month: 'May', time: '9 AM - 5 PM', work: true },
    { day: 'Wednesday', date: '3', month: 'May', time: '9 AM - 5 PM', work: false },
    { day: 'Thursday', date: '4', month: 'May', time: '9 AM - 5 PM', work: true },
    { day: 'Friday', date: '5', month: 'May', time: '9 AM - 5 PM', work: false }
  ];

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Link to="/" className="back-button">Back Staff Page</Link> 
        <h1 className="my-4">Schedule</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Link to="/shift-pattern-request" className="btn btn-primary">Shift Pattern Request</Link>
          <select value={selectedYear} onChange={handleYearChange} className="form-select year-select">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Month</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className={item.work ? 'table-success' : 'table-danger'}>
                <td>{item.day}</td>
                <td>{item.date}</td>
                <td>{item.month}</td>
                <td>{item.time}</td>
                <td>{item.work ? 'Working' : 'Off'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
