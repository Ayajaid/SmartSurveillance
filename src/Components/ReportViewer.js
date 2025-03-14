import React from 'react';
import { jsPDF } from 'jspdf';
import './ReportViewer.css';

function ReportViewer({ report }) {
    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text('Rapport des incidents', 10, 10);
        report.incidents.forEach((item, index) => {
            doc.text(`${item.type}: ${item.count}`, 10, 20 + index * 10);
        });
        doc.save('rapport.pdf');
    };

    const exportCSV = () => {
        const csvContent = 'data:text/csv;charset=utf-8,' + report.incidents.map((item) => `${item.type},${item.count}`).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'rapport.csv');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="report-viewer">
            <h3>Rapport généré</h3>
            <table className="report-table">
                <thead>
                <tr>
                    <th>Type d'incident</th>
                    <th>Nombre</th>
                </tr>
                </thead>
                <tbody>
                {report.incidents.map((item, index) => (
                    <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="export-buttons">
                <button onClick={exportPDF}>Exporter en PDF</button>
                <button onClick={exportCSV}>Exporter en CSV</button>
            </div>
        </div>
    );
}

export default ReportViewer;