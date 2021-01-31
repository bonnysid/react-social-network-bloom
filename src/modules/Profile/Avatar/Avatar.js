import React from 'react';
import s from './Avatar.module.css';
import defaultAvatar from '../../../assets/img/user.png';

const Avatar = ({url}) => {
    return (
        <section className='block'>
            <aside className={s.content}>
                <img className={s.image} src={url ? url : defaultAvatar} alt='AVATAR'/>
            </aside>
            
            <aside className={s.btn_block}>
                <button className={`${s.btn} btn`}>Change photo</button>
            </aside>
        </section>
    );
}

export default Avatar;