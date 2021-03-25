import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useHistory, useParams} from "react-router-dom";
import Preloader from "../common/Preloader";
import withSuspense from "../../hoc/withSuspense";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface RouteParams {
    id: string
}

const ProfileContainer: React.FC = (props) => {

    const {isFetching, userStatus, userPageInfo: userInfo} = useTypedSelector(state => state.profilePage)
    const yourId = useTypedSelector(state => state.auth.userId)
    const {id} = useParams<RouteParams>();
    const {savePhoto, saveProfile, updateUserStatus, getUserInfo} = useActions();
    const history = useHistory();

    useEffect(() => {
        getProfileInfo()
    }, [])

    useEffect(() => getProfileInfo(), [id])

    const getProfileInfo = () => {
        let userId = id ? id : yourId;
        if (!userId) history.push('/login');
        getUserInfo(userId);
    }


    if (!Object.keys(userInfo).length || isFetching) return <Preloader/>

    return (
        <Profile saveProfile={saveProfile} savePhoto={savePhoto}
                 isOwner={!id} updateUserStatus={updateUserStatus}
                 profileInfo={userInfo} status={userStatus}/>
    )

}

export default withSuspense(ProfileContainer)