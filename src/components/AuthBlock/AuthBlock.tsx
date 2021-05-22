import React, {FC} from 'react';
import s from './AuthBlock.module.css';
import AvatarLower from "../AvatarLower";
import {NavLink} from "react-router-dom";

interface Props {
    isAuth: boolean,
    username: string | null,
    right?: string | number,
    top?: string | number,
    left?: string | number,
    bottom?: string | number,
    login: () => void
    registration: () => void
}

const AuthBlock: FC<Props> = (props) => {
    return props.isAuth ?
                <NavLink to={'/profile'} className={s.container} style={{left: props.left, right: props.right, top: props.top, bottom: props.bottom}}>
                    <AvatarLower />
                    <p className={s.login}>{props.username}</p>
                </NavLink>
                :
                <div className={s.container} style={{left: props.left, right: props.right, top: props.top, bottom: props.bottom}}>
                    <button onClick={props.login} className={`btn`}>Login</button>
                    <button onClick={props.registration} className={`btn`}>Registration</button>
                </div>
};

export default AuthBlock;