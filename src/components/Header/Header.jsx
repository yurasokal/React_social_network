import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://pbs.twimg.com/profile_images/1137096400863485952/YW6qjuI8_400x400.jpg' alt='Lviv logo' />
        </header>
    );
}


export default Header;