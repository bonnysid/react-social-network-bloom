import React from 'react';
import s from './Settings.module.css';
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Settings: React.FC = () => {
    return (
        <p>Settings</p>
    )
}

export default withAuthRedirect(Settings)