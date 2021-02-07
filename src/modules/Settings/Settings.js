import React from 'react';
import s from './Settings.module.css';
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Settings = () => {
    return (
        <p>Settings</p>
    )
}

export default compose(
    withAuthRedirect
)(Settings);