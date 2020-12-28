import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Photos from './Photos';
import Description from './Description';
import Posts from './Posts';
import {addPost} from "../../redux/state";

const Profile = ({state: {posts, newPostText}, dispatch, joinedUser}) => {
    return (
        <main className={s.content}>
            <Avatar url={'https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg'}/>
            <Description/>
            <Photos/>
            <Posts posts={posts} dispatch={dispatch} newPostText={newPostText} joinedUser={joinedUser}/>
        </main>
    );
}

export default Profile;