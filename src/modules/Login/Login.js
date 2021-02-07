import React from 'react';
import LoginForm from "./LoginForm";
import s from './Login.module.css'
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {setHeaderTitle} from "../../redux/navbarReducer";
import {compose} from "redux";

const Login = (props) => {

    const onSubmit = (data) => {
        console.log(data);
    }

    if(props.isAuth) {
        props.setHeaderTitle('news')
        return <Redirect to={'/news'}/>
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
    connect(mapStateToProps, {setHeaderTitle}),
    withRouter
)(Login);