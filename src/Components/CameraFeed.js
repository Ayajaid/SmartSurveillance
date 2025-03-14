import React from 'react';
import './CameraFeed.css';

function CameraFeed({ cameraUrl }) {
    return (
        <div className="camera-feed">
            <video src={cameraUrl} controls autoPlay loop muted />
        </div>
    );
}

export default CameraFeed;