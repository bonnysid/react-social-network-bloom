import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserInfo, savePhoto, saveProfile, updateUserStatus} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import withSuspense from "../../hoc/withSuspense";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.getProfileInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.props.isFetching && prevProps.match.params.id !== this.props.match.params.id) {
            this.getProfileInfo();
        }
    }

    getProfileInfo = () => {
        let userId = this.props.match.params.id ? this.props.match.params.id : this.props.yourId;
        if (!userId) this.props.history.push('/login');
        this.props.getUserInfo(userId);
    }

    render() {
        if (!Object.keys(this.props.userInfo).length || this.props.isFetching) return <Preloader/>

        return (
            <Profile saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.id} updateUserStatus={this.props.updateUserStatus} userInfo={this.props.userInfo} status={this.props.userStatus}/>
        )
    }
}


const mapPropsToState = (state) => ({
    userInfo: state.profilePage.userPageInfo,
    yourId: state.auth.userId,
    isFetching: state.profilePage.isFetching,
    userStatus: state.profilePage.userStatus
});

export default compose(
    withSuspense,
    withRouter,
    connect(mapPropsToState, {getUserInfo, updateUserStatus, savePhoto, saveProfile})
)(ProfileContainer);