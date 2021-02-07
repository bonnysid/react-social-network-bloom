import React from 'react';
import s from "../../Profile/Posts/Posts.module.css";
import {Field, reduxForm} from "redux-form";
import SvgItem from "../../HelpfulComponents/SvgItem";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.block_line}>
            <Field
                component={"textarea"}
                placeholder={'Input your text'}
                rows={1}
                className={`${s.text} ${s.notRes}`}
                name={"message"}
            />

            <Field name={"file"} component={"input"} type='file' id={`post-1`} className={s.file} accept="image/jpeg,image/png,image/gif,image/heic,image/heif,image/webp"/>
            <label htmlFor={`post-1`} className={`${s.file_btn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.icon} urlId={'add'} />
            </label>
            <button className={s.send_button_block}>
                <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
            </button>
        </form>
    )
}

export default reduxForm({form: 'messageForm'})(MessageForm);