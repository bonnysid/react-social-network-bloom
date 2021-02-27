import React from 'react';
import s from "../../Profile/Posts/Posts.module.css";
import {Field, reduxForm} from "redux-form";
import SvgItem from "../../common/SvgItem";
import {maxLengthValidateCreator, required} from "../../../utils/validators/validators";
import Textarea from "../../common/Textarea/Textarea";

const maxLength200 = maxLengthValidateCreator(200);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.block_line}>
            <Field
                component={Textarea}
                placeholder={'Input your text'}
                rows={1}
                isResize={true}
                name={"message"}
                validate={[maxLength200, required]}
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