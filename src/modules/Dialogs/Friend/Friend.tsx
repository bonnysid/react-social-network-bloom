import React, {FC} from 'react'
import {IUser} from "../../../interfaces/users-interfaces";
import s from "./Friend.module.css";
import {NavLink} from "react-router-dom";
import SvgItem from '../../common/SvgItem';
import AvatarLower from '../../common/AvatarLower';

interface Props {
    user: IUser
    handleMessaging: () => void
}

const Friend: FC<Props> = ({user, handleMessaging}) => {
    const {username, photo, id, status} = user;

    return (
        <div className={`${s.block} block`}>
            <AvatarLower url={photo}/>
            <NavLink to={`profile/${id}`} className={s.name}>{username}</NavLink>
            <p className={s.status}>{status}</p>
            <button onClick={handleMessaging} className={`${s.btn}`}>
                <SvgItem width={'25px'} height={'25px'} className={`${s.btn}`} urlId={'send'}/>
            </button>
        </div>
    )
}

export default Friend