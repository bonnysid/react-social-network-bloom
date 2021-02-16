import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {initialized} from "../redux/appReducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const withAuthRedirect = (Component) => {

    const withAuthRedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }

    return connect(mapStateToProps)(withAuthRedirectComponent);
}

export default withAuthRedirect;