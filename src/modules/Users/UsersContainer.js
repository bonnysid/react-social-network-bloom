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
import Preloader from "../HelpfulComponents/Preloader";
import API from "../../API/api";

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