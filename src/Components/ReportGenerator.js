import React, { useState } from 'react';
import './ReportGenerator.css';

function ReportGenerator({ onGenerate }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [incidentType, setIncidentType] = useState('');

    const handleGenerate = () => {
        onGenerate(startDate, endDate, incidentType);
    };

    return (
        <div className="report-generator">
            <h3>Générer un rapport</h3>
            <div className="filters">
                <div className="filter-group">
                    <label>Date de début :</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <label>Date de fin :</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <label>Type d'incident :</label>
                    <select
                        value={incidentType}
                        onChange={(e) => setIncidentType(e.target.value)}
                    >
                        <option value="">Tous</option>
                        <option value="Intrusion">Intrusion</option>
                        <option value="Objet abandonné">Objet abandonné</option>
                        <option value="Incendie">Incendie</option>
                    </select>
                </div>
            </div>
            <button onClick={handleGenerate}>Générer</button>
        </div>
    );
}

export default ReportGenerator;