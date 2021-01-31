import Users from "./Users";
import {connect} from "react-redux";
import {
    followUser,
    unfollowUser,
    onSearchChange,
    setUsers,
    setTotalCountUsers,
    setPage, resetUsers, toggleFetching, toggleFollowingProcess
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../HelpfulComponents/Preloader";
import API from "../../API/API";

class UsersContainer extends React.Component {

    getUsers = () => {
        this.props.toggleFetching(true);
        API.getUsers(this.props.page, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCountUsers(data.totalCount);
            });

    }

    componentDidMount() {
        this.getUsers();
    }

    componentWillUnmount() {
        this.props.setPage(1);
        this.props.resetUsers();
    }

    onLoadUsers = () => {
        this.props.toggleFetching(true);
        this.props.setPage(this.props.page + 1);
        API.getUsers(this.props.page + 1, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCountUsers(data.totalCount);
            });
    }

    onFollow = (id) => {
        this.props.toggleFollowingProcess(true, id);
        API.followUser(id)
            .then(data => {
                this.props.toggleFollowingProcess(false);
                if(data.resultCode === 0) followUser(id);
            })
    }

    onUnfollow = (id) => {
        this.props.toggleFollowingProcess(true, id);
        API.unfollowUser(id)
            .then(data => {
                this.props.toggleFollowingProcess(false);
                if(data.resultCode === 0) unfollowUser(id);
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
    followUser, unfollowUser, setUsers, setTotalCountUsers, setPage, resetUsers, onSearchChange, toggleFetching, toggleFollowingProcess
})(UsersContainer);