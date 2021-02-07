import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'

const LoginForm = (props) => {


    return (
        <form className={'form'} onSubmit={props.handleSubmit}>
            <h2 className='formTitle'>Sign in</h2>
            <Field className={'input'} component={'input'} type={'text'} name={"login"} placeholder={'Login'}/>
            <Field className={'input'} component={'input'} type={'password'} name={"password"} placeholder={'Password'}/>
            <div>
                <Field className={'checkbox'} component={'input'} type={'checkbox'} name={"isRemember"}/>
                <label className={'label'} htmlFor={'isRemember'}>Remember me</label>
            </div>
            <button className={`btn ${s.btn}`}>Login</button>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);