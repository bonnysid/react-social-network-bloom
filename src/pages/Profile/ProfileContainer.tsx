import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useHistory, useParams} from "react-router-dom";
import Preloader from "../../components/Preloader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface RouteParams {
    id: string
}

const ProfileContainer: React.FC = (props) => {
    const {isFetching, userStatus, userPageInfo} = useTypedSelector(state => state.profilePage)
    const yourId = useTypedSelector(state => state.auth.userId)
    const {id} = useParams<RouteParams>();
    const {savePhoto, saveProfile, updateUserStatus, getUserInfo, getPosts} = useActions();
    const history = useHistory();

    useEffect(() => getProfileInfo(), [id])

    const getProfileInfo = () => {
        let userId = id ? id : yourId;
        if (!userId) history.push('/login');
        else {
            getPosts(userId);
            getUserInfo(userId);
        }
    }


    if (!Object.keys(userPageInfo).length || isFetching) return <Preloader/>

    return (
        <Profile
            saveProfile={saveProfile}
            savePhoto={savePhoto}
            isOwner={!id}
            updateUserStatus={updateUserStatus}
            profileInfo={userPageInfo}
            status={userStatus}/>
    )

}

export default ProfileContainer
