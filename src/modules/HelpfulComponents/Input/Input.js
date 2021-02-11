import React from 'react';
import s from './Input.module.css';

const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <>
            {hasError && <span className={'error-text'}>{meta.error}</span>}
            <input {...input} {...props} className={`input ${hasError ? 'error' : ''}`}/>
        </>
    )
}

export default Input;