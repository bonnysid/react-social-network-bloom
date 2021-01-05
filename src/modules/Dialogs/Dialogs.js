import React from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages';
import {connect} from "react-redux";

const Dialogs = ({dialogs}) => {

    return (
        <main className={`${s.content}`}>
            <div className={`${s.header} block`}>
                <h1 className={s.title}>messages</h1>
            </div>
            <aside className={s.people}>
                {dialogs}
            </aside>
            <MessagesContainer />
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs.map(dialog => (
            <Dialog
                id={dialog.id}
                key={dialog.id}
                name={dialog.user.name}
                time={dialog.time}
                lastMsg={dialog.messages.length !== 0 ? dialog.messages[dialog.messages.length - 1].message : 'nothing'}
                avatarLink={dialog.user.avatarLink}
                isActive={dialog.isActive}
            />
        )),

    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;