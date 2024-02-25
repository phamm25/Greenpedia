import React, { useState } from 'react';
import './chatgpt.css';

const ChatGPTChat = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, user: 'user' }]);
      // Simulating ChatGPT response (replace with actual response logic)
      setTimeout(() => {
        setMessages([...messages, { text: 'This is a ChatGPT response.', user: 'chatbot' }]);
      }, 1000);
      e.target.reset();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="message-input">
        <input type="text" name="message" placeholder="Type a message..." autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatGPTChat;