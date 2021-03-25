import React from 'react';
import {Redirect} from "react-router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const withAuthRedirect = (Component: React.FC | React.ComponentClass) => {

    const WithAuthRedirectComponent: React.FC = (props) => {
        const isAuth = useTypedSelector(state => state.auth.isAuth)
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }

    return WithAuthRedirectComponent;
}

export default withAuthRedirect;