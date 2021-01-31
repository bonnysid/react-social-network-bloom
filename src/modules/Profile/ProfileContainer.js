import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setUserPageInfo, toggleFetching} from "../../redux/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id}`)
            .then(response => {
                this.props.toggleFetching(false);
                setUserPageInfo(response);
            })
    }

    render() {
        return (
            <Profile userInfo={this.props.userInfo}/>
        )
    }
}

const mapPropsToState = (state) => ({userInfo: state.profilePage.userPageInfo});

const WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapPropsToState, {setUserPageInfo, toggleFetching})(WithUrlDataProfileContainer);