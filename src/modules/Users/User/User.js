import React from 'react';
import s from './User.module.css';
import AvatarLower from "../../HelpfulComponents/AvatarLower";
import SvgItem from "../../HelpfulComponents/SvgItem";
import SvgLink from "../../HelpfulComponents/SvgLink";
import {NavLink} from "react-router-dom";
import userPng from '../../../assets/img/user.png';
import axios from "axios";

const User = ({id, status, followed, name, avatarLink, followUser, unfollowUser}) => {

    const onFollow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
            withCredentials: true,
            headers: {
                "API-KEY": "0e19ce1b-03e5-4caa-9644-e65156a21dcd",
            }
        })
            .then(response => {
                if(response.data.resultCode === 0) followUser(id);
            })
    }

    const onUnfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "0e19ce1b-03e5-4caa-9644-e65156a21dcd",
            }
        })
            .then(response => {
                if(response.data.resultCode === 0) unfollowUser(id);
            })
    }

    return (
        <div className={`${s.block} block`}>
            <AvatarLower url={avatarLink ? avatarLink : userPng}/>
            <NavLink to={`profile/${id}`} className={s.name}>{name}</NavLink>
            <p className={s.status}>{status}</p>
            <SvgLink link={`messages/${id}`} title={'send'} className={`${s.btn} ${s.sendBtn}`} svgClassName={s.svg}/>
            {followed ?
                <button onClick={() => onUnfollow()} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svgRed} urlId={'close'}/>
                </button>
                :
                <button onClick={() => onFollow()} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svg} urlId={'add-friend'}/>
                </button>
            }
        </div>
    )
}

export default User;