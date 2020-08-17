import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://pbs.twimg.com/profile_images/1137096400863485952/YW6qjuI8_400x400.jpg' alt='Lviv logo' />

            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
}


export default Header;