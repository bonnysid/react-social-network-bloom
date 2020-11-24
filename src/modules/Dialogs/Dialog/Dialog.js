import React from 'react';
import { NavLink } from 'react-router-dom';
import AvatarLower from '../../AvatarLower';
import s from './Dialog.module.css';
// import AvatarLower;

const Dialog = ({name, avatarLink, lastMsg, time, id}) => {
    return (
        <NavLink to={`/messages/${id}`} className={`${s.content} block`}>
            <AvatarLower url={avatarLink}/>
            <h2 className={s.name}>{name}</h2>
            <p className={s.msg}>{lastMsg}</p>
            <time className={s.time}>{time}</time>
        </NavLink>
    );
}

export default Dialog;