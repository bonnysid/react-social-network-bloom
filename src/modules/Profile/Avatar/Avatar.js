import React from 'react';
import s from './Avatar.module.css';

const Avatar = () => {
    return (
        <section className='block'>
            <aside className={s.content}>
                <img className={s.image} src='https://sun9-52.userapi.com/VbuS5diiKVWIdt37_zJ5Qdj99TQclDM8IfHkPA/VpKVDBLkFJ8.jpg' alt='AVATAR'/>
            </aside>
            
            <aside className={s.btn_block}>
                <button className={`${s.btn} btn`}>Change photo</button>
            </aside>
        </section>
    );
}

export default Avatar;