import React from 'react';
import amazon from '../icons/amazon.jpeg';
import appIcon from './app-icon.png';
import './TierThree.scss';

const TierThree = () => {
  return (
    <div className="tier-holder">
      <h2>Tier 3</h2>
      <div className="info">
        <h3>Information Being Shared:</h3>
        <div className='edit-btn'>
          <button>Edit</button>
        </div>
      </div>
      <div className="data">
        <div>Name</div>
        <div>Date of Birth</div>
        <div>Username</div>
        <div>Password</div>
        <div>Saved / Liked Items</div>
      </div>
      <div className="apps-access">
        <div className="access-msg">You have given these apps access to this information:</div>
        <div className="tier-apps">
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={amazon} alt='app icon' />
            </div>
            <div className='app-name'>App Name</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={appIcon} alt='app icon' />
            </div>
            <div className='app-name'>App Name</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={appIcon} alt='app icon' />
            </div>
            <div className='app-name'>App Name</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={appIcon} alt='app icon' />
            </div>
            <div className='app-name'>App Name</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={appIcon} alt='app icon' />
            </div>
            <div className='app-name'>App Name</div>
          </div>
        </div>
        <div className="edit-text">
          <button>Edit Tier 2 Apps</button>
        </div>
      </div>
    </div>
  );
};

export default TierThree;
