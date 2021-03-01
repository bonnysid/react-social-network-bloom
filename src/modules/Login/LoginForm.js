import React from 'react';
import {reduxForm} from "redux-form";
import s from './Login.module.css'
import {maxLengthValidateCreator, required} from "../../utils/validators/validators";
import Input from "../common/Input/Input";
import createField from "../common/createField";

const maxLength50 = maxLengthValidateCreator(50);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    console.log(captchaUrl)
    return (
        <form className={'form'} onSubmit={handleSubmit}>
            <h2 className='formTitle'>Sign in</h2>
            {error && <h3 className={s.error}>{error}</h3>}
            {createField(Input, 'text', 'email', 'Email', [maxLength50, required])}
            {createField(Input, 'password', 'password', 'Login', [maxLength50, required])}
            <div>
                {createField(Input, 'checkbox', 'isRemember', null, null, {className: 'checkbox'})}
                <label className={'label'} htmlFor={'isRemember'}>Remember me</label>
            </div>
            {captchaUrl &&
            <div className={s.captcha}>
                <img className={s.captchaImg} src={captchaUrl} alt='captcha'/>
                {createField(Input, 'text', 'captcha', 'Input your captcha', [required])}
            </div>}
            <button className={`btn ${s.btn}`}>Login</button>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);