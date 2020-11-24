import React from 'react';
import s from './Dialog.module.css';

const Dialog = ({name, avatarLink, lastMsg, time}) => {
    return (
        <div className={`${s.content} block`}>
            <div className={s.avatar}><img className={s.image} src={avatarLink} alt="avatar"/></div>
            <p className={s.name}>{name}</p>
            <p className={s.msg}>{lastMsg}</p>
            <p className={s.time}>{time}</p>
        </div>
    );
}

export default Dialog;