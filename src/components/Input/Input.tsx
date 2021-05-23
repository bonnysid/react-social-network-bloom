import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from './Input.module.css'

const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <>
            {hasError && <span className={'error-text'}>{meta.error}</span>}
            <input {...input} {...props} className={`input ${s.input} ${hasError ? 'error' : ''}`}/>
        </>
    )
}

export default Input;
