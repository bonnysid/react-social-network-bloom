import React from 'react';
import AvatarLower from '../../../components/AvatarLower';
import s from './Dialog.module.css';

export interface DialogProps {
    name: string
    avatarLink?: string | null
    handleClick: (id: number) => void
    lastMsg?: string
    time?: string
    id: number
    idTo: number
    isActive: boolean
}

const Dialog: React.FC<DialogProps> = ({idTo, handleClick, name, avatarLink, lastMsg, time, id, isActive}) => {
    return (
        <div onClick={() => handleClick(id)} className={`${s.content} block ${isActive ? s.active : ''}`}>
            <AvatarLower url={avatarLink}/>
            <h2 className={s.name}>{name}</h2>
            <p className={s.msg}>{lastMsg}</p>
            <time className={s.time}>{time}</time>
        </div>
    );
}

export default Dialog;
