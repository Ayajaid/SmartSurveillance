import React from 'react';
import PropTypes from 'prop-types';
import './AlertDetails.css';

function AlertDetails({ alert, onClose }) {
    return (
        <div className="alert-details">
            <h3>Détails de l'alerte</h3>
            <button className="close-button" onClick={onClose}>×</button>
            <div className="details-content">
                <p><strong>Type :</strong> {alert.type}</p>
                <p><strong>Lieu :</strong> {alert.location}</p>
                <p><strong>Heure :</strong> {alert.time}</p>
                <div className="video-container">
                    <video src={alert.videoUrl} controls />
                </div>
            </div>
        </div>
    );
}

AlertDetails.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        videoUrl: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AlertDetails;