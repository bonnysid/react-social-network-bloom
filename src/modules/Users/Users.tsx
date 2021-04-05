import React from 'react';
import User from "./User";
import Header from "../Header";
import s from "./Users.module.css";
import {IUser} from "../../interfaces/users-interfaces";

interface UsersProps {
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    users: IUser[],
    followingProcess: number[],
    onLoadUsers: () => void
}

const Users: React.FC<UsersProps> = (props) => {

    const usersElements = props.users.map(u =>
        <User
            id={u.id}
            key={u.id}
            follow={props.follow}
            unfollow={props.unfollow}
            followed={u.followed}
            status={u.status} name={u.name}
            avatarLink={u.photos.small}
            followingProcess={props.followingProcess}
        />)


    return (
        <>
            <Header title={'Users'}/>
            <main className={s.content}>
                <div className={s.search}></div>
                <section className={s.friendList}>
                    {usersElements}
                </section>
                <div className={s.buttonContainer}>
                    <button onClick={() => props.onLoadUsers()} className={`btn ${s.button}`}>Load more</button>
                </div>

            </main>
        </>
    )
}

export default Users;