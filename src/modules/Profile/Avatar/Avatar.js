import React from 'react';
import s from './Avatar.module.css';
import defaultAvatar from '../../../assets/img/user.png';

const Avatar = ({url, isOwner}) => {
    return (
        <section className='block'>
            <aside className={s.content}>
                <img className={s.image} src={url ? url : defaultAvatar} alt='AVATAR'/>
            </aside>
            
            <aside className={s.btn_block}>
                {isOwner && <input type='file' className={`${s.btn} btn`} placeholder={'Change photo'}/>}
            </aside>
        </section>
    );
}

export default Avatar;