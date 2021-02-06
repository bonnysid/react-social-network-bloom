import React from 'react';
import s from './Header.module.css';
import AuthBlockContainer from "../HelpfulComponents/AuthBlock/AuthBlockContainer";
import {connect} from "react-redux";

const Header = ({title}) => (
    <header className={s.header}>
        <h1 className={s.title}>{title}</h1>
        <AuthBlockContainer right={0}/>
    </header>
);

const mapStateToProps = (state) => ({
    title: state.navbar.headerTitle
})

export default connect(mapStateToProps)(Header);