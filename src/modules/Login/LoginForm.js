import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'
import {maxLengthValidateCreator, required} from "../../utils/validators/validators";
import Input from "../HelpfulComponents/Input/Input";
import createField from "../../common/createField";

const maxLength50 = maxLengthValidateCreator(50);

const LoginForm = (props) => {

    return (
        <form className={'form'} onSubmit={props.handleSubmit}>
            <h2 className='formTitle'>Sign in</h2>
            {props.error && <h3 className={s.error}>{props.error}</h3>}
            {createField(Input, 'text', 'email', 'Email', [maxLength50, required])}
            {createField(Input, 'password', 'password', 'Login', [maxLength50, required])}
            <div>
                {createField(Input, 'checkbox', 'isRemember', null, null, {className: 'checkbox'})}
                <label className={'label'} htmlFor={'isRemember'}>Remember me</label>
            </div>
            <button className={`btn ${s.btn}`}>Login</button>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);