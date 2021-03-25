import React from 'react';
import s from './InputFile.module.css'

interface Props {
    onClick?: (e: React.MouseEvent<HTMLLabelElement>) => void,
    onChange: (e: any) => void,
    placeholder?: string
}

const InputFile: React.FC<Props> = ({onClick, onChange, placeholder}) => {
    return (
        <>
            <input onChange={onChange} id={'file'} type="file" className={s.input}/>
            <label onClick={onClick} htmlFor={'file'} className={`btn ${s.btn}`}>{placeholder}</label>
        </>

    );
}

export default InputFile;