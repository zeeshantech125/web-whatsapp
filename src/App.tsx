import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { ChatPage } from './pages/ChatPage';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {showChat ? (
        <ChatPage onBack={() => setShowChat(false)} />
      ) : (
        <LandingPage onStartChat={() => setShowChat(true)} />
      )}
    </div>
  );
}

export default App;