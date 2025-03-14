import React from 'react';
import { FaFire, FaCarCrash, FaUserSlash, FaMoneyBillWave, FaFistRaised } from 'react-icons/fa';
import './AlertList.css';

function AlertList({ alerts, onViewDetails }) {
    const getIconForType = (type) => {
        switch (type) {
            case 'Incendie': return <FaFire className="icon" />;
            case 'Accidents': return <FaCarCrash className="icon" />;
            case 'Non éthique': return <FaUserSlash className="icon" />;
            case 'Vol': return <FaMoneyBillWave className="icon" />;
            case 'Violence': return <FaFistRaised className="icon" />;
            default: return null;
        }
    };

    return (
        <div className="alert-list">
            <h2>Alertes récentes</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index} className={`alert-item ${alert.read ? 'read' : 'unread'}`} data-type={alert.type}>
                        {getIconForType(alert.type)}
                        <div className="alert-info">
                            <strong>{alert.type}</strong>
                            <span>{alert.location} ({alert.time})</span>
                        </div>
                        <button onClick={() => onViewDetails(alert)}>Voir les détails</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlertList;