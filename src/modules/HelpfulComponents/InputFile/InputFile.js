import React from 'react';
import s from './InputFile.module.css'


const InputFile = ({onClick, onChange, placeholder}) => {
    return (
        <>
            <input onChange={onChange} id={'file'} type="file" className={s.input}/>
            <label onClick={onClick} htmlFor={'file'} className={`btn ${s.btn}`}>{placeholder}</label>
        </>

    );
}

export default InputFile;