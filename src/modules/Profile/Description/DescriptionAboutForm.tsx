import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import createField from "../../common/createField";
import SingleDescription from "./SingleDescription";
import Input from "../../common/Input/Input";
import s from "../Posts/Posts.module.css";
import {IProfile} from "../../../interfaces/profile-interfaces";

const DescriptionAboutForm: React.FC<InjectedFormProps> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <h3 className={s.error}>{error}</h3>}
            <div className={s.itemEditBlock}><SingleDescription title={'About'}/>{createField({
                component: Input,
                type: 'text',
                name: 'aboutMe',
                placeholder: 'about you'
            })}</div>
            <div className={s.itemEditBlock}><SingleDescription title={'Looking for a job'}/>{createField({
                component: Input,
                type: 'checkbox',
                name: 'lookingForAJob',
                placeholder: 'about you'
            })}</div>
            <div className={s.itemEditBlock}><SingleDescription title={'Job description'}/>{createField({
                component: Input,
                type: 'text',
                name: 'lookingForAJobDescription',
                placeholder: 'about your job'
            })}</div>
            <button className='btn'>Save</button>
        </form>
    )
}

// @ts-ignore
export default reduxForm({form: 'description'})(DescriptionAboutForm);