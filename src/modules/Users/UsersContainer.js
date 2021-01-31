import Users from "./Users";
import {connect} from "react-redux";
import {
    followUser,
    unfollowUser,
    onSearchChange,
    setUsers,
    setTotalCountUsers,
    setPage, resetUsers, toggleFetching
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Preloader from "../HelpfulComponents/Preloader";

class UsersContainer extends React.Component {

    getUsers = () => {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCountUsers(response.data.totalCount);
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page + 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                // this.props.setTotalCountUsers(response.data.totalCount);
            });
    }

    render() {
        if(!this.props.users) return <Preloader/>;

        return (
            <>
                <Users
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    users={this.props.users}
                    onLoadUsers={this.onLoadUsers}
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
        isFetching: state.users.isFetching
    }
}

export default connect(mapStateToProps, {
    followUser, unfollowUser, setUsers, setTotalCountUsers, setPage, resetUsers, onSearchChange, toggleFetching
})(UsersContainer);