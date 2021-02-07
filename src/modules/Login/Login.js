import React from 'react';
import LoginForm from "./LoginForm";
import s from './Login.module.css'

const Login = (props) => {

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={s.container}>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;