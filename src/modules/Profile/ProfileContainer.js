import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setUserPageInfo, toggleFetching} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import Preloader from "../HelpfulComponents/Preloader";
import API from "../../API/API";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.getProfileInfo();
        console.log(this.getUserStatus());
    }

    getProfileInfo = () => {
        this.props.toggleFetching(true);
        const userId = this.props.match.params.id ? this.props.match.params.id : 2;
        API.getUserInfo(userId)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUserPageInfo(data);
            })
    }

    getUserStatus = () => {
        const userId = this.props.match.params.id ? this.props.match.params.id : 2;
        return API.getUserStatus(userId);
    }

    render() {
        if (!Object.keys(this.props.userInfo).length) return <Preloader/>

        return (
            <Profile userInfo={this.props.userInfo}/>
        )
    }
}

const mapPropsToState = (state) => ({userInfo: state.profilePage.userPageInfo});

const WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapPropsToState, {setUserPageInfo, toggleFetching})(WithUrlDataProfileContainer);