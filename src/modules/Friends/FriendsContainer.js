import Friends from "./Friends";
import {connect} from "react-redux";
import {followUserAC, unfollowUserAC, onSearchChangeAC, setUsersAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.all,
        searchText: state.users.searchText
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
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;