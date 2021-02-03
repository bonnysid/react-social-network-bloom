import React from 'react';
import {connect} from "react-redux";
import AuthBlock from "./AuthBlock";
import axios from "axios";
import {setAuthUserInfo, toggleFetching} from "../../../redux/authReducer";
import Preloader from "../Preloader";

class AuthBlockContainer extends React.Component {

    componentDidMount() {
        this.loginRequest();
    }

    loginRequest = () => {

    }

    render() {
        if (this.props.isFetching) return <Preloader/>

        return <AuthBlock {...this.props} loginRequest={this.loginRequest} right={this.props.right}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserInfo, toggleFetching})(AuthBlockContainer);