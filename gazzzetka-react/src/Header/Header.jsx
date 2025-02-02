import './Header.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.jsx';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const auth = useAuth();
    const [favoritesOpen, setFavoritesOpen] = useState(false);
    const favorites = [
        'Канал 1',
        'Канал 2',
        'Канал 3',
    ];
    const username = auth.user.username.split(' ')[0].slice(0, 12);

    const toggleFavorites = () => {
        setFavoritesOpen(!favoritesOpen);
    };

    const [hover, setHover] = useState(false);

    return (
        <header className="header">
            <nav className="nav">
                <NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Gazzzetka</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/channels">Каналы</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/aggregator">Агрегатор</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/articles">Статьи</NavLink>
                <div className="spacer" />
                <div className="favorites">
                    <button onClick={toggleFavorites}>Избранные</button>
                    {favoritesOpen && (
                        <ul className="favorites-dropdown">
                            {favorites.map((fav, index) => (
                                <li key={index}>
                                    <a href={`#${fav.toLowerCase().replace(/\s/g, '-')}`}>{fav}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="spacer" />
                {auth.user && (
                    <div className="user-info">
                        <button
                            className={`user-icon ${hover ? 'hover' : ''}`}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            onClick={() => auth.logout(() => { })}
                        >
                            {hover ? 'Выйти' : <><FaUser /> &nbsp;{username}</>}
                        </button>
                    </div>
                    // <div className="user-info">
                    //     <div className="user-icon">
                    //         {auth.user.username.charAt(0).toUpperCase()}
                    //         <div className="logout-dropdown">
                    //             <button onClick={() => auth.logout(() => { })}>Выйти</button>
                    //         </div>
                    //     </div>
                    //     <span className="username">{auth.user.username}</span>
                    // </div>
                )}
            </nav>
        </header>
    );
};

export default Header;