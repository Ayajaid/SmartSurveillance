import React, { useState } from 'react';

// Créez le contexte
const AuthContext = React.createContext();

// Créez le fournisseur de contexte
export const AuthProvider = ({ children }) => {
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
        <AuthContext.Provider value={{ isLoggedIn, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Exportez le contexte pour qu'il puisse être utilisé dans d'autres composants
export default AuthContext;