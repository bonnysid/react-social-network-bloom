import React from 'react';
import s from './Description.module.css';
import {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    const [isEditMode, toggleEditMode] = useState(false);
    const [status, editStatus] = useState(props.status);

    useEffect(() =>  {
        editStatus(props.status);
    }, [props.status])


    const activateEditMode = () => {
        toggleEditMode(true);
    }

    const deactivateEditMode = () => {
        toggleEditMode(false)
        props.updateUserStatus(status);
    }

    const onInputChange = (e) => {
        editStatus(e.currentTarget.value);
    }


    return (
        <div>
            {isEditMode ?
                <input className={s.input} onChange={(e) => onInputChange(e)} autoFocus={true}
                       onBlur={deactivateEditMode} value={status}/>
                :
                <p onTouchEnd={activateEditMode}
                   onDoubleClick={activateEditMode}>{props.status || 'Click to change it'}</p>
            }
        </div>
    )

}

export default ProfileStatus;