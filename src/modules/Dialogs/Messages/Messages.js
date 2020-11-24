import React from 'react';
import s from './Messages.module.css';

const Messages = ({name}) => {
    return (
        <aside className={`${s.content} block`}>
            <div className={s.header}>
                <h2 className={s.title}>{name}</h2>
                
            </div>
            <div className="underline"></div>
            
            <div className={s.messages}>

            </div>

            <div className="input__msg">

            </div>
        </aside>
    );
}

export default Messages;