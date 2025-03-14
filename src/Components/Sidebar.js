
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaBell, FaChartLine, FaVideo, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
//import AuthContext from '../context/AuthContext';
function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <motion.div
                className={`sidebar ${isOpen ? 'open' : 'closed'}`}
                initial={{ x: -250 }}
                animate={{ x: isOpen ? 0 : -250 }}
                transition={{ duration: 0.5 }}
            >
                <div className="sidebar-header">
                    <button onClick={toggleSidebar} className="toggle-button">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isOpen && <h2>Menu</h2>}
                </div>
                <ul>
                    <li>
                        <Link to="/dashboard">
                            <FaHome className="icon" />
                            {isOpen && <span>Tableau de bord</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/alerts">
                            <FaBell className="icon" />
                            {isOpen && <span>Alertes</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/reports">
                            <FaChartLine className="icon" />
                            {isOpen && <span>Rapports</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/camera-control">
                            <FaVideo className="icon" />
                            {isOpen && <span>Contrôle des caméras</span>}
                        </Link>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <button className="logout-button">
                        <FaSignOutAlt className="icon" />
                        {isOpen && <span>Se déconnecter</span>}
                    </button>
                </div>
            </motion.div>

            {/* Bouton flottant pour ouvrir/fermer la sidebar */}
            {!isOpen && (
                <button className="floating-toggle-button" onClick={toggleSidebar}>
                    <FaBars />
                </button>
            )}
        </>
    );
}

export default Sidebar;