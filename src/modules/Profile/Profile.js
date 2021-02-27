import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Description from './Description';
import PostsContainer from "./Posts";

const Profile = (props) => {
    const {userInfo} = props;

    return (
        <>
            <main className={s.content}>
                <Avatar savePhoto={props.savePhoto} isOwner={props.isOwner} url={userInfo.photos.large}/>
                <Description
                    user={userInfo}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                <PostsContainer />
            </main>
        </>

    );
}

export default Profile;