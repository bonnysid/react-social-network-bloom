import React, {FC, Ref, useRef} from 'react';
import s from './Message.module.css';
import useOutsideHandler from "../../../../hooks/useOutsideHandler";

export interface ModalProps {
    handleMessageEdit: () => void
    handleMessageDelete: () => void
    toggle: () => void
}

const MessageModal: FC<ModalProps> = ({ toggle, handleMessageEdit, handleMessageDelete }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={contentRef} className={`${s.modal}`}>
            <button className={`btn`} onClick={() => {
                handleMessageEdit()
                toggle()
            }}>Изменить</button>
            <button className={`${s.delete_btn}`} onClick={() => {
                handleMessageDelete()
                toggle()
            }}>Удалить</button>
        </div>
    )
}

export default MessageModal;
