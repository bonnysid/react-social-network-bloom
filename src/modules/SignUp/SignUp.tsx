import React from 'react';
import LoginForm from "./SignUpForm";
import s from './SignUp.module.css'
import {Redirect} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const SignUp: React.FC = (props) => {

    const {isAuth} = useTypedSelector(state => state.auth)
    const {registration} = useActions();

    const onSubmit = (data: any) => {
        const {email, password, username} = data;
        registration(email, username, password);
    }

    if(isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={s.container}>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default SignUp;