import React, {useEffect, useRef, useState} from 'react';
import s from './Messages.module.css';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {IMessageData} from "../../../interfaces/dialogs-interfaces";
import MessageForm from './MessageForm';
import SvgItem from "../../../components/SvgItem";
import {required} from "../../../utils/validators/validators";
import Message from "./Message";
import ChatAPI from "../../../api/chat";

const Messages: React.FC = (props) => {

    const {messages, idActiveDialog, dialogs} = useTypedSelector(state => state.dialogsPage)
    const [message, setMessage] = useState('')
    const messagesRef = useRef<HTMLDivElement>(null)
    const activeDialog = dialogs.find(d => d.id === idActiveDialog);
    const loggedUser = useTypedSelector(state => state.auth.loggedUser);
    const {getMessages} = useActions();

    const onMessageSend = (message: string) => {
        if(message.trim().length) ChatAPI.sendMessage(activeDialog!.idTo, activeDialog?.id!, loggedUser?.id!, message);
        setMessage('')
    }

    useEffect(() => {
        if (idActiveDialog !== null && activeDialog) getMessages(idActiveDialog)
    }, [idActiveDialog])

    useEffect(() => {
        messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight)
    }, [messages]);

    const handleEdit = (id: string | number) => {

    }

    if (!activeDialog) return null;

    return (
        <aside className={`${s.content} block`} onKeyDown={event => {
            if(event.key === 'Enter') onMessageSend(message);
        }
        }>
            <div className={s.header}>
                <h2 className={s.title}>{activeDialog.username}</h2>
            </div>


            <div ref={messagesRef} className={s.messages}>
                {messages.map(message => <Message
                    key={message.id}
                    id={message.id}
                    message={message.text}
                    name={message.fromUsername}
                    time={new Date(message.date).toLocaleTimeString()} />)}
            </div>

            <div className={s.input__msg}>
                <input
                    type="text"
                    placeholder='Enter your message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={`input`}
                />
                <button onClick={() => onMessageSend(message)} type={"submit"} className={s.send_button_block}>
                    <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
                </button>
                {/*<MessageForm onSubmit={onMessageSend}/>*/}
            </div>
        </aside>
    );
}

export default Messages;
