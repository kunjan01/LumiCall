import React, { useEffect } from 'react';
import { useWebRTC } from '../hooks/useWebRTC';
import { useRingLight } from '../hooks/useRingLight';
import VideoGrid from '../components/VideoGrid';
import ControlPanel from '../components/ControlPanel';
import ChatBox from '../components/ChatBox';
import './pages.css';

const CallPage = ({ roomId, userName }) => {
    const { peers, addPeer, removePeer } = useWebRTC(roomId, userName);
    const { activateRingLight } = useRingLight();

    useEffect(() => {
        activateRingLight();
    }, [activateRingLight]);

    return (
        <div className="call-page">
            <VideoGrid peers={peers} />
            <ControlPanel />
            <ChatBox />
        </div>
    );
};

export default CallPage;