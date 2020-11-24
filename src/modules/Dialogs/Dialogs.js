import React from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import Messages from './Messages';

const Dialogs = (props) => {
    return (
        <main className={`${s.content}`}>
            <div className={`${s.header} block`}>
                <h1 className={s.title}>messages</h1>
                {/* <div className="underline"></div> */}
            </div>
            <aside className={s.people}>
                <Dialog 
                    name="Yana Pros" 
                    time={new Date().toTimeString().substr(0, 9)}
                    lastMsg="Hello"
                    avatarLink="https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg"
                />
            </aside>
            <Messages
                name="Yana Pros"
            />
        </main>
    );
}

export default Dialogs;