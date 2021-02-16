import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    onSearchChange,
    setPage, resetUsers, getUsers
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../HelpfulComponents/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {setHeaderTitle} from "../../redux/navbarReducer";
import {getFollowingProcess, getIsFetching, getPage, getPageSize, getTotalCountUsers} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.pageSize);
        this.props.setHeaderTitle('Users');
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCountUsers: getTotalCountUsers(state),
        page: getPage(state),
        isFetching: getIsFetching(state),
        followingProcess: getFollowingProcess(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setPage, resetUsers, onSearchChange, getUsers, setHeaderTitle
    })
)(UsersContainer);