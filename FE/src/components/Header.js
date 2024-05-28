import React from 'react';
import './Header.css'; // Import file CSS

const Header = () => {
  return (
    <div className="header-container"> 
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/training-resources">Training Resources</a></li>
          <li><a href="/work-info">Work Info</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/leave-request">Request</a></li>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/information-about-diamonds">Information about Diamonds</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
