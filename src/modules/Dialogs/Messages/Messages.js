import React from 'react';
import Message from './Message';
import s from './Messages.module.css';

const Messages = ({name}) => {

    const messagesData = [
        {id: 1, name: 'Yana Pros', time: new Date().toTimeString().substr(0, 9), avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg', message: 'Hello'},
        {id: 2, name: 'Yana Pros', time: new Date().toTimeString().substr(0, 9), avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg', message: 'How are you?'},
    ];

    return (
        <aside className={`${s.content} block`}>
            <div className={s.header}>
                <h2 className={s.title}>{name}</h2>
                
            </div>
            <div className="underline"></div>
            
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