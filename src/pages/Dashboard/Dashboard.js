import React from 'react';
import './Dashboard.scss';


import TierOne from '../../components/TierOne/TierOne';
import TierTwo from '../../components/TierTwo/TierTwo';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="title">Information Sharing</h1>
      <div className="tier-container">
        <TierOne />
      </div>
      <div className="tier-container">
        <TierTwo />
      </div>
    </div>
  );
}

export default Dashboard;
