import React from 'react';
import Message from './Message';
import s from './Messages.module.css';
import PostForm from "../../PostForm";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../../redux/state";

const Messages = ({dialog, dispatch, newMessageText}) => {


    return (
        <aside className={`${s.content} block`}>
            <div className={s.header}>
                <h2 className={s.title}>{dialog.name}</h2>
                <div className="underline"/>
            </div>

            
            <div className={s.messages}>
                {dialog.messages.map(msg => (
                    <Message
                        key={msg.id}
                        avatarLink={dialog.avatarLink}
                        message={msg.message}
                        name={dialog.name}
                        time={msg.time}
                    />
                ))}
            </div>

            <div className={s.input__msg}>
                <PostForm
                    id={2}
                    isLine={true}
                    authorInfo={dialog}
                    dispatch={dispatch}
                    newPostText={newMessageText}
                    updateInputFieldTextActionCreator={updateNewMessageTextActionCreator}
                    addDataActionCreator={addMessageActionCreator}
                    placeholderBtn='Send'
                    rows={1}
                    isResize={false}
                />
            </div>
        </aside>
    );
}

export default Messages;