import React from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import Messages from './Messages';

const Dialogs = ({state: {dialogs, messages}}) => {

    const dialogsElements = dialogs.map(dialog => (
        <Dialog
            id={dialog.id}
            name={dialog.name}
            time={dialog.time}
            lastMsg={dialog.lastMsg}
            avatarLink={dialog.avatarLink}
        />
    ));

    return (
        <main className={`${s.content}`}>
            <div className={`${s.header} block`}>
                <h1 className={s.title}>messages</h1>
                {/* <div className="underline"></div> */}
            </div>
            <aside className={s.people}>
                {dialogsElements}
            </aside>
            <Messages
                name="Yana Pros"
                messagesData={messages}
            />
        </main>
    );
}

export default Dialogs;