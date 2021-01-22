import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Photos from './Photos';
import Description from './Description';
import PostsContainer from "./Posts";
import Header from "../Header";

const Profile = ({userInfo}) => {
    return (
        <>
            <Header title={userInfo.name}/>
            <main className={s.content}>
                <Avatar url={userInfo.avatarLink}/>
                <Description
                    name={userInfo.name}
                    status={userInfo.status}
                    gitHubLink={userInfo.links.github}
                    instaLink={userInfo.links.instagram}
                />
                <Photos/>
                <PostsContainer />
            </main>
        </>

    );
}

export default Profile;