import React, { useState } from 'react';
import '../styles/pages.css';

const HomePage = ({ onCreateRoom, onJoinRoom }) => {
    const [name, setName] = useState('');
    const [roomCode, setRoomCode] = useState('');

    const handleCreateRoom = () => {
        if (name.trim()) {
            onCreateRoom(name);
        }
    };

    const handleJoinRoom = () => {
        if (name.trim() && roomCode.trim()) {
            onJoinRoom(name, roomCode);
        }
    };

    return (
        <div className="home-page">
            <h1>Welcome to LumiCall</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleCreateRoom}>Create new room</button>
            <input
                type="text"
                placeholder="Enter room code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
            />
            <button onClick={handleJoinRoom}>Join room</button>
        </div>
    );
};

export default HomePage;