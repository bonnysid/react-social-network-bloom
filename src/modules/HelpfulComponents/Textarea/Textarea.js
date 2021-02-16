import React from 'react';
import s from './Textarea.module.css'

const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <>
            <textarea {...input} {...props} className={`${s.text} ${hasError ? 'error' : ''} ${props.isresize ? '' : s.nonResize}`}/>
            {/*{hasError && <span className={'error-text'}>{meta.error}</span>}*/}
        </>
    )
}

export default Textarea;