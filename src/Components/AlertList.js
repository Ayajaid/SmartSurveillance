import React from 'react';
import './AlertList.css';

function AlertList({ alerts }) {
    return (
        <div className="alert-list">
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <strong>{alert.type}</strong> - {alert.location} ({alert.time})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlertList;