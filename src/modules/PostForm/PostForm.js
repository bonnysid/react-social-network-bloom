import React from 'react';
import s from './PostForm.module.css';
import SvgItem from "../SvgItem";

const PostForm = ({placeholderBtn, title, id, onPost}) => {
    return (
        <div className={s.block}>
            <h1 className={s.title}>{title}</h1>
            <textarea placeholder={'Input your text'} rows={5} className={s.text}/>

            <input type='file' id={`${title}-${id}`} className={s.file} accept="image/jpeg,image/png,image/gif,image/heic,image/heif,image/webp"/>
            <label htmlFor={`${title}-${id}`} className={`${s.file_btn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.icon} urlId={'fileImg'} />
            </label>
            <button onClick={onPost} className={`${s.btn} btn`}>{placeholderBtn}</button>
        </div>
    )
}

export default PostForm;