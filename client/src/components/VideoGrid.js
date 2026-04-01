import React from 'react';

const VideoGrid = ({ peers }) => {
    return (
        <div className="video-grid">
            {peers.map((peer, index) => (
                <div key={index} className="video-container">
                    <video
                        ref={peer.videoRef}
                        autoPlay
                        playsInline
                        className="video-feed"
                    />
                    <div className="username">{peer.username}</div>
                </div>
            ))}
        </div>
    );
};

export default VideoGrid;