import React from 'react';
import CameraFeed from './CameraFeed';
import AlertList from './AlertList';
import CampusMap from './CampusMap';
import './Dashboard.css';

function Dashboard() {
    const cameraUrl = '/surveillance.mp4';// Vidéo avec autoplay
    const alerts = [
        { type: 'Intrusion', location: 'Hall A', time: '10:15' },
        { type: 'Objet abandonné', location: 'Couloir B', time: '10:30' },
    ];

    return (
        <div className="dashboard">
            <h1>Tableau de bord</h1>
            <div className="dashboard-content">
                <div className="dashboard-section">
                    <h2>Flux en direct</h2>
                    <CameraFeed cameraUrl={cameraUrl} />
                </div>
                <div className="dashboard-section">
                    <h2>Alertes récentes</h2>
                    <AlertList alerts={alerts} />
                </div>
                <div className="dashboard-section">
                    <h2>Carte du campus</h2>
                    <CampusMap />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;