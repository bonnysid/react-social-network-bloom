import React, {FC, Ref, useRef} from 'react';
import s from './Message.module.css';
import useOutsideHandler from "../../../../hooks/useOutsideHandler";

export interface ModalProps {
    handleMessageEdit: () => void
    handleMessageDelete: () => void
}

const MessageModal: FC<ModalProps> = ({ handleMessageEdit, handleMessageDelete }) => {
    return (
        <div className={`block`}>
            <button className={`btn`} onClick={handleMessageEdit}>Изменить</button>
            <button className={`btn`} onClick={handleMessageDelete}>Удалить</button>
        </div>
    )
}

export default MessageModal;
