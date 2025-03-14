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
                        className="filter-input"
                    />
                </div>
                <div className="filter-group">
                    <label>Date de fin :</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="filter-input"
                    />
                </div>
                <div className="filter-group">
                    <label>Type d'incident :</label>
                    <select
                        value={incidentType}
                        onChange={(e) => setIncidentType(e.target.value)}
                        className="filter-input"
                    >
                        <option value="">Tous</option>
                        <option value="Incendie">Incendie</option>
                        <option value="Accidents">Accidents</option>
                        <option value="Non éthique">Non éthique</option>
                        <option value="Vol">Vol</option>
                        <option value="Violence">Violence</option>
                    </select>
                </div>
            </div>
            <button className="generate-button" onClick={handleGenerate}>Générer</button>
        </div>
    );
}

export default ReportGenerator;