import React from 'react';
import s from './Header.module.css';

const Header = () => (
    <header className={s.header}>
        <a href='/' className={`${s.logo} container`}>
            <img src='#' className={s.logo__img} alt='logo'></img>
            <h1 className={s.logo__text}>Bloom</h1>
        </a>
    </header>
);

export default Header;