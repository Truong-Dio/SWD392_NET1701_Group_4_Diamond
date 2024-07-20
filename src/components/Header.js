import React from 'react';
import './Header.css'; 
import'F:/Semester7/staff/src/staff_page_button.css'

const Header = () => {
  return (
    <div className="header-container"> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand custom-brand staff-page-button" href="/">Staff Page</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-evenly">
            <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="/training-resources">Training</a></li>
            <li className="nav-item"><a className="nav-link" href="/work-info">Work Info</a></li>
            <li className="nav-item"><a className="nav-link" href="/reports">Reports</a></li>
            <li className="nav-item"><a className="nav-link" href="/leave-request">Request</a></li>
            <li className="nav-item"><a className="nav-link" href="/schedule">Schedule</a></li>
            <li className="nav-item"><a className="nav-link" href="/information-about-diamonds">Information about Diamonds</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;