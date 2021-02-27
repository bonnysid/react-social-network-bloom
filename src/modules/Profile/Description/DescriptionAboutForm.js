import React from 'react';
import {reduxForm} from 'redux-form';
import createField from "../../common/createField";
import SingleDescription from "./SingleDescription";
import Input from "../../common/Input/Input";
import s from "../Posts/Posts.module.css";

const DescriptionAboutForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <h3 className={s.error}>{error}</h3>}
            <SingleDescription title={'About'}/>{createField(Input,'text', 'aboutMe', 'about you')}
            <SingleDescription title={'Looking for a job'} />{createField(Input,'checkbox', 'lookingForAJob', 'about you')}
            <SingleDescription title={'Job description'} />{createField(Input,'text', 'lookingForAJobDescription', 'about your job')}
            <button className='btn'>Save</button>
        </form>
    )
}

export default reduxForm({form: 'description'})(DescriptionAboutForm);