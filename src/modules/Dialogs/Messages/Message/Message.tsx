import React from 'react';
import s from './Message.module.css';
import AvatarLower from '../../../common/AvatarLower';

export interface MessageProps {
    message: string
    avatarLink?: string | null
    time: string,
    name: string
}

const Message: React.FC<MessageProps> = ({message, avatarLink, time, name}) => {

    return (
        <div className={s.content}>
            <AvatarLower url={avatarLink}/>
            <h2 className={s.name}>{name}</h2>
            <p className={s.text}>{message}</p>
            <time className={s.time}>{time}</time>
        </div>
    );
}

export default Message;