import React, { useState } from 'react';
import AlertNotification from './AlertNotification';
import AlertDetails from './AlertDetails';

function AlertManager() {
  const [currentAlert, setCurrentAlert] = useState(null);
  const alert = {
    type: 'Intrusion',
    location: 'Hall A',
    time: '10:15',
    videoUrl: 'http://example.com/alert-video',
  };

  return (
    <div className="alert-manager">
      <AlertNotification alert={alert} onViewDetails={() => setCurrentAlert(alert)} />
      {currentAlert && <AlertDetails alert={currentAlert} />}
    </div>
  );
}

export default AlertManager;