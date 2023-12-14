import React, { useState } from 'react';
import "../css/dashboard.scss";
import "../css/messages.scss";
import user from '../assets/JD.png';
import { useSpring, animated } from 'react-spring';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Messages = () => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'John Doe', content: 'Hello, how are you?' },
    { sender: 'John Doe', content: 'Hi John! I\'m doing well. How about you?' },
    { sender: 'John Doe', content: 'Hi John! I\'m doing well. How you code doing?' },
    { sender: 'John Doe', content: 'Hi John! I\'m doing well. Is it fine?' },

    
  ]);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        sender: 'User', // Replace with the actual sender's name or get it dynamically
        content: messageInput,
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust duration as needed
  });

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Header />
        <animated.div style={fadeIn}>
        <div className='messageContainer'>
          <div className='senderInfo'>
            <div className='senderAvatar'>
              <img src={user} alt="jenna" />
            </div>
            <div className='senderDetails'>
              <div className='senderName'>John Doe</div>
              <div className='senderStatus'>Online</div>
            </div>
          </div>
          <div className='messageList'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'User' ? 'sent' : ''}`}
              >
                <div className='sender'>{message.sender}</div>
                <div className='content'>{message.content}</div>
              </div>
            ))}
          </div>
          <div className='messageInput'>
            <input
              type='text'
              placeholder='Type your message...'
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Messages;

