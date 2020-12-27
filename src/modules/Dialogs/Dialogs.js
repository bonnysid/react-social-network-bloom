import React from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import Messages from './Messages';

const Dialogs = ({state: {dialogs}, dispatch}) => {

    const dialogsElements = dialogs.map(dialog => (
        <Dialog
            id={dialog.id}
            key={dialog.id}
            name={dialog.name}
            time={dialog.time}
            lastMsg={dialog.messages.length !== 0 ? dialog.messages[dialog.messages.length - 1].message : 'nothing'}
            avatarLink={dialog.avatarLink}
        />
    ));

    const activeDialog = dialogs.find(dialog => dialog.isActive === true);

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
                dialog={activeDialog}
                dispatch={dispatch}
            />
        </main>
    );
}

export default Dialogs;