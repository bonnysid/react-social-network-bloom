import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar';
import Photos from './Photos';
import Description from './Description';
import Posts from './Posts';

const Profile = () => {
    return (
        <main className={s.content}>
            <Avatar/>
            <Description/>
            <Photos/>
            <Posts/>
        </main>
    );
}

export default Profile;