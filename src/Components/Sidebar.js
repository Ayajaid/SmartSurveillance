import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation
import './Sidebar.css'; // Styles de la sidebar
import { motion } from 'framer-motion';
function Sidebar() {
    return (
        <motion.div
            className="sidebar"
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to="/dashboard">Tableau de bord</Link>
                </li>
                <li>
                    <Link to="/alerts">Alertes</Link>
                </li>
                <li>
                    <Link to="/reports">Rapports</Link>
                </li>
                <li>
                    <Link to="/camera-control">Contrôle des caméras</Link>
                </li>
            </ul>
        </motion.div>);
}

export default Sidebar;