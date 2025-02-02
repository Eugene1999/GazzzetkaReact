import './Auth.css';

import React, { useState, createContext, useContext } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    NavLink,
    useNavigate,
  } from 'react-router-dom';


// Создадим контекст для авторизации
const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, callback) => {
        // Дербанутый логин — просто сохраняем имя
        setUser({ username });
        callback();
    };

    const logout = (callback) => {
        setUser(null);
        callback();
    };

    const value = { user, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Компонент для защиты маршрутов
const RequireAuth = ({ children }) => {
    const auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === '') return;
        auth.login(username, () => {
            navigate('/');
        });
    };

    return (
        <div className="login-page">
            <h1>Логин</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};


export { useAuth, AuthProvider, RequireAuth, Login };