import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import Sidebar from './Components/Sidebar';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import AlertManager from './Components/AlertManager';
import ReportManager from './Components/ReportManager';
import CameraControl from './Components/CameraControl';
import './styles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ login: handleLogin, logout: handleLogout }}>
            <Router>
                <div className="App">
                    {!isLoggedIn ? (
                        <LoginForm />
                    ) : (
                        <div className="app-container">
                            <Sidebar />
                            <div className="content">
                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/alerts" element={<AlertManager />} />
                                    <Route path="/reports" element={<ReportManager />} />
                                    <Route path="/camera-control" element={<CameraControl />} />
                                    <Route path="/" element={<Dashboard />} /> {/* Route par défaut */}
                                </Routes>
                            </div>
                        </div>
                    )}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;