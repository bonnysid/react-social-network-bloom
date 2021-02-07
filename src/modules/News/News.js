import React from 'react';
import s from './News.module.css';
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


const News = () => {

    return (
        <p>News</p>
    )
}

export default compose(
    withAuthRedirect
)(News);