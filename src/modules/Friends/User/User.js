import React from 'react';
import s from 'User.module.css';
import AvatarLower from "../../HelpfulComponents/AvatarLower";
import SvgItem from "../../HelpfulComponents/SvgItem";

const User = ({status, name, avatarLink}) => {
    return (
        <div className={`${s.block} block`}>
            <AvatarLower url={avatarLink}/>
            <h2 className={s.name}>{name}</h2>
            <p className={s.status}>{status}</p>
            <button className={`${s.btn} ${s.sendBtn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
            </button>
            <button className={`${s.btn} ${s.addBtn}`}>
                <SvgItem width={'25px'} height={'25px'} className={s.send_button} urlId={'send'}/>
            </button>
        </div>
    )
}

export default User;