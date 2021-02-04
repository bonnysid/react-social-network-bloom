import React from 'react';
import Dialog from './Dialog';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages';
import {connect} from "react-redux";
import Header from "../Header";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Dialogs = ({dialogs}) => {

    return (
        <>
            <Header title={'Messages'}/>
            <main className={`${s.content}`}>
                <aside className={s.people}>
                    {dialogs}
                </aside>
                <MessagesContainer />
            </main>
        </>

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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps)
)(Dialogs);