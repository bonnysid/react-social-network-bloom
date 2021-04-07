import React from 'react';
import { NavLink } from 'react-router-dom';
import AvatarLower from '../../common/AvatarLower';
import s from './Dialog.module.css';

export interface DialogProps {
    name: string
    avatarLink?: string | null
    lastMsg?: string
    time: string
    id: number | string
    isActive: boolean
}

const Dialog: React.FC<DialogProps> = ({name, avatarLink, lastMsg, time, id, isActive}) => {
    return (
        <NavLink to={`/messages/${id}`} className={`${s.content} block ${isActive ? s.active : ''}`} activeClassName={s.active}>
            <AvatarLower url={avatarLink}/>
            <h2 className={s.name}>{name}</h2>
            <p className={s.msg}>{lastMsg}</p>
            <time className={s.time}>{time}</time>
        </NavLink>
    );
}

export default Dialog;