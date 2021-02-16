import React from 'react';
import {connect} from "react-redux";
import AuthBlock from "./AuthBlock";
import Preloader from "../Preloader";

class AuthBlockContainer extends React.Component {

    render() {
        if (this.props.isFetching) return <Preloader/>

        return <AuthBlock {...this.props} loginRequest={this.props.loginRequest} right={this.props.right}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login
})

export default connect(mapStateToProps)(AuthBlockContainer);