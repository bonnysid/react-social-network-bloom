import Friends from "../Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.users.all,
        searchText: state.users.searchText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsContainer = connect()(Friends);

export default FriendsContainer;