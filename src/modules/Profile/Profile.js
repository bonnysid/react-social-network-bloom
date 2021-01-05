import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Photos from './Photos';
import Description from './Description';
import PostsContainer from "./Posts";

const Profile = () => {
    return (
        <main className={s.content}>
            <Avatar url={'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg'}/>
            <Description/>
            <Photos/>
            <PostsContainer />
        </main>
    );
}

export default Profile;