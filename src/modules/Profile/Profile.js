import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Photos from './Photos';
import Description from './Description';
import Posts from './Posts';
import {addPost} from "../../redux/state";

const Profile = ({state: {posts, newPostText}, dispatch}) => {
    return (
        <main className={s.content}>
            <Avatar/>
            <Description/>
            <Photos/>
            <Posts posts={posts} dispatch={dispatch} newPostText={newPostText}/>
        </main>
    );
}

export default Profile;