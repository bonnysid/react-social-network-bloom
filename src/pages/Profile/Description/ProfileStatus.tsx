import React, {useEffect, useState} from 'react';
import s from './Description.module.css';

interface StatusProps {
    status: string | null
    updateUserStatus: (status: string) => void
}

const ProfileStatus: React.FC<StatusProps> = (props) => {
    const [isEditMode, toggleEditMode] = useState(false);
    const [status, editStatus] = useState(props.status ?? '');

    useEffect(() => {
        editStatus(props.status ?? '');
    }, [props.status])


    const activateEditMode = () => {
        toggleEditMode(true);
    }

    const deactivateEditMode = () => {
        toggleEditMode(false)
        props.updateUserStatus(status);
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        editStatus(e.currentTarget.value);
    }


    return (
        <div>
            {isEditMode ?
                <input className={s.input} onChange={onInputChange} autoFocus={true}
                       onBlur={deactivateEditMode} value={status}/>
                :
                <p className={s.aboutText} onTouchEnd={activateEditMode}
                   onDoubleClick={activateEditMode}>{props.status || 'Click to change it'}</p>
            }
        </div>
    )

}

export default ProfileStatus;