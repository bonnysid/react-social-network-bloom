import React from 'react';
import Message from './Message';
import s from './Messages.module.css';
import {addMessage} from "../../../redux/reducers/dialogsReducer.ts";
import {connect} from "react-redux";
import MessageForm from "./MessageForm";

const Messages = ({messages, dialogName, addMessage, loggedUser}) => {

    const onMessageSend = ({message}) => {
        addMessage(loggedUser, message);
    }

    return (
        <aside className={`${s.content} block`}>
            <div className={s.header}>
                <h2 className={s.title}>{dialogName}</h2>
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

const mapStateToProps = (state) => {
    const selectedDialog = state.dialogsPage.dialogs.find(dialog => dialog.isActive);

    return {
        dialogName: selectedDialog.user.name,
        messages: selectedDialog.messages.map(msg => (
            <Message
                key={msg.id}
                avatarLink={msg.author.avatarLink}
                message={msg.message}
                name={msg.author.name}
                time={msg.time}
            />
        )),
        loggedUser: state.auth.loggedUser
    }
}

export default connect(mapStateToProps, {addMessage})(Messages);