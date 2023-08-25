import React from 'react';
import faceBook from '../icons/faceBook.jpeg';
import insta from '../icons/insta.jpeg';
import tikTok from '../icons/tikTok.jpeg';
import snakVedo from '../icons/snakVedo.jpeg';
import WhatsApp from '../icons/WhatsApp.jpeg';
import que from '../icons/que.jpeg';
import paypal from '../icons/paypal.jpeg';

import amazon from '../icons/amazon.jpeg';
import gmail from '../icons/gmail.jpeg';
import slack from '../icons/slack.jpeg';
import netFlix from '../icons/netFlix.jpeg';
import cloud from '../icons/cloud.jpeg';
import './TierOne.scss';
import appIcon from './app-icon.png';

const TierOne = () => {
  return (
    <div className="tier-holder">
      <div className="info">
        <h3>Information Sharing</h3>
        {/* <div className='edit-btn'>
          <button>Edit</button>
        </div> */}
      </div>
      {/* <div className="data">
        <div>Name</div>
        <div>Date of Birth</div>
        <div>Username</div>
        <div>Password</div>
        <div>Saved / Liked Items</div>
      </div> */}
      <div className="apps-access">
      <div className="access-txt">Tap the app's icon to edit information sharing settings.</div>
        <div className="access-msg">Social media.</div>
        <div className="tier-apps">
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={faceBook} alt='app icon' />
            </div>
            <div className='app-name'>Facebook</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={insta} alt='app icon' />
            </div>
            <div className='app-name'>Instagram</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={tikTok} alt='app icon' />
            </div>
            <div className='app-name'>TikTok</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={snakVedo} alt='app icon' />
            </div>
            <div className='app-name'>Snap Chat</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={WhatsApp} alt='app icon' />
            </div>
            <div className='app-name'>Whats App</div>
          </div>
        </div>

        <div className="access-msg">Finanace.</div>
        <div className="tier-apps2">
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={que} alt='app icon' />
            </div>
            <div className='app-name'>Quine Base</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={paypal} alt='app icon' />
            </div>
            <div className='app-name'>PayPal</div>
          </div>
        </div>

        <div className="access-msg">Utilities.</div>
        <div className="tier-apps">
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={amazon} alt='app icon' />
            </div>
            <div className='app-name'>Amazon</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={gmail} alt='app icon' />
            </div>
            <div className='app-name'>Gmail</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={slack} alt='app icon' />
            </div>
            <div className='app-name'>Slack</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={netFlix} alt='app icon' />
            </div>
            <div className='app-name'>NetFlix</div>
          </div>
          <div className='tier-app'>
            <div className='tier-app-icon'>
              <img src={cloud} alt='app icon' />
            </div>
            <div className='app-name'>Soundcloud</div>
          </div>
        </div>
        {/* <div className="edit-text">
          <button>Edit Tier 1 Apps</button>
        </div> */}
      </div>
    </div>
  );
};

export default TierOne;
