import React, {useRef} from 'react';
import s from './Message.module.css';
import AvatarLower from '../../../../components/AvatarLower';
import {useActive} from "../../../../hooks/useActive";
import MessageModal from "./Modal";
import {useActions} from "../../../../hooks/useActions";
import useInput from "../../../../hooks/useInput";
import useOutsideHandler from "../../../../hooks/useOutsideHandler";

export interface MessageProps {
    id: string | number
    message: string
    avatarLink?: string | null
    time: string,
    name: string,
    handleEdit: () => void
}

const Message: React.FC<MessageProps> = ({id, message, avatarLink, time, name, handleEdit}) => {
    const {isActive: isModalActive, toggle: toggleModal} = useActive(false);
    const {deleteMessageThunk} = useActions();

    const handleDelete = () => {
        deleteMessageThunk(id)
    }

    return (
        <div onDoubleClick={toggleModal} className={s.content}>
            <AvatarLower url={avatarLink}/>
            <h2 className={s.name}>{name}</h2>
            <p className={s.text}>{message}</p>
            <time className={s.time}>{time}</time>
            {isModalActive && <MessageModal handleMessageDelete={handleDelete} handleMessageEdit={handleEdit}/>}
        </div>
    )
}

export default Message;
