import React from 'react';
import s from './Header.module.css';
import Navbar from "../Navbar";

const Header = ({title}) => (
    <header className={s.header}>
        <h1 className={s.title}>{title}</h1>
    </header>
);

export default Header;