import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './pages/staff/Profile';
import TrainingResources from './pages/staff/TrainingResources';
import WorkInfo from './pages/staff/WorkInfo';
import Reports from './pages/staff/Reports';
import LeaveRequest from './pages/staff/LeaveRequest';
import Schedule from './pages/staff/Schedule';
import ShiftPatternRequest from './pages/staff/ShiftPatternRequest';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Diamonds from './pages/staff/Diamonds'; 
import Certificates from './pages/staff/Certificates'; 
import './Header.css'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/training-resources" element={<TrainingResources />} />
        <Route path="/diamonds" element={<Diamonds />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/work-info" element={<WorkInfo />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/shift-pattern-request" element={<ShiftPatternRequest />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
