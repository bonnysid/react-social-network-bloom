import React from 'react';
import s from './Friends.module.css';
import User from "./User";

const Friends = ({users, searchText, onAddFriend, onDeleteFriend, onSendMessage, onSearchChange}) => {
    const usersElements = users.map(u =>
        <User
            id={u.id}
            key={u.id}
            onAddFriend={onAddFriend}
            onDeleteFriend={onDeleteFriend}
            onSendMsg={onSendMessage}
            isFriend={u.isFriend}
            status={u.status} name={u.name}
            avatarLink={u.avatarLink}
        />)

    return (
        <main className={s.content}>
            <div></div>
            <section className={s.friendList}>
                {usersElements}
            </section>
        </main>
    )
}

export default Friends;