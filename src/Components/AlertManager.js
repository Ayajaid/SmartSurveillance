import React, { useState } from 'react';
import AlertList from './AlertList';
import AlertDetails from './AlertDetails';

function AlertManager() {
  const [currentAlert, setCurrentAlert] = useState(null);
  const [alerts, setAlerts] = useState([
    { type: 'Incendie', location: 'Bloc A', time: '10:15', videoUrl: 'http://example.com/alert-video', read: false },
    { type: 'Accidents', location: 'Parking', time: '11:30', videoUrl: 'http://example.com/alert-video', read: false },
    { type: 'Non éthique', location: 'Hall', time: '12:45', videoUrl: 'http://example.com/alert-video', read: false },
    { type: 'Vol', location: 'Buvette', time: '14:00', videoUrl: 'http://example.com/alert-video', read: false },
    { type: 'Violence', location: 'Hall ', time: '15:20', videoUrl: 'http://example.com/alert-video', read: false },
  ]);

  const handleViewDetails = (alert) => {
    setCurrentAlert(alert);
    markAlertAsRead(alert);
  };

  const handleCloseDetails = () => {
    setCurrentAlert(null);
  };

  const markAlertAsRead = (alert) => {
    setAlerts(alerts.map(a => a === alert ? { ...a, read: true } : a));
  };

  return (
      <div className="alert-manager">
        <AlertList alerts={alerts} onViewDetails={handleViewDetails} />
        {currentAlert && <AlertDetails alert={currentAlert} onClose={handleCloseDetails} />}
      </div>
  );
}

export default AlertManager;