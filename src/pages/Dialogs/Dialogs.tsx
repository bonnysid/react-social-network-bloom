import React, {useEffect} from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Friend from "./Friend/Friend";
import {useActions} from "../../hooks/useActions";
import Preloader from "../../components/Preloader";
import Messages from "./Messages";
import ChatAPI from "../../api/chat";

const Dialogs: React.FC = (props) => {
    const {dialogs, idActiveDialog, friends, isFetching} = useTypedSelector(state => state.dialogsPage)
    const {userId} = useTypedSelector(state => state.auth)
    const {getFriends, getDialogs, createDialog, selectDialog} = useActions()

    const dialogsItems = dialogs.map(dialog => (
        <Dialog
            id={dialog.id}
            key={dialog.id}
            name={dialog.username}
            time={dialog.message?.date}
            lastMsg={dialog.message?.text}
            avatarLink={dialog.photo}
            isActive={dialog.id === idActiveDialog}
            handleClick={selectDialog}
            idTo={dialog.idTo}
        />
    ))

    useEffect(() => {
        getDialogs()
        getFriends()
        ChatAPI.connectToChat(userId!)
    }, [])

    if(isFetching) return <Preloader/>

    if(!dialogsItems.length) {
        const friendsItems = friends.map(friend => <Friend key={friend.id} user={friend} handleMessaging={() => createDialog(friend.id)}/>)

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
            <Messages/>
        </main>
    );
}

export default withAuthRedirect(Dialogs)
