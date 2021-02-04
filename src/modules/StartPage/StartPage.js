import React from 'react';
import {Redirect} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useEffect} from "react/cjs/react.production.min";
import {connect} from "react-redux";
import {loginRequest} from "../../redux/authReducer";
import {compose} from "redux";
import Preloader from "../HelpfulComponents/Preloader";

class StartPage extends React.Component {
    componentDidMount() {
        this.props.loginRequest();
    }

    render() {
        if(this.props.isFetching) return <Preloader/>

        return <Redirect to='/news'/>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {loginRequest})
)(StartPage);