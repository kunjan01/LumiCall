import React from 'react';

const ControlPanel = ({ onMute, onCameraToggle, onFlipCamera, isMuted, isCameraOn }) => {
    return (
        <div className="control-panel">
            <button onClick={onMute}>
                {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <button onClick={onCameraToggle}>
                {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
            <button onClick={onFlipCamera}>
                Flip Camera
            </button>
        </div>
    );
};

export default ControlPanel;