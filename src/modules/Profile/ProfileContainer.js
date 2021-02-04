import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
    }
}

const mapPropsToState = (state) => {
    return {
        userInfo: state.profilePage.userPageInfo
    }

}

const mapDispatchToState = (dispatch) => {

}

// const ProfileContainer = connect(mapPropsToState)(Profile);

export default ProfileContainer;