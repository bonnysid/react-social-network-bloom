import React from 'react';
import Message from './Message';
import s from './Messages.module.css';
import PostForm from "../../HelpfulComponents/PostForm";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../../redux/dialogsReducer.js";
import {connect} from "react-redux";

const Messages = ({messages, dialogName, newMessageText, addMessage, updateNewMessageText, joinedUser}) => {

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
                <PostForm
                    id={2}
                    isLine={true}
                    newPostText={newMessageText}
                    updateInputFieldText={updateNewMessageText}
                    addData={() => addMessage(joinedUser)}
                    placeholderBtn='Send'
                    rows={1}
                    isResize={false}
                />
            </div>
        </aside>
    );
}

const mapStateToProps = (state) => {
    const selectedDialog = state.dialogsPage.dialogs.find(dialog => dialog.isActive);

    return {
        dialogName: selectedDialog.user.name,
        newMessageText: state.dialogsPage.newMessageText,
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

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (joinedUser) => {
            dispatch(addMessageActionCreator(joinedUser));
        },
        updateNewMessageText: (e) => {
            const text = e.target.value;
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;