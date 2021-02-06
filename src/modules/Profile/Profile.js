import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Photos from './Photos';
import Description from './Description';
import PostsContainer from "./Posts";
import Header from "../Header";

const Profile = (props) => {
    const {userInfo} = props;
    return (
        <>
            <Header title={userInfo.fullName}/>
            <main className={s.content}>
                <Avatar url={userInfo.photos.large}/>
                <Description
                    name={userInfo.fullName}
                    status={props.status}
                    contacts={userInfo.contacts}
                />
                <Photos/>
                <PostsContainer />
            </main>
        </>

    );
}

export default Profile;