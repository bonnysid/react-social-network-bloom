import React from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Dialogs: React.FC = (props) => {
    const {dialogs, idActiveDialog} = useTypedSelector(state => state.dialogsPage)
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