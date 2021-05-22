import React from 'react';
import s from "../../Profile/Posts/Posts.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import SvgItem from "../../../components/SvgItem";
import {maxLengthValidateCreator, required} from "../../../utils/validators/validators";
import {ResizedTextarea} from "../../../components/Textarea/Textarea";
import {IMessageData, IMessageDataKeys} from "../../../interfaces/dialogs-interfaces";
import helpers from "../../../components/createField";

const maxLength200 = maxLengthValidateCreator(200);

const MessageForm: React.FC<InjectedFormProps<IMessageData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.block_line}>
            {helpers<IMessageDataKeys>({
                component: ResizedTextarea,
                placeholder: 'Enter your message',
                name: 'message',
                validators: [maxLength200, required],
                props: {
                    rows: 1
                }
            })}
            {helpers<IMessageDataKeys>({
                component: 'input',
                placeholder: 'Enter your message',
                name: 'file',
                validators: [maxLength200, required],
                props: {
                    className: s.file,
                    accept: 'image/jpeg,image/png,image/gif,image/heic,image/heif,image/webp'
                }
            })}
            <label htmlFor={`post-1`} className={`${s.file_btn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.icon} urlId={'add'} />
            </label>
            <button type={"submit"} className={s.send_button_block}>
                <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
            </button>
        </form>
    )
}

export default reduxForm<IMessageData>({form: 'messageForm'})(MessageForm);
