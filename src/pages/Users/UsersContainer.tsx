import Users from "./Users";
import React, {useEffect} from "react";
import Preloader from "../../components/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useHistory} from "react-router-dom";

const UsersContainer: React.FC = () => {

    const {followingProcess, isFetching, page, all, pageSize} = useTypedSelector(state => state.users);
    const {setPage, setHeaderTitle, resetUsers, follow, unfollow, requestUsers: getUsers, selectDialog, createDialog} = useActions();
    const history = useHistory()

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

    const handleSendMessage = (id: number) => {
        createDialog(id)
    }


    if (!all) return <Preloader/>;

    return (
        <>
            <Users
                follow={follow}
                unfollow={unfollow}
                users={all}
                onLoadUsers={onLoadUsers}
                followingProcess={followingProcess}
                handleSendMessage={handleSendMessage}
            />
            {isFetching ? <Preloader/> : null}
        </>
    )
}


export default withAuthRedirect(UsersContainer);
