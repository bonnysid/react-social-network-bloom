import React, {useEffect} from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Friend from "./Friend/Friend";
import {useActions} from "../../hooks/useActions";
import Preloader from "../common/Preloader";

const ws = new WebSocket('wss://localhost:8080/api/1.0/chat')

const Dialogs: React.FC = (props) => {
    const {dialogs, idActiveDialog, friends, isFetching} = useTypedSelector(state => state.dialogsPage)
    const {getFriends, getDialogs, createDialog} = useActions()

    const dialogsItems = dialogs.map(dialog => (
        <Dialog
            id={dialog.id}
            key={dialog.id}
            name={dialog.username}
            time={dialog.message?.date}
            lastMsg={dialog.message?.text}
            avatarLink={dialog.photo}
            isActive={dialog.id === idActiveDialog}
        />
    ))

    useEffect(() => {
        getDialogs()
        getFriends()
    }, [])

    if(isFetching) return <Preloader/>

    if(!dialogsItems.length) {
        const friendsItems = friends.map(friend => <Friend user={friend} handleMessaging={() => createDialog(friend.id)}/>)

        return (
            <main className={`${s.content} ${s.content__empty}`}>
                <h1>You don't have dialogs. Do you wanna start messaging with your friends?</h1>
                <div className={s.friend__list}>
                    {friendsItems}
                </div>
            </main>
        )
    }

    return (
        <main className={`${s.content}`}>
            <aside className={s.people}>
                {dialogsItems}
            </aside>
            <MessagesContainer/>
        </main>
    );
}

export default withAuthRedirect(Dialogs)