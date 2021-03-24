import Users from "./Users";
import {connect, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
    getFollowingProcess,
    getIsFetching,
    getPage,
    getPageSize,
    getTotalCountUsers,
    getUsers
} from "../../redux/usersSelectors";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const UsersContainer: React.FC = () => {

    const {followingProcess, isFetching, page, all, pageSize} = useTypedSelector(state => state.users);
    const {setPage, setHeaderTitle, resetUsers, follow, unfollow, requestUsers: getUsers} = useAction();

    useEffect(() => {
        getUsers(page, pageSize);
        setHeaderTitle('Users');
        return () => {
            setPage(1);
            resetUsers();
        }
    }, [])

    const onLoadUsers = () => {
        getUsers(page + 1, pageSize);
    }


    if (!all) return <Preloader/>;

    return (
        <>
            <Users
                follow={follow}
                unfollow={unfollow}
                all={all}
                onLoadUsers={onLoadUsers}
                followingProcess={followingProcess}
            />
            {isFetching ? <Preloader/> : null}
        </>
    )
}


export default withAuthRedirect(UsersContainer);