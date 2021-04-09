import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './Login.module.css'
import {maxLengthValidateCreator, required} from "../../utils/validators/validators";
import Input from "../common/Input/Input";
import createField from "../common/createField";

const maxLength50 = maxLengthValidateCreator(50);

interface Props {
    captchaUrl: string | null
}

const LoginForm: React.FC<Props & InjectedFormProps<{}, Props>> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={'form'} onSubmit={handleSubmit}>
            <h2 className='formTitle'>Sign in</h2>
            {error && <h3 className={s.error}>{error}</h3>}
            {createField({
                component: Input,
                type: 'text',
                name: 'email',
                placeholder: 'Email',
                validators: [maxLength50, required]
            })}
            {createField({
                component: Input,
                type: 'password',
                name: 'password',
                placeholder: 'Login',
                validators: [maxLength50, required]
            })}
            <div>
                {createField({
                    component: Input,
                    type: 'checkbox',
                    name: 'isRemember',
                    props: {className: 'checkbox'}
                })}
                <label className={'label'} htmlFor={'isRemember'}>Remember me</label>
            </div>
            {captchaUrl &&
            <div className={s.captcha}>
                <img className={s.captchaImg} src={captchaUrl} alt='captcha'/>
                {createField({
                    component: Input,
                    type: 'text',
                    name: 'captcha',
                    placeholder: 'Input your captcha',
                    validators: [required]
                })}
            </div>}
            <button className={`btn ${s.btn}`}>Login</button>
        </form>
    )
}

export default reduxForm<{}, Props>({form: 'login'})(LoginForm);