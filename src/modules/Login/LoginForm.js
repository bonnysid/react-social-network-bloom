import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'
import {maxLengthValidateCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthValidateCreator(50);

const LoginForm = (props) => {

    return (
        <form className={'form'} onSubmit={props.handleSubmit}>
            <h2 className='formTitle'>Sign in</h2>
            <Field className={'input'} component={'input'} type={'text'} name={"login"} placeholder={'Login'} validate={[maxLength50, required]}/>
            <Field className={'input'} component={'input'} type={'password'} name={"password"} placeholder={'Password'} validate={[maxLength50, required]}/>
            <div>
                <Field className={'checkbox'} component={'input'} type={'checkbox'} name={"isRemember"}/>
                <label className={'label'} htmlFor={'isRemember'}>Remember me</label>
            </div>
            <button className={`btn ${s.btn}`}>Login</button>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);