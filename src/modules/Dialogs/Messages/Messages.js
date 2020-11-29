import React from 'react';
import Message from './Message';
import s from './Messages.module.css';

const Messages = ({name, messagesData}) => {



    return (
        <aside className={`${s.content} block`}>
            <div className={s.header}>
                <h2 className={s.title}>{name}</h2>
                
            </div>
            <div className="underline"/>
            
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

            <div className="input__msg">

            </div>
        </aside>
    );
}

export default Messages;