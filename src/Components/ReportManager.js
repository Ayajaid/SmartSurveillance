import React, { useState } from 'react';
import ReportGenerator from './ReportGenerator';
import ReportViewer from './ReportViewer';
import './ReportManager.css';

function ReportManager() {
  const [report, setReport] = useState(null);
  const [history, setHistory] = useState([]);

  const handleGenerate = (startDate, endDate, incidentType) => {
    const generatedReport = {
      startDate,
      endDate,
      incidentType,
      incidents: [
        { type: 'Incendie', count: 5 },
        { type: 'Accidents', count: 3 },
        { type: 'Non éthique', count: 2 },
        { type: 'Vol', count: 4 },
        { type: 'Violence', count: 1 },
      ],
    };
    setReport(generatedReport);
    setHistory([...history, generatedReport]);
  };

  return (
      <div className="report-manager">
        <ReportGenerator onGenerate={handleGenerate} />
        {report && <ReportViewer report={report} />}
        <div className="report-history">
          <h3>Historique des rapports</h3>
          {history.map((report, index) => (
              <div key={index} className="report-item">
                <p>Date de début : {report.startDate}</p>
                <p>Date de fin : {report.endDate}</p>
                <p>Type d'incident : {report.incidentType || 'Tous'}</p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default ReportManager;