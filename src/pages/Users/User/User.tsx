import React from 'react';
import s from './User.module.css';
import AvatarLower from "../../../components/AvatarLower";
import SvgItem from "../../../components/SvgItem";
import SvgLink from "../../../components/SvgLink";
import {NavLink} from "react-router-dom";
import userPng from '../../../assets/img/user.png';
import {IUser, ToggleFollowType} from "../../../interfaces/users-interfaces";

interface UserProps {
    id: number,
    status: string | null,
    followed: boolean,
    name:string
    follow: ToggleFollowType,
    unfollow: ToggleFollowType,
    avatarLink: string | null,
    followingProcess: number[],
    handleSendMessage: (id: number) => void
}

const User: React.FC<UserProps> = ({handleSendMessage, id, status, followed, name, avatarLink, follow, unfollow, followingProcess}) => {

    return (
        <div className={`${s.block} block`}>
            <AvatarLower url={avatarLink ? avatarLink : userPng}/>
            <NavLink to={`profile/${id}`} className={s.name}>{name}</NavLink>
            <p className={s.status}>{status}</p>
            <button onClick={() => handleSendMessage(id)} className={`${s.btn} ${s.sendBtn}`}>
                <SvgLink link={`messages/`} title={'send'} className={`${s.btn} ${s.sendBtn}`} svgClassName={s.svg}/>
            </button>
            {followed ?
                <button disabled={followingProcess.some(userId => userId === id)} onClick={() => unfollow(id)} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svgRed} urlId={'close'}/>
                </button>
                :
                <button disabled={followingProcess.some(userId => userId === id)} onClick={() => follow(id)} className={`${s.btn} ${s.addBtn}`}>
                    <SvgItem width={'25px'} height={'25px'} className={s.svg} urlId={'add-friend'}/>
                </button>
            }
        </div>
    )
}

export default User;
