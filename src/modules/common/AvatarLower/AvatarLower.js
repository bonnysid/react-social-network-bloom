import React from 'react';
import s from './AvatarLower.module.css';
import defaultAvatar from '../../../assets/img/user.png';

const AvatarLower = ({url}) => {
    return <div className={s.avatarBlock}><img className={s.image} src={url ? url : defaultAvatar} alt="avatar"/></div>
}

export default AvatarLower;