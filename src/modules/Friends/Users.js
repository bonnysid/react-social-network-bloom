import React from 'react';
import User from "./User";
import Header from "../Header";
import s from "./Users.module.css";
import axios from "axios";

export default class Users extends React.Component {

    getUsers = () => {
        if(this.props.users.length === 3) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const usersElements = this.props.users.map(u =>
            <User
                id={u.id}
                key={u.id}
                onFollowUser={this.props.onFollowUser}
                onUnfollowUser={this.props.onUnfollowUser}
                followed={u.followed}
                status={u.status} name={u.name}
                avatarLink={u.photos.small}
            />)



        return (
            <>
                <Header title={'Users'}/>
                <main className={s.content}>
                    <div></div>
                    <section className={s.friendList}>
                        {usersElements}
                    </section>
                </main>
            </>
        )
    }
}