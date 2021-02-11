import React from 'react';
import s from './Posts.module.css';
import SvgItem from "../../HelpfulComponents/SvgItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidateCreator, required} from "../../../utils/validators/validators";

const maxLength200 = maxLengthValidateCreator(200);

const InputPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.block}>
            <h1 className={s.title}>Posts</h1>
            <Field
                component={"textarea"}
                placeholder={'Input your text'}
                rows={5}
                className={`${s.text}`}
                name={"message"}
                validate={[required, maxLength200]}
            />

            <Field name={"file"} component={"input"} type='file' id={`post-1`} className={s.file} accept="image/jpeg,image/png,image/gif,image/heic,image/heif,image/webp"/>
            <label htmlFor={`post-1`} className={`${s.file_btn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.icon} urlId={'add'} />
            </label>
            <button className={`${s.btn} btn`}>Post</button>
        </form>
    )
}

export default reduxForm({form: 'posts'})(InputPostForm);