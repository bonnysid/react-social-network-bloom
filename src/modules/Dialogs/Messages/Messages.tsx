import React from 'react';
import s from './Messages.module.css';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {IMessageData} from "../../../interfaces/dialogs-interfaces";
import MessageForm from './MessageForm';

const Messages: React.FC = (props) => {

    const {messages, idActiveDialog, dialogs} = useTypedSelector(state => state.dialogsPage)
    const activeDialog = dialogs.find(d => d.id === idActiveDialog);
    const loggedUser = useTypedSelector(state => state.auth.loggedUser);
    const {addMessage} = useActions();
    const onMessageSend = ({message} : IMessageData) => {
        addMessage(message);
    }

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
                <MessageForm onSubmit={onMessageSend}/>
            </div>
        </aside>
    );
}

export default Messages;