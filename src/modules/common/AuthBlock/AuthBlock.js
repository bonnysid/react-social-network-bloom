import React from 'react';
import s from './AuthBlock.module.css';
import AvatarLower from "../AvatarLower";
import {NavLink} from "react-router-dom";

const AuthBlock = (props) => {
    return (
        <NavLink to={'/profile'} className={s.container} style={{left: props.left, right: props.right, top: props.top, bottom: props.bottom}}>
            {props.isAuth ?
                <>
                    <AvatarLower />
                    <p className={s.login}>{props.login}</p>
                </>
                :
                <button onClick={() => props.loginRequest()} className={`btn`}>Login</button>
            }
        </NavLink>
    );
};

export default AuthBlock;