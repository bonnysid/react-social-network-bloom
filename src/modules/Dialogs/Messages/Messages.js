import React from 'react';
import Message from './Message';
import s from './Messages.module.css';
import PostForm from "../../PostForm";

const Messages = ({name, messagesData, dispatch, newMessageText}) => {



    return (
        <aside className={`${s.content} block`}>
            <div className={s.header}>
                <h2 className={s.title}>{name}</h2>
                <div className="underline"/>
            </div>

            
            <div className={s.messages}>
                {messagesData.map(msg => (
                    <Message 
                        avatarLink={msg.avatarLink}
                        message={msg.message}
                        name={msg.name}
                        time={msg.time}
                    />
                ))}
            </div>

            <div className={s.input__msg}>
                <PostForm
                    id={2}
                    isLine={true}
                    dispatch={dispatch}
                    newPostText={newMessageText}
                    placeholderBtn='Send'
                    rows={1}
                    isResize={false}
                />
            </div>
        </aside>
    );
}

export default Messages;