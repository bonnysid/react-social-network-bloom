import Users from "./Users";
import {connect} from "react-redux";
import {
    followUserAC,
    unfollowUserAC,
    onSearchChangeAC,
    setUsersAC,
    setTotalCountUsersAC,
    setPageAC
} from "../../redux/usersReducer";

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
        setPage: (page) => dispatch(setPageAC(page))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;