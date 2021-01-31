import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setUserPageInfo, toggleFetching} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import Preloader from "../HelpfulComponents/Preloader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.getProfileInfo();
        console.log(this.getUserStatus());
    }

    getProfileInfo = async () => {
        this.props.toggleFetching(true);
        await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUserPageInfo(response.data);
            })
    }

    getUserStatus = () => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${this.props.match.params.id}`)
            .then(response => response.data);
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