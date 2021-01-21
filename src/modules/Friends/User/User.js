import React from 'react';
import s from './User.module.css';
import AvatarLower from "../../HelpfulComponents/AvatarLower";
import SvgItem from "../../HelpfulComponents/SvgItem";
import SvgLink from "../../Navbar/SvgLink";

const User = ({id, status, isFriend, name, avatarLink, onAddFriend, onDeleteFriend, onSendMsg}) => {
    return (
        <div className={`${s.block} block`}>
            <AvatarLower url={avatarLink}/>
            <h2 className={s.name}>{name}</h2>
            <p className={s.status}>{status}</p>
            <SvgLink link={`messages/${id}`} title={'send'} className={`${s.btn} ${s.sendBtn}`} svgClassName={s.svg}/>
            {isFriend ?
                <button onClick={() => onDeleteFriend(id)} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svgRed} urlId={'close'}/>
                </button>
                :
                <button onClick={() => onAddFriend(id)} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svg} urlId={'add-friend'}/>
                </button>
            }

        </div>
    )
}

export default User;