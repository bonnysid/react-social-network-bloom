import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserInfo, getUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import Preloader from "../HelpfulComponents/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.getProfileInfo();
    }

    getProfileInfo = () => {
        const userId = this.props.match.params.id ? this.props.match.params.id : 2;
        this.props.getUserInfo(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        if (!Object.keys(this.props.userInfo).length) return <Preloader/>

        return (
            <Profile userInfo={this.props.userInfo} status={this.props.status}/>
        )
    }
}


const mapPropsToState = (state) => ({
    userInfo: state.profilePage.userPageInfo,
    userStatus: state.profilePage.userStatus
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapPropsToState, {getUserInfo, getUserStatus})
)(ProfileContainer);