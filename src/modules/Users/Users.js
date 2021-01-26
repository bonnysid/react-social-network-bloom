import React from 'react';
import User from "./User";
import Header from "../Header";
import s from "./Users.module.css";
import axios from "axios";

export default class Users extends React.Component {

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.setTotalCountUsers(response.data.totalCount);
            });

    }

    componentDidMount() {
        this.props.setPage(1);
        this.getUsers();
    }

    onLoadUsers = () => {
        this.props.setPage(this.props.page + 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page + 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.setTotalCountUsers(response.data.totalCount);
            });
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
                    <div className={s.search}></div>
                    <section className={s.friendList}>
                        {usersElements}
                    </section>
                    <div className={s.buttonContainer}>
                        <button onClick={() => this.onLoadUsers()} className={`btn ${s.button}`}>Load more</button>
                    </div>

                </main>
            </>
        )
    }
}