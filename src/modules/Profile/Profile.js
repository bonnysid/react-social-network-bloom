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
                <Avatar isOwner={props.isOwner} url={userInfo.photos.large}/>
                <Description
                    name={userInfo.fullName}
                    status={props.status}
                    contacts={userInfo.contacts}
                    updateUserStatus={props.updateUserStatus}
                />
                <PostsContainer />
            </main>
        </>

    );
}

export default Profile;