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
import {useActive} from "../../../hooks/useActive";

const Messages: React.FC = (props) => {

    const {messages, idActiveDialog, dialogs} = useTypedSelector(state => state.dialogsPage)
    const [message, setMessage] = useState('')
    const {isActive: isEdit, toggle: toggleEdit} = useActive(false)
    const [editId, setEditId] = useState<number | string>();
    const messagesRef = useRef<HTMLDivElement>(null)
    const activeDialog = dialogs.find(d => d.id === idActiveDialog);
    const loggedUser = useTypedSelector(state => state.auth.loggedUser);
    const {getMessages, updateMessage} = useActions();

    const onMessageSend = (message: string) => {
        if (message.trim().length) ChatAPI.sendMessage(activeDialog!.idTo, activeDialog?.id!, loggedUser?.id!, message);
        setMessage('')
    }

    useEffect(() => {
        if (idActiveDialog !== null && activeDialog) getMessages(idActiveDialog)
    }, [idActiveDialog])

    useEffect(() => {
        messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight)
    }, [messages]);

    const handleEdit = (id: string | number, text: string) => {
        toggleEdit()
        setEditId(id)
        setMessage(text)
    }

    const handleUpdate = (id: string | number) => {
        toggleEdit()
        setMessage('')
        updateMessage(id, message)
    }

    if (!activeDialog) return null;

    return (
        <aside className={`${s.content} block`} onKeyDown={event => {
            if (event.key === 'Enter') onMessageSend(message);
        }
        }>
            <div className={s.header}>
                <h2 className={s.title}>{activeDialog.username}</h2>
            </div>


            <div ref={messagesRef} className={s.messages}>
                {messages.map(message => <Message
                    key={message.id}
                    id={message.id}
                    handleEdit={() => handleEdit(message.id, message.text)}
                    message={message.text}
                    name={message.fromUsername}
                    time={new Date(message.date).toLocaleTimeString()}/>)}
            </div>

            <div className={`${s.input__msg} ${isEdit ? s.isEdit : ''}`}>
                <input
                    type="text"
                    placeholder='Enter your message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={`input`}
                />
                {isEdit
                    ? <>
                        <button onClick={() => handleUpdate(editId!)} type={"submit"} className={s.send_button_block}>
                            <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'refresh'}/>
                        </button>
                        <button onClick={() => {
                            setMessage('')
                            toggleEdit()
                        }} className={s.send_button_block}>
                            <SvgItem width={'25px'} height={'25px'} className={s.close_btn} urlId={'close'}/>
                        </button>
                    </>
                    : <button onClick={() => onMessageSend(message)} type={"submit"} className={s.send_button_block}>
                        <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
                    </button>
                }
                {/*<MessageForm onSubmit={onMessageSend}/>*/}
            </div>
        </aside>
    );
}

export default Messages;
