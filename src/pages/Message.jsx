import React from 'react';
import "../css/dashboard.scss";
import "../css/messages.scss";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Messages = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Header />
        <div className='messageContainer'>
          <div className='messageList'>
            {/* Message list goes here */}
            <div className='message'>
              <div className='sender'>John Doe</div>
              <div className='content'>Hello, how are you?</div>
            </div>
            <div className='message'>
              <div className='sender'>Jane Doe</div>
              <div className='content'>Hi John! I'm doing well. How about you?</div>
            </div>
            <div className='message'>
              <div className='sender'>Jane Doe</div>
              <div className='content'>Hi John! I'm doing well. How about you?</div>
            </div>
            <div className='message'>
              <div className='sender'>Jane Doe</div>
              <div className='content'>Hi John! I'm doing well. How about you?</div>
            </div>
            <div className='message'>
              <div className='sender'>Jane Doe</div>
              <div className='content'>Hi John! I'm doing well. How about you?</div>
            </div>
            <div className='message'>
              <div className='sender'>Jane Doe</div>
              <div className='content'>Hi John! I'm doing well. How about you?</div>
            </div>
            
            {/* Add more messages as needed */}
          </div>
          <div className='messageInput'>
            <input type='text' placeholder='Type your message...' />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
