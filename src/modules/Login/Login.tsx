import React from 'react';
import LoginForm from "./LoginForm";
import s from './Login.module.css'
import {Redirect} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Login: React.FC = (props) => {

    const {captchaUrl, isAuth} = useTypedSelector(state => state.auth)
    const {login} = useActions();

    const onSubmit = (data: any) => {
        const {isRemember, email, password, captcha} = data;
        login(email, password, isRemember, captcha);
    }

    if(isAuth) return <Redirect to={'/news'}/>

    return (
        <div className={s.container}>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

export default Login;