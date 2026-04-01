import React from 'react';
import useWebRTC from '../hooks/useWebRTC';
import useRingLight from '../hooks/useRingLight';
import VideoGrid from '../components/VideoGrid';
import ControlPanel from '../components/ControlPanel';
import ChatBox from '../components/ChatBox';
import '../styles/pages.css';

const CallPage = ({ roomCode, userName, onLeave }) => {
    const { peers, addPeer, removePeer } = useWebRTC(roomCode);
    const isBright = useRingLight();

    return (
        <div className="call-page">
            <VideoGrid peers={peers} />
            <ControlPanel onLeave={onLeave} />
            <ChatBox />
        </div>
    );
};

export default CallPage;