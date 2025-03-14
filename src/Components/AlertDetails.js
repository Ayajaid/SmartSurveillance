import React from 'react';

function AlertDetails({ alert }) {
  return (
    <div className="alert-details">
      <h3>Détails de l'alerte</h3>
      <p>Type : {alert.type}</p>
      <p>Lieu : {alert.location}</p>
      <p>Heure : {alert.time}</p>
      <video src={alert.videoUrl} controls />
    </div>
  );
}

export default AlertDetails;