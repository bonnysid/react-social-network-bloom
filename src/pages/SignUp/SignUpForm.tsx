import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './SignUp.module.css'
import {maxLengthValidateCreator, required} from "../../utils/validators/validators";
import Input from "../../components/Input/Input";
import helpers from "../../components/createField";

const maxLength50 = maxLengthValidateCreator(50);

const SignUpForm: React.FC<InjectedFormProps> = ({handleSubmit, error}) => {
    return (
        <form className={'form'} onSubmit={handleSubmit}>
            <h2 className='formTitle'>Sign up</h2>
            {error && <h3 className={s.error}>{error}</h3>}
            {helpers({
                component: Input,
                type: 'text',
                name: 'email',
                placeholder: 'Email',
                validators: [maxLength50, required]
            })}
            {helpers({
                component: Input,
                type: 'text',
                name: 'username',
                placeholder: 'Username',
                validators: [maxLength50, required]
            })}
            {helpers({
                component: Input,
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                validators: [maxLength50, required]
            })}
            <button className={`btn ${s.btn}`}>SignUp</button>
        </form>
    )
}

export default reduxForm({form: 'signUp'})(SignUpForm);
