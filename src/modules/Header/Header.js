import React from 'react';
import s from './Header.module.css';
import AuthBlockContainer from "../HelpfulComponents/AuthBlock/AuthBlockContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";

const Header = (props) => {

    const title = props.location.pathname === '/login' ? 'Sign in' : props.title

    return (
        <header className={s.header}>
            <h1 className={s.title}>{title}</h1>
            {/*<AuthBlockContainer right={0}/>*/}
        </header>
    )
};

const mapStateToProps = (state) => ({
    title: state.navbar.headerTitle
})

export default compose(
    connect(mapStateToProps),
    withRouter
)(Header);