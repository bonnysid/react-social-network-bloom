import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Description from './Description';
import PostsContainer from "./Posts";
import {IProfile} from "../../interfaces/profile-interfaces";

interface ProfileProps {
    profileInfo: IProfile,
    savePhoto: (photo: any) => void,
    isOwner: boolean,
    saveProfile: (profile: IProfile) => void,
    status: string,
    updateUserStatus: (status: string) => void
}

const Profile: React.FC<ProfileProps> = (props) => {
    const {profileInfo} = props;

    return (
        <>
            <main className={s.content}>
                <Avatar savePhoto={props.savePhoto} isOwner={props.isOwner} url={profileInfo.photos.large}/>
                <Description
                    isOwner={props.isOwner}
                    saveProfile={props.saveProfile}
                    profileInfo={profileInfo}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                <PostsContainer />
            </main>
        </>

    );
}

export default Profile;