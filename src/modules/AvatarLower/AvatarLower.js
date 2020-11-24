import React from 'react';
import s from './AvatarLower.module.css';

const AvatarLower = ({url}) => {
    return <div className={s.avatarBlock}><img className={s.image} src={url} alt="avatar"/></div>
}

export default AvatarLower;