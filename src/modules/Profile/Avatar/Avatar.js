import React from 'react';
import s from './Avatar.module.css';
import defaultAvatar from '../../../assets/img/user.png';
import InputFile from "../../HelpfulComponents/InputFile/InputFile";

const Avatar = ({url, isOwner, savePhoto}) => {
    return (
        <section className='block'>
            <aside className={s.content}>
                <img className={s.image} src={url ? url : defaultAvatar} alt='AVATAR'/>
            </aside>

            {isOwner &&
            <aside className={s.btn_block}>
                <InputFile onChange={savePhoto} placeholder={'Change photo'}/>
            </aside>}
        </section>
    );
}

export default Avatar;