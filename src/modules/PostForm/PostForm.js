import React from 'react';
import s from './PostForm.module.css';
import SvgItem from "../SvgItem";

const PostForm = ({placeholderBtn, title, id, newPostText, addData, updateInputFieldText, rows = 5, isLine = false, isResize = true}) => {

    return (
        <div className={isLine ? s.block_line : s.block}>
            {!title ? null : <h1 className={s.title}>{title}</h1>}
            <textarea
                onChange={(event) => updateInputFieldText(event)}
                placeholder={'Input your text'}
                rows={rows}
                className={`${s.text}  ${!isResize ? s.notRes : ''}`}
                value={newPostText}
            />

            <input type='file' id={`${title}-${id}`} className={s.file} accept="image/jpeg,image/png,image/gif,image/heic,image/heif,image/webp"/>
            <label htmlFor={`${title}-${id}`} className={`${s.file_btn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.icon} urlId={'add'} />
            </label>

            { isLine ?
                <button className={s.send_button_block} onClick={() => addData()}>
                    <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
                </button> :
                <button
                    onClick={() => addData()}
                    className={`${s.btn} btn`}>{placeholderBtn}</button>
            }

        </div>
    )
}

export default PostForm;