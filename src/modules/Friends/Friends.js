import React from 'react';
import s from './Friends.module.css';
import User from "./User";
import Header from "../Header";
import axios from "axios";

const Friends = ({users, setUsers, searchText, onFollowUser, onUnfollowUser, onSendMessage, onSearchChange}) => {

    if(users.length === 3) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items);
            });
    }

    const usersElements = users.map(u =>
        <User
            id={u.id}
            key={u.id}
            onFollowUser={onFollowUser}
            onUnfollowUser={onUnfollowUser}
            onSendMsg={onSendMessage}
            followed={u.followed}
            status={u.status} name={u.name}
            avatarLink={u.photos.small}
        />)



    return (
        <>
            <Header title={Friends}/>
            <main className={s.content}>
                <div></div>
                <section className={s.friendList}>
                    {usersElements}
                </section>
            </main>
        </>
    )
}

export default Friends;