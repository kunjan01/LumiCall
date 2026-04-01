import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const [name, setName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const history = useHistory();

    const createRoom = () => {
        const code = Math.random().toString(36).substring(2, 10).toUpperCase();
        history.push(`/call/${code}`, { name });
    };

    const joinRoom = () => {
        history.push(`/call/${roomCode}`, { name });
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
            <button onClick={createRoom}>Create new room</button>
            <input
                type="text"
                placeholder="Enter room code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
            />
            <button onClick={joinRoom}>Join room</button>
        </div>
    );
};

export default HomePage;