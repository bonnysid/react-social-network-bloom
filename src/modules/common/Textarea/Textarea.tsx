import React from 'react';
import s from './Textarea.module.css'
import {WrappedFieldProps} from "redux-form";



const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <>
            <textarea {...input} {...props} className={`${s.text} ${hasError ? 'error' : ''} ${s.nonResize}`}/>
            {/*{hasError && <span className={'error-text'}>{meta.error}</span>}*/}
        </>
    )
}
export const ResizedTextarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <>
            <textarea {...input} {...props} className={`${s.text} ${hasError ? 'error' : ''}`}/>
            {/*{hasError && <span className={'error-text'}>{meta.error}</span>}*/}
        </>
    )
}


export default Textarea;