import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CallPage from './pages/CallPage';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [roomCode, setRoomCode] = useState('');
  const [userName, setUserName] = useState('');

  const handleCreateRoom = (name) => {
    setUserName(name);
    // Generate a simple 8-character room code
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setRoomCode(code);
    setCurrentPage('call');
  };

  const handleJoinRoom = (name, code) => {
    setUserName(name);
    setRoomCode(code);
    setCurrentPage('call');
  };

  const handleLeaveCall = () => {
    setCurrentPage('home');
    setRoomCode('');
    setUserName('');
  };

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <HomePage onCreateRoom={handleCreateRoom} onJoinRoom={handleJoinRoom} />
      ) : (
        <CallPage roomCode={roomCode} userName={userName} onLeave={handleLeaveCall} />
      )}
    </div>
  );
}

export default App;
