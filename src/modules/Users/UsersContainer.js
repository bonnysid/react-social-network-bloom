import Users from "./Users";
import {connect} from "react-redux";
import {
    followSuccess,
    unfollowSuccess,
    onSearchChange,
    setUsers,
    setTotalCountUsers,
    setPage, resetUsers, toggleFetching, toggleFollowingProcess
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../HelpfulComponents/Preloader";
import API from "../../API/API";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.pageSize);
    }

    componentWillUnmount() {
        this.props.setPage(1);
        this.props.resetUsers();
    }

    onLoadUsers = () => {
        this.props.getUsers(this.props.page + 1, this.props.pageSize)
    }

    onFollow = (id) => {

    }

    onUnfollow = (id) => {
        this.props.toggleFollowingProcess(true, id);
        API.unfollowUser(id)
            .then(data => {
                this.props.toggleFollowingProcess(false);
                if(data.resultCode === 0) unfollowSuccess(id);
            })
    }

    render() {
        if(!this.props.users) return <Preloader/>;

        return (
            <>
                <Users
                    followUser={this.onFollow}
                    unfollowUser={this.onUnfollow}
                    users={this.props.users}
                    onLoadUsers={this.onLoadUsers}
                    followingProcess={this.props.followingProcess}
                />
                {this.props.isFetching ? <Preloader /> : null}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.all,
        searchText: state.users.searchText,
        pageSize: state.users.pageSize,
        totalCountUsers: state.users.totalCountUsers,
        page: state.users.page,
        isFetching: state.users.isFetching,
        followingProcess: state.users.followingProcess
    }
}

export default connect(mapStateToProps, {
    followUser: followSuccess, unfollowUser: unfollowSuccess, setUsers, setTotalCountUsers, setPage, resetUsers, onSearchChange, toggleFetching, toggleFollowingProcess
})(UsersContainer);