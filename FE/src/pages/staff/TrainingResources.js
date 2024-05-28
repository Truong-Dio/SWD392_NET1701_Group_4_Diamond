import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const TrainingResources = () => {
  return (
    <div>
      <Header />
      <h1>Training Resources</h1>
      <ul>
        <li>
          <Link to="/diamonds">Information about Diamonds</Link>
        </li>
        <li>
          <Link to="/certificates">Certificates</Link>
        </li>
      </ul>
    </div>
  );
};

export default TrainingResources;
