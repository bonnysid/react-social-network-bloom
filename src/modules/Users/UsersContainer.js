import Users from "./Users";
import {connect} from "react-redux";
import {
    followUserAC,
    unfollowUserAC,
    onSearchChangeAC,
    setUsersAC,
    setTotalCountUsersAC,
    setPageAC, clearUsers
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";

class UsersContainer extends React.Component {

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCountUsers(response.data.totalCount);
            });

    }

    componentDidMount() {
        this.getUsers();
    }

    componentWillUnmount() {
        console.log(1);
        this.props.setPage(1);
        this.props.clearUsers();
    }

    onLoadUsers = () => {
        this.props.setPage(this.props.page + 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page + 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.setTotalCountUsers(response.data.totalCount);
            });
    }

    render() {
        return <Users
            onFollowUser={this.props.onFollowUser}
            onUnfollowUser={this.props.onUnfollowUser}
            users={this.props.users}
            onLoadUsers={this.onLoadUsers}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.all,
        searchText: state.users.searchText,
        pageSize: state.users.pageSize,
        totalCountUsers: state.users.totalCountUsers,
        page: state.users.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => {
            const text = e.target.value;
            dispatch(onSearchChangeAC(text))
        },
        onFollowUser: (id) => dispatch(followUserAC(id)),
        onUnfollowUser: (id) => dispatch(unfollowUserAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalCountUsers: (count) => dispatch(setTotalCountUsersAC(count)),
        setPage: (page) => dispatch(setPageAC(page)),
        clearUsers: () => dispatch(clearUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);