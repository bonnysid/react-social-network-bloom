import React from 'react';
import s from './Friends.module.css';
import User from "./User";
import Header from "../Header";

const Friends = ({users, setUsers, searchText, onAddFriend, onDeleteFriend, onSendMessage, onSearchChange}) => {

    if(users.length === 0) {
        setUsers([
            {id: 1, isFriend: true, isOnline: true, name: 'Yana Pros', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg', status: 'what is it?'},
            {id: 2, isFriend: true, isOnline: true, name: 'Ira Pauchok', avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f', status: 'time to changes'},
            {id: 3, isFriend: false, isOnline: false, name: 'Nikita Brekhov', avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b', status: 'go cs!?'},
        ]);
    }

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