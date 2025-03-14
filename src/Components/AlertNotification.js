import React from 'react';

function AlertNotification({ alert, onViewDetails }) {
  return (
    <div className="alert-notification">
      <p>Nouvelle alerte : {alert.type} à {alert.location}</p>
      <button onClick={onViewDetails}>Voir les détails</button>
    </div>
  );
}

export default AlertNotification;