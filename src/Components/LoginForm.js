import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './LoginForm.css'; // Importez les styles

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>LOGIN</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">USERNAME</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Entrez votre nom d'utilisateur"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                    <div className="options">
                        <div className="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="#forgot-password" className="forgot-password">
                            Forgot your password?
                        </a>
                    </div>
                    <button type="submit" className="login-button">
                        LOGIN
                    </button>
                </form>
                <p className="design-credit">Designed by Freepik</p>
            </div>
        </div>
    );
}

export default LoginForm;