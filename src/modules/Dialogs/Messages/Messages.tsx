import React from 'react';
import Message from './Message';
import s from './Messages.module.css';
import MessageForm from "./MessageForm";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Messages: React.FC = (props) => {

    const {messages, idActiveDialog, dialogs} = useTypedSelector(state => state.dialogsPage)
    const activeDialog = dialogs.find(d => d.id === idActiveDialog);
    const loggedUser = useTypedSelector(state => state.auth.loggedUser);
    // const onMessageSend = ({message}) => {
    //     addMessage(loggedUser, message);
    // }

    if(!activeDialog) return null;

    return (
        <aside className={`${s.content} block`}>
            <div className={s.header}>
                <h2 className={s.title}>{activeDialog.username}</h2>
                <div className="underline"/>
            </div>

            
            <div className={s.messages}>
                {messages}
            </div>

            <div className={s.input__msg}>
                <MessageForm />
            </div>
        </aside>
    );
}

export default Messages;