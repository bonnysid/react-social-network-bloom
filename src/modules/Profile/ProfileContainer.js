import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserInfo, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import Preloader from "../HelpfulComponents/Preloader";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.getProfileInfo();
    }

    getProfileInfo = () => {
        const userId = this.props.match.params.id ? this.props.match.params.id : this.props.yourId;
        if (!userId) this.props.history.push('/login');
        this.props.getUserInfo(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        if (!Object.keys(this.props.userInfo).length) return <Preloader/>

        return (
            <Profile updateUserStatus={this.props.updateUserStatus} userInfo={this.props.userInfo} status={this.props.userStatus}/>
        )
    }
}


const mapPropsToState = (state) => ({
    userInfo: state.profilePage.userPageInfo,
    yourId: state.auth.userId,
    userStatus: state.profilePage.userStatus
});

export default compose(
    withRouter,
    connect(mapPropsToState, {getUserInfo, getUserStatus, updateUserStatus})
)(ProfileContainer);