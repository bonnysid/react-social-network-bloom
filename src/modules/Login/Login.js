import React from 'react';
import LoginForm from "./LoginForm";
import s from './Login.module.css'
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {compose} from "redux";
import {login} from "../../redux/reducers/authReducer";

const Login = (props) => {

    const onSubmit = (data) => {
        const {isRemember, email, password, captcha} = data;
        props.login(email, password, isRemember, captcha);
    }

    if(props.isAuth) return <Redirect to={'/news'}/>

    return (
        <div className={s.container}>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default compose(
    connect(mapStateToProps, {login}),
    withRouter
)(Login);