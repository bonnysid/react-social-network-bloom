import React from 'react';
import s from './Header.module.css';
import Navbar from "../Navbar";
import AuthBlockContainer from "../HelpfulComponents/AuthBlock/AuthBlockContainer";

const Header = ({title}) => (
    <header className={s.header}>
        <h1 className={s.title}>{title}</h1>
        <AuthBlockContainer right={0}/>
    </header>
);

export default Header;