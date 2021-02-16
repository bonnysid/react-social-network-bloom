import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {setHeaderTitle} from "../../../redux/navbarReducer";

const RedirectWithChangeHeader = (props) => {
    props.setHeaderTitle(props.title);
    return (
        <Redirect {...props} />
    )
}

export default connect(null, {setHeaderTitle})(RedirectWithChangeHeader);