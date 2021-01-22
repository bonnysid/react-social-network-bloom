import Friends from "./Friends";
import {connect} from "react-redux";
import {addUserAC, deleteUserAC, onSearchChangeAC, setUsersAC} from "../../redux/usersReducer";

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
        onAddFriend: (id) => dispatch(addUserAC(id)),
        onDeleteFriend: (id) => dispatch(deleteUserAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;