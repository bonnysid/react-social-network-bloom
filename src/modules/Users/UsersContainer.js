import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    onSearchChange,
    setPage, resetUsers
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../HelpfulComponents/Preloader";

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

    render() {
        if(!this.props.users) return <Preloader/>;

        return (
            <>
                <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
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
    follow, unfollow, setPage, resetUsers, onSearchChange
})(UsersContainer);