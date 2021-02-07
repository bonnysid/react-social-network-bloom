import React from 'react';
import Message from './Message';
import s from './Messages.module.css';
import {addMessage} from "../../../redux/dialogsReducer.js";
import {connect} from "react-redux";
import PostForm from "../../HelpfulComponents/PostForm";
import MessageForm from "./MessageForm";

const Messages = ({messages, dialogName, addMessage, joinedUser}) => {

    const onMessageSend = ({message}) => {
        addMessage(joinedUser, message);
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
        joinedUser: state.users.joinedUser
    }
}

const MessagesContainer = connect(mapStateToProps, {addMessage})(Messages)

export default MessagesContainer;