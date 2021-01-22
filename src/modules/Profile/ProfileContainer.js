import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";

const mapPropsToState = (state) => {
    return {
        userInfo: state.profilePage.userPageInfo
    }

}

const mapDispatchToState = (dispatch) => {

}

const ProfileContainer = connect(mapPropsToState)(Profile);

export default ProfileContainer;