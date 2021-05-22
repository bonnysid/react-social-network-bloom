import React from 'react';
import s from './Posts.module.css';
import SvgItem from "../../../components/SvgItem";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthValidateCreator, required} from "../../../utils/validators/validators";
import {ResizedTextarea} from "../../../components/Textarea/Textarea";
import helpers from '../../../components/createField';
import {IPostData, PostDataKeys} from "../../../interfaces/profile-interfaces";

const maxLength200 = maxLengthValidateCreator(200);

const InputPostForm: React.FC<InjectedFormProps<IPostData>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.block}>
            <h1 className={s.title}>Posts</h1>
            {helpers<PostDataKeys>({
                name: 'message',
                component: ResizedTextarea,
                placeholder: 'Input your text',
                validators: [required, maxLength200],
                props: {
                    rows: 5,
                    isResize: true
                }
            })}
            {helpers<PostDataKeys>({
                name: 'file',
                component: 'input',
                type: 'file',
                props: {
                    className: s.file,
                    id: 'post-1',
                    accept: 'image/jpeg,image/png,image/gif,image/heic,image/heif,image/webp'
                }
            })}
            <label htmlFor={`post-1`} className={`${s.file_btn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.icon} urlId={'add'} />
            </label>
            <button className={`${s.btn} btn`}>Post</button>
        </form>
    )
}

export default reduxForm<IPostData>({form: 'posts'})(InputPostForm);
