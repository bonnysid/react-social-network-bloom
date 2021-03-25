import React from 'react';
import s from './Avatar.module.css';
import defaultAvatar from '../../../assets/img/user.png';
import InputFile from "../../common/InputFile/InputFile";

interface Props {
    url: string,
    isOwner: boolean,
    savePhoto: (photo: any) => void
}

const Avatar: React.FC<Props> = ({url, isOwner, savePhoto}) => {
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