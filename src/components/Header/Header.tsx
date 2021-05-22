import React from 'react';
import s from './Header.module.css';
import {useLocation} from "react-router-dom";
import AuthBlockContainer from "../AuthBlock/AuthBlockContainer";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header: React.FC = (props) => {
    const headerTitle = useTypedSelector(state => state.navbar.headerTitle)
    const location = useLocation()

    const title = location.pathname === '/login' ? 'Sign in' : headerTitle

    return (
        <header className={s.header}>
            <h1 className={s.title}>{title}</h1>
            <AuthBlockContainer right={0}/>
        </header>
    )
}


export default Header;
