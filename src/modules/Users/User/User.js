import React from 'react';
import s from './User.module.css';
import AvatarLower from "../../HelpfulComponents/AvatarLower";
import SvgItem from "../../HelpfulComponents/SvgItem";
import SvgLink from "../../Navbar/SvgLink";
import {NavLink} from "react-router-dom";
import userPng from '../../../assets/img/user.png';

const User = ({id, status, followed, name, avatarLink, followUser, unfollowUser}) => {
    return (
        <div className={`${s.block} block`}>
            <AvatarLower url={avatarLink ? avatarLink : userPng}/>
            <NavLink to={`profile/${id}`} className={s.name}>{name}</NavLink>
            <p className={s.status}>{status}</p>
            <SvgLink link={`messages/${id}`} title={'send'} className={`${s.btn} ${s.sendBtn}`} svgClassName={s.svg}/>
            {followed ?
                <button onClick={() => unfollowUser(id)} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svgRed} urlId={'close'}/>
                </button>
                :
                <button onClick={() => followUser(id)} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svg} urlId={'add-friend'}/>
                </button>
            }
        </div>
    )
}

export default User;