import React from 'react';
import LoginForm from "./LoginForm";
import s from './Login.module.css'
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {login} from "../../redux/authReducer";

const Login = (props) => {

    const onSubmit = (data) => {
        const {isRemember, login, password} = data;
        props.login(login, password, isRemember);
    }

    return (
        <div className={s.container}>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {login}),
    withRouter
)(Login);